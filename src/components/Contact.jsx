import React, { useState } from 'react';
import { Send, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      // Using Web3Forms - Get your free access key at https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your actual key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-10 md:px-24 bg-tertiary/10">
      {/* LARGE SOCIAL EXPLORE BUTTONS */}
      <div className="flex flex-col items-center gap-5 mb-32">
         <a href="https://github.com/dhritigupta-1" target="_blank" className="group flex items-center justify-between w-full max-w-md px-10 py-5 rounded-full bg-accent text-white font-bold text-lg hover:scale-105 transition-all shadow-xl">
            <div className="flex items-center gap-4"><Github /> Explore My GitHub</div>
            <ArrowRight className="group-hover:translate-x-2 transition" />
         </a>
         <a href="https://www.linkedin.com/in/dhriti2005/" target="_blank" className="group flex items-center justify-between w-full max-w-md px-10 py-5 rounded-full bg-accent text-white font-bold text-lg hover:scale-105 transition-all shadow-xl">
            <div className="flex items-center gap-4"><Linkedin /> Explore My LinkedIn</div>
            <ArrowRight className="group-hover:translate-x-2 transition" />
         </a>
      </div>

      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold">Get In <span className="text-accent italic">Touch</span></h2>
        <p className="text-secondary mt-4 max-w-2xl mx-auto">
          I am currently open to work opportunities — whether it's a full-time role, internship, or collaboration. Let's connect!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-20">
        {/* LEFT SIDE: CONTACT INFO */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-10">Contact Information</h3>
          <div className="space-y-8">
            <div>
              <p className="text-accent font-bold text-sm uppercase tracking-widest mb-1">Email</p>
              <p className="text-xl md:text-2xl">{personalInfo.email}</p>
            </div>
            <div>
              <p className="text-accent font-bold text-sm uppercase tracking-widest mb-1">Location</p>
              <p className="text-xl md:text-2xl">{personalInfo.location}</p>
            </div>
          </div>

          <div className="mt-16">
            <p className="font-bold mb-6 text-secondary uppercase text-xs tracking-[0.2em]">Connect With Me</p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/dhriti2005/" target="_blank" className="p-4 bg-tertiary rounded-2xl border border-white/5 hover:border-accent hover:text-accent transition duration-300"><Linkedin /></a>
              <a href="https://github.com/dhritigupta-1" target="_blank" className="p-4 bg-tertiary rounded-2xl border border-white/5 hover:border-accent hover:text-accent transition duration-300"><Github /></a>
              <a href={`mailto:${personalInfo.email}`} className="p-4 bg-tertiary rounded-2xl border border-white/5 hover:border-accent hover:text-accent transition duration-300"><Mail /></a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: MESSAGE FORM CARD */}
        <div className="bg-tertiary p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full"></div>
          <h3 className="text-2xl font-bold mb-8 text-center">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3 text-secondary">Your Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="What's your name..." 
                className="w-full bg-primary/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent outline-none transition" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-3 text-secondary">Your Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your mail..." 
                className="w-full bg-primary/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent outline-none transition" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-3 text-secondary">Your Message</label>
              <textarea 
                rows="4" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Hello, I'd like to ..." 
                className="w-full bg-primary/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent outline-none transition resize-none"
              ></textarea>
            </div>
            
            {status === 'success' && (
              <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-3 rounded-xl text-center">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {status === 'error' && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-xl text-center">
                Failed to send message. Please try again or email directly.
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/80 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;