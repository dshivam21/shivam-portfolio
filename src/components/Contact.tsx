import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  return (
    <section id="contact" className="section container">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind, a question, or just want to say hi? Drop me a message!
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3 className="contact-info-title">Let's talk</h3>
          <p className="contact-info-text">
            I'm always open to discussing new opportunities, web projects, or ML development collaborations.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <Mail size={20} />
              </div>
              <div className="contact-detail-content">
                <h4>Email</h4>
                <p>
                  <a href="mailto:dwivedishivam464@gmail.com">dwivedishivam464@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <Phone size={20} />
              </div>
              <div className="contact-detail-content">
                <h4>Phone</h4>
                <p>
                  <a href="tel:+919113178121">+91 9113178121</a>
                </p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-detail-content">
                <h4>Location</h4>
                <p>Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form glass-card">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="form-control"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'} <Send size={16} />
          </button>

          {status === 'success' && (
            <p className="form-status success">✓ Message sent successfully! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="form-status error">✗ Please fill out all fields correctly.</p>
          )}
        </form>
      </div>
    </section>
  );
}
