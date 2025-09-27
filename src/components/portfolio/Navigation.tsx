import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about me', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'nav-blur border-b border-foreground/10' : ''
    }`}>
      <div className="max-w-7xl mx-auto container-padding py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-2xl font-black tracking-tight">
              Tirmizi Kasim
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/70 hover:text-foreground font-medium transition-all duration-300 
                         hover:scale-105 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent 
                               transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <a 
              href="https://drive.google.com/file/d/1xBy-EDFpjNWRs_WEckgFWSKWys6y59ri/view?usp=drive_link"
              download="Tirmizi-Kasim-Resume.pdf"
              className="text-foreground/70 hover:text-primary font-medium transition-all duration-300 
                       border border-foreground/20 hover:border-primary px-4 py-2 rounded-full 
                       flex items-center gap-2 hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 
                       text-primary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 
                       hover:scale-105 hover:shadow-lg hover-glow"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-effect rounded-2xl p-6 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-foreground/80 hover:text-foreground font-medium 
                         py-2 transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-foreground/10 space-y-3">
              <a 
                href="https://drive.google.com/file/d/1xBy-EDFpjNWRs_WEckgFWSKWys6y59ri/view?usp=drive_link"
                download="Tirmizi-Kasim-Resume.pdf"
                className="block text-center text-foreground/70 hover:text-primary font-medium 
                         border border-foreground/20 hover:border-primary px-4 py-3 rounded-full 
                         transition-all duration-300"
              >
                Download Resume
              </a>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full bg-gradient-to-r from-primary to-accent text-primary-foreground 
                         px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
