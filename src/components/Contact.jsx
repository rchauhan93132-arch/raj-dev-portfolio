import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedKey, setCopiedKey] = useState('');

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onShowToast && onShowToast(`Copied ${key} to clipboard! 📋`);
    setTimeout(() => setCopiedKey(''), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast && onShowToast('Please fill out all fields! ⚠️');
      return;
    }

    onShowToast && onShowToast('Thank you! Your message has been sent. 🚀');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="sec-label">// let_connect</div>
        <div className="sec-title">
          Get In <span>Touch</span>
        </div>

        <div className="contact-grid">
          {/* Direct Channels */}
          <div>
            <div className="touchpoint-row">
              <div className="tp-info">
                <span className="tp-icon">📧</span>
                <div>
                  <div className="tp-label">Email Address</div>
                  <div className="tp-val">{personal.email}</div>
                </div>
              </div>
              <button
                className="copy-btn"
                onClick={() => handleCopy(personal.email, 'Email')}
              >
                {copiedKey === 'Email' ? 'Copied! ✓' : 'Copy'}
              </button>
            </div>

            <div className="touchpoint-row">
              <div className="tp-info">
                <span className="tp-icon">📱</span>
                <div>
                  <div className="tp-label">Direct Phone / WhatsApp</div>
                  <div className="tp-val">{personal.phone}</div>
                </div>
              </div>
              <button
                className="copy-btn"
                onClick={() => handleCopy(personal.phone, 'Phone')}
              >
                {copiedKey === 'Phone' ? 'Copied! ✓' : 'Copy'}
              </button>
            </div>

            <div className="touchpoint-row">
              <div className="tp-info">
                <span className="tp-icon">📍</span>
                <div>
                  <div className="tp-label">Location</div>
                  <div className="tp-val">{personal.location}</div>
                </div>
              </div>
            </div>

            <div className="contact-card" style={{ marginTop: '20px' }}>
              <h4 style={{ color: '#fff', marginBottom: '8px' }}>Open for Full-Time &amp; Internship Roles</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Looking to collaborate on real-world web applications, Flutter mobile development, or scalable software engineering projects.
              </p>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="contact-card">
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#fff' }}>
              Send Direct Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <span>Transmit Message</span>
                <span>⚡</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
