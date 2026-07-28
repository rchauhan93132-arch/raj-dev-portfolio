import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onShowToast) onShowToast('Please fill in all required fields! ⚠️');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      if (onShowToast) onShowToast('Message sent successfully! 🚀');
    }, 800);
  };

  return (
    <section id="contact">
      <div className="sec-label reveal">// get_in_touch</div>
      <div className="sec-title reveal">
        Contact <span>Me</span>
      </div>
      
      <div className="contact-grid" style={{ marginBottom: '40px' }}>
        <a href={`mailto:${personal.email}`} className="contact-card reveal">
          <div className="cc-icon">📧</div>
          <div>
            <div className="cc-label">Email</div>
            <div className="cc-val">{personal.email}</div>
          </div>
        </a>

        <a href={`tel:+91${personal.phone}`} className="contact-card reveal">
          <div className="cc-icon">📱</div>
          <div>
            <div className="cc-label">Phone</div>
            <div className="cc-val">{personal.phone}</div>
          </div>
        </a>

        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card reveal"
        >
          <div className="cc-icon">🐙</div>
          <div>
            <div className="cc-label">GitHub</div>
            <div className="cc-val">github.com/rajchauhan</div>
          </div>
        </a>

        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card reveal"
        >
          <div className="cc-icon">💼</div>
          <div>
            <div className="cc-label">LinkedIn</div>
            <div className="cc-val">linkedin.com/in/rajchauhan</div>
          </div>
        </a>

        <div className="contact-card reveal">
          <div className="cc-icon">📍</div>
          <div>
            <div className="cc-label">Location</div>
            <div className="cc-val">{personal.location}</div>
          </div>
        </div>

        <div className="contact-card reveal">
          <div className="cc-icon">🎓</div>
          <div>
            <div className="cc-label">University</div>
            <div className="cc-val">{personal.university} · B.Voc IT</div>
          </div>
        </div>
      </div>

      {/* Interactive Quick Message Form */}
      <div className="contact-form-container reveal">
        <h3 className="contact-form-title">Send a Direct Message</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Raj Patel"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry / Job Opportunity"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hello Raj, I'd like to talk about..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message ✉️'}
          </button>
        </form>
      </div>
    </section>
  );
}
