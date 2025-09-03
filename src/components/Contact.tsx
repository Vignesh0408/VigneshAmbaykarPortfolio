import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Particles from 'react-tsparticles';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mpwlllqr", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('⚠️ Something went wrong. Try again.');
      }
    } catch {
      alert('❌ Error sending message.');
    }

    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/vigneshambaykar', color: 'hover:text-blue-600' },
    { icon: Github, label: 'GitHub', url: 'https://github.com/Vignesh0408', color: 'hover:text-gray-200' },
    { icon: ExternalLink, label: 'Medium', url: 'https://medium.com/@vignesh3967', color: 'hover:text-green-500' },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://i.postimg.cc/fLbkCy4x/backgroiund.jpg"
        alt="contact bg"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"
      />

      {/* Firefly Particles */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: { color: 'transparent' },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            number: { value: 50 },
            color: { value: ['#aaff00', '#ffff66', '#ccff33'] },
            shape: { type: 'circle' },
            opacity: {
              value: 0.6,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: true, speed: 3, size_min: 1, sync: false },
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: 'none',
              random: true,
              outMode: 'bounce',
            },
            twinkle: {
              particles: {
                enable: true,
                frequency: 0.05,
                opacity: 1,
              },
            },
            shadow: {
              enable: true,
              color: '#aaff00',
              blur: 3,
            },
          },
          detectRetina: true,
        }}
      />

      {/* Contact Content */}
      <div className="container relative z-10 mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-8">Let's work together</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Open to new opportunities, interesting projects, or collaboration in cybersecurity. Feel free to reach out!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="p-3 bg-white/10 rounded-lg mr-4">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:vigneshambaykarjob@gmail.com" className="text-gray-300 hover:text-white">vigneshambaykarjob@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-3 bg-white/10 rounded-lg mr-4">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-gray-300">Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/10 text-white rounded-lg transition-all duration-300 hover:scale-110 ${link.color}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'subject'].map((field) => (
                <input
                  key={field}
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  required
                  value={(formData as any)[field]}
                  onChange={handleInputChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-black/60 text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:outline-none transition-all duration-300"
                />
              ))}
              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-black/60 text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:outline-none transition-all duration-300"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : (<><Send size={20} /> Send Message</>)}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="bg-white text-black p-8 rounded-2xl shadow-xl max-w-md w-full relative animate-fade-in">
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-500 hover:text-black">
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold mb-4">✅ Message Sent</h3>
            <p className="text-gray-700">Thanks for reaching out! I'll get back to you shortly.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;