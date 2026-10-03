import React, { useState } from 'react';
import { profile } from '../../data/profile';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  topic: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  topic: 'Freelance Security Project',
  message: '',
};

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!form.email.trim() || !form.email.includes('@')) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!form.message.trim()) {
      setValidationError('Please write a message before sending.');
      return;
    }

    setStatus('submitting');
    setValidationError('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Name: form.name.trim(),
          Email: form.email.trim(),
          Topic: form.topic,
          Message: form.message.trim(),
          _subject: `New Portfolio Message from ${form.name.trim()} [${form.topic}]`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setForm(initialForm);
      } else {
        throw new Error('Form service response error');
      }
    } catch (err) {
      console.warn('FormSubmit network error, providing email fallback:', err);
      setStatus('error');
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio Message: ${form.topic} from ${form.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  if (status === 'success') {
    return (
      <div
        style={{
          border: '1px solid var(--border-default)',
          backgroundColor: 'var(--bg-surface)',
          borderRadius: 'var(--radius-xs)',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <CheckCircle2 size={40} color="var(--accent)" />
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
          Message Delivered Directly!
        </h3>
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '460px',
            margin: 0,
          }}
        >
          Thank you for reaching out. Your message has been sent directly to Someshwar's inbox. He will review your inquiry and reply shortly.
        </p>

        <button
          onClick={() => setStatus('idle')}
          style={{
            marginTop: '0.5rem',
            padding: '0.6rem 1.25rem',
            fontSize: '0.8125rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            backgroundColor: 'transparent',
            color: 'var(--accent)',
            border: '1px solid rgba(244, 63, 94, 0.4)',
            borderRadius: 'var(--radius-xs)',
            cursor: 'pointer',
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        border: '1px solid var(--border-default)',
        backgroundColor: 'var(--bg-surface)',
        borderRadius: 'var(--radius-xs)',
        padding: '2rem',
      }}
    >
      <div style={{ marginBottom: '1.5rem' }}>
        <div
          className="font-mono"
          style={{
            fontSize: '0.75rem',
            color: 'var(--accent)',
            fontWeight: 600,
            marginBottom: '0.35rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          Direct Message Box
        </div>
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          Send a Message to Someshwar
        </h3>
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            marginTop: '0.35rem',
            lineHeight: 1.5,
          }}
        >
          Type your message below to send an email directly to my inbox. No external mail client required.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Name & Email Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
          }}
        >
          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">
              Your Name *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="e.g. Alex Morgan"
              value={form.name}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email" className="form-label">
              Your Email Address *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="e.g. alex@company.com"
              value={form.email}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className="form-input"
            />
          </div>
        </div>

        {/* Topic Dropdown */}
        <div className="form-group">
          <label htmlFor="contact-topic" className="form-label">
            Opportunity / Topic
          </label>
          <select
            id="contact-topic"
            name="topic"
            value={form.topic}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className="form-select"
          >
            <option value="Freelance Security Project">Freelance Security Project</option>
            <option value="SOC Engineering / Detection Pipeline">SOC Engineering / Detection Pipeline</option>
            <option value="DevSecOps / CI-CD Security">DevSecOps / CI-CD Security</option>
            <option value="Cloud Security Assessment">Cloud Security Assessment (AWS)</option>
            <option value="Threat Hunting Engagement">Threat Hunting Engagement</option>
            <option value="SOC Analyst Role">SOC Analyst Role</option>
            <option value="Internship / Full-time Opportunity">Internship / Full-time Opportunity</option>
            <option value="General Inquiry / Collaboration">General Inquiry / Collaboration</option>
          </select>
        </div>

        {/* Message Textarea */}
        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">
            Your Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            placeholder="Write your project requirements, scope, role details, or message here..."
            value={form.message}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className="form-textarea"
            rows={4}
          />
        </div>

        {/* Validation Error Banner */}
        {validationError && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 0.85rem',
              backgroundColor: 'rgba(244, 63, 94, 0.1)',
              border: '1px solid rgba(244, 63, 94, 0.3)',
              borderRadius: 'var(--radius-xs)',
              color: 'var(--accent)',
              fontSize: '0.8125rem',
              marginBottom: '1rem',
            }}
          >
            <AlertCircle size={15} />
            <span>{validationError}</span>
          </div>
        )}

        {/* Error Fallback */}
        {status === 'error' && (
          <div
            style={{
              padding: '0.85rem 1rem',
              backgroundColor: 'rgba(244, 63, 94, 0.08)',
              border: '1px solid rgba(244, 63, 94, 0.3)',
              borderRadius: 'var(--radius-xs)',
              marginBottom: '1.25rem',
              fontSize: '0.8125rem',
              color: 'var(--text-secondary)',
            }}
          >
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.35rem' }}>
              Submission issue detected
            </div>
            <p style={{ margin: '0 0 0.5rem 0' }}>
              The automated dispatch was unable to complete. You can send this message directly via your email app:
            </p>
            <button
              type="button"
              onClick={handleMailtoFallback}
              style={{
                padding: '0.45rem 0.85rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                backgroundColor: 'var(--accent)',
                color: '#fff',
                border: 'none',
                borderRadius: 'var(--radius-xs)',
                cursor: 'pointer',
              }}
            >
              Open Email App with this Message →
            </button>
          </div>
        )}

        {/* Submit Button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            type="submit"
            disabled={status === 'submitting'}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--accent)',
              color: '#ffffff',
              border: 'none',
              borderRadius: 'var(--radius-xs)',
              cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
              opacity: status === 'submitting' ? 0.75 : 1,
              transition: 'opacity var(--transition-fast)',
            }}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={16} className="spin-animation" />
                <span>Sending directly...</span>
              </>
            ) : (
              <>
                <Send size={15} />
                <span>Send Message Directly</span>
              </>
            )}
          </button>

          <span
            className="font-mono"
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
            }}
          >
            Sends email directly to {profile.email}
          </span>
        </div>
      </form>
    </div>
  );
};
