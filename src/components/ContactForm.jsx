import { useState } from 'react';

const initial = {
  name: '',
  email: '',
  organization: '',
  profile: '',
  subject: '',
  message: '',
  website: '',
};

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status.state === 'sending') return;
    setStatus({ state: 'sending', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Erreur lors de l\'envoi.');
      setStatus({ state: 'success', message: 'Message envoyé. Nous reviendrons vers vous rapidement.' });
      setValues(initial);
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Erreur réseau.' });
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={onChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />

      <div className="form-row">
        <label className="form-field">
          <span>Nom *</span>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
            required
            autoComplete="name"
          />
        </label>
        <label className="form-field">
          <span>Email *</span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            required
            autoComplete="email"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-field">
          <span>Organisation</span>
          <input
            type="text"
            name="organization"
            value={values.organization}
            onChange={onChange}
            autoComplete="organization"
          />
        </label>
        <label className="form-field">
          <span>Profil</span>
          <select name="profile" value={values.profile} onChange={onChange}>
            <option value="">Sélectionner…</option>
            <option>Collectivité</option>
            <option>Financeur</option>
            <option>ARS</option>
            <option>Opérateur / acteur médico-social</option>
            <option>Entreprise / mutuelle</option>
            <option>Association</option>
            <option>Aidant / famille</option>
            <option>Autre</option>
          </select>
        </label>
      </div>

      <label className="form-field">
        <span>Sujet</span>
        <input type="text" name="subject" value={values.subject} onChange={onChange} />
      </label>

      <label className="form-field">
        <span>Message *</span>
        <textarea
          name="message"
          value={values.message}
          onChange={onChange}
          rows={6}
          required
          maxLength={5000}
        />
      </label>

      <div className="form-actions">
        <button type="submit" className="btn" disabled={status.state === 'sending'}>
          {status.state === 'sending' ? 'Envoi…' : 'Envoyer'}
        </button>
        {status.state === 'success' && (
          <p className="form-msg form-msg-ok">{status.message}</p>
        )}
        {status.state === 'error' && (
          <p className="form-msg form-msg-err">{status.message}</p>
        )}
      </div>
    </form>
  );
}
