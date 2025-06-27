import React, { useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback('');
    try {
      // Send feedback to backend (optional, you can remove this if not needed)
      // await axios.post('http://localhost:4000/contact', { name, email, message });
      // Send email via emailjs
      const serviceId = 'service_zw438dl';
      const templateId = 'template_zk42ukc';
      const publicKey = 'zkxkAXEIZTPcnMzi0';
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Granthalaya',
        message: message
      };
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setName('');
      setEmail('');
      setMessage('');
      setFeedback('Message sent successfully!');
    } catch (error) {
      setFeedback('Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] py-8 px-2">
      <form onSubmit={handleSubmit} className="glass max-w-lg w-full p-8 rounded-2xl shadow-glass border border-primary/10 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-primary mb-2 text-center">Contact Us</h2>
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold text-primary">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your name" 
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-primary-light rounded-lg focus:ring-2 focus:ring-primary outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold text-primary">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Email address" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-primary-light rounded-lg focus:ring-2 focus:ring-primary outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-semibold text-primary">Message</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Type your message" 
            rows={5} 
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 border border-primary-light rounded-lg focus:ring-2 focus:ring-primary outline-none transition resize-vertical"
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="btn btn-accent w-full py-2 mt-2 text-lg font-semibold"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {feedback && <div className={`mt-2 text-center text-base ${feedback.includes('success') ? 'text-success' : 'text-error'}`}>{feedback}</div>}
      </form>
    </div>
  )
}

export default Contact;
