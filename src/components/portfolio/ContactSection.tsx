import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual backend call when Supabase is connected)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-background via-background/95 to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-float-delayed"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto container-padding">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-section mb-6 text-foreground">Let's Work Together</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I'm here to help create exceptional digital experiences 
            that make a lasting impact. Let's discuss your project and explore the possibilities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 animate-slide-up">
            <div className="glass-effect rounded-3xl p-8 h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h3>
                <p className="text-foreground/70 leading-relaxed">
                  I'm always excited to connect with new people and explore creative opportunities. 
                  Whether you have a project in mind or just want to say hello, I'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold mb-1">Email</p>
                    <a href="mailto:tirmizi875@email.com" className="text-foreground/70 hover:text-primary transition-colors">
                      tirmizi875@email.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold mb-1">Phone</p>
                    <a href="tel:+251946464070" className="text-foreground/70 hover:text-primary transition-colors">
                      +251946464070
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold mb-1">Location</p>
                    <p className="text-foreground/70">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-effect rounded-3xl p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Send me a message</h3>
                <p className="text-foreground/70">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-400">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="font-medium">Thank you! Your message has been sent successfully. I'll get back to you within few minutes.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground font-semibold mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-4 bg-background/30 border-2 rounded-2xl 
                               text-foreground placeholder:text-foreground/50 focus:outline-none 
                               transition-all duration-300 ${
                                 errors.name 
                                   ? 'border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                                   : 'border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20'
                               }`}
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-foreground font-semibold mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-4 bg-background/30 border-2 rounded-2xl 
                               text-foreground placeholder:text-foreground/50 focus:outline-none 
                               transition-all duration-300 ${
                                 errors.email 
                                   ? 'border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                                   : 'border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20'
                               }`}
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-foreground font-semibold mb-3">
                    Project idea tip *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-4 bg-background/30 border-2 rounded-2xl 
                               text-foreground placeholder:text-foreground/50 focus:outline-none 
                               transition-all duration-300 resize-none ${
                                 errors.message 
                                   ? 'border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                                   : 'border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20'
                               }`}
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                  )}
                  <p className="mt-2 text-sm text-foreground/50">
                    {formData.message.length}/1000 characters
                  </p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 
                           disabled:from-primary/50 disabled:to-accent/50 disabled:cursor-not-allowed
                           text-primary-foreground px-8 py-4 rounded-2xl font-bold text-lg 
                           transition-all duration-300 hover-glow hover-lift flex items-center justify-center gap-3
                           focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
