import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-background/10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section mb-4 text-foreground">Let's Work Together</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Get In Touch</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  I'm always open to discussing new opportunities, creative projects, 
                  and potential collaborations. Let's create something amazing together.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <p className="text-foreground/70">alex.chen.design@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Phone</p>
                    <p className="text-foreground/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Location</p>
                    <p className="text-foreground/70">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/20 border border-foreground/20 rounded-xl 
                           text-foreground placeholder:text-foreground/50 focus:outline-none 
                           focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-foreground font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/20 border border-foreground/20 rounded-xl 
                           text-foreground placeholder:text-foreground/50 focus:outline-none 
                           focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background/20 border border-foreground/20 rounded-xl 
                           text-foreground placeholder:text-foreground/50 focus:outline-none 
                           focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground 
                         px-8 py-4 rounded-xl font-medium text-lg transition-all hover-glow
                         focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;