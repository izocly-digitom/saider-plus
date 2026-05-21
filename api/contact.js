import nodemailer from 'nodemailer';

const REQUIRED_ENV = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_TO'];

const MAX = {
  name: 200,
  email: 254,
  organization: 200,
  profile: 80,
  subject: 200,
  message: 5000,
};

// Returns true if the char code is a C0 control char (< 0x20) or DEL (0x7F).
const isControl = (code) => code < 32 || code === 127;

// Strips CR/LF (header injection guard) + every other control char,
// collapses whitespace, trims, caps length.
const cleanLine = (raw, max) =>
  String(raw ?? '')
    .split('')
    .map((c) => (isControl(c.charCodeAt(0)) ? ' ' : c))
    .join('')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);

// Same as cleanLine but preserves \n in the body of the message.
const cleanMultiline = (raw, max) =>
  String(raw ?? '')
    .replace(/\r\n?/g, '\n')
    .split('')
    .map((c) => {
      const code = c.charCodeAt(0);
      if (code === 10) return c;
      return isControl(code) ? '' : c;
    })
    .join('')
    .trim()
    .slice(0, max);

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const missing = REQUIRED_ENV.filter((k) => !process.env[k]);
  if (missing.length) {
    return res
      .status(500)
      .json({ error: `Configuration manquante : ${missing.join(', ')}` });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  } catch {
    return res.status(400).json({ error: 'Corps de requête invalide.' });
  }

  // Honeypot — silently accept so bots don't get a useful signal.
  if (body.website && String(body.website).trim() !== '') {
    return res.status(200).json({ ok: true });
  }

  const name = cleanLine(body.name, MAX.name);
  const email = cleanLine(body.email, MAX.email);
  const organization = cleanLine(body.organization, MAX.organization);
  const profile = cleanLine(body.profile, MAX.profile);
  const subject = cleanLine(body.subject, MAX.subject);
  const message = cleanMultiline(body.message, MAX.message);

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs requis manquants (nom, email, message).' });
  }

  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Adresse email invalide.' });
  }

  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === 'true'
    : port === 465;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || process.env.SMTP_USER;
  const finalSubject = subject || `Contact site — ${name}`;

  const html = `
    <h2>Nouveau message du site S'AIDER PLUS Village</h2>
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>Email :</strong> ${escapeHtml(email)}</p>
    <p><strong>Organisation :</strong> ${escapeHtml(organization) || '—'}</p>
    <p><strong>Profil :</strong> ${escapeHtml(profile) || '—'}</p>
    <p><strong>Sujet :</strong> ${escapeHtml(finalSubject)}</p>
    <hr />
    <pre style="font-family: inherit; white-space: pre-wrap;">${escapeHtml(message)}</pre>
  `;

  const text = [
    `Nom : ${name}`,
    `Email : ${email}`,
    `Organisation : ${organization || '—'}`,
    `Profil : ${profile || '—'}`,
    `Sujet : ${finalSubject}`,
    '',
    message,
  ].join('\n');

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[S'AIDER PLUS] ${finalSubject}`,
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact SMTP error:', err);
    return res.status(502).json({ error: "L'envoi a échoué. Réessayez plus tard." });
  }
}
