import nodemailer from 'nodemailer';

const REQUIRED_ENV = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const missing = REQUIRED_ENV.filter((k) => !process.env[k]);
  if (missing.length) {
    return res
      .status(500)
      .json({ error: `SMTP non configuré : variable(s) manquante(s) ${missing.join(', ')}` });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const { name = '', email = '', organization = '', profile = '', subject = '', message = '', website = '' } = body;

  if (website) {
    return res.status(200).json({ ok: true });
  }

  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ error: 'Champs requis manquants (nom, email, message).' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Adresse email invalide.' });
  }

  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message trop long (5000 caractères max).' });
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

  const to = process.env.CONTACT_TO || 'saiderplus.gpe@gmail.com';
  const from = process.env.CONTACT_FROM || process.env.SMTP_USER;
  const finalSubject = subject.trim() || `Contact site — ${name}`;

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
