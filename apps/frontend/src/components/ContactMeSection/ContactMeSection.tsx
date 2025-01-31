import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMeSection.scss';
import { environment } from '../../environment';
import { DynamicHeading, DynamicParagraph } from '@my-portfolio/react-components';

const ContactMeSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        environment.mailServiceId, // Replace with your EmailJS Service ID
        environment.mailTemplateId, // Replace with your EmailJS Template ID
        formData,           // Form data (e.g., name, email, message)
        environment.mailClientId // Replace with your EmailJS Public API Key
      )
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id='contact' className="contact-me-section">
      <DynamicParagraph className='contact-me-title'>Contact Me</DynamicParagraph>
      <DynamicParagraph className="contact-me-subtitle">Let's build something great together!</DynamicParagraph>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={4} required></textarea>
        </div>
        <button type="submit" className="btn submit-btn">Send Message</button>
      </form>

      <DynamicParagraph className="form-status">{status}</DynamicParagraph>
    </section>
  );
};
export default ContactMeSection;