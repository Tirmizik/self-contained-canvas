import personalBrandImage from '@/assets/personal-brand-hero.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Animated background elements with enhanced effects */}
      <div className="absolute inset-0 animate-morphing-bg"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-bounce slow-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/30 rounded-full blur-lg animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-primary/10 rounded-full blur-md animate-float-delayed"></div>
      <div className="absolute bottom-1/3 left-1/5 w-16 h-16 bg-accent/15 rounded-full blur-sm animate-pulse-slow"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="mb-4 animate-fade-in-delay-1">
              <span className="text-primary/80 text-lg font-medium tracking-wide">Hello, I'm</span>
            </div>
            <h1 className="text-hero mb-6 animate-fade-in-delay-2">
              Tirmizi Kasim
            </h1>
            <div className="mb-6 animate-fade-in-delay-3">
              <span className="text-2xl md:text-3xl font-semibold text-foreground/90 text-gradient-animate">
                UX/UI Designer- Product Designer
              </span>
            </div>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl leading-relaxed animate-fade-in-delay-4">
              Crafting digital experiences that blend creativity with functionality. 
              I design intuitive interfaces that users love and businesses need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-delay-5">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-medium transition-all hover-glow hover-lift"
              >
                View My Work
              </button>
              <a 
                href="https://drive.google.com/file/d/1xBy-EDFpjNWRs_WEckgFWSKWys6y59ri/view?usp=drive_link"
                download="Tirmizi-Kasim-Resume.pdf"
                className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium transition-all hover-glow hover-lift flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-foreground/20 hover:border-primary text-foreground px-8 py-4 rounded-full text-lg font-medium transition-all hover-lift"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          {/* Right side - Personal brand image */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover-glow image-shimmer glass-effect border border-white/10">
                <img 
                  src={personalBrandImage} 
                  alt="Tirmizi Kasim - UX/UI Designer Personal Brand" 
                  className="w-full h-auto object-cover animate-fade-in-delay-6 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-primary/10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
              </div>
            </div>
            
            {/* Enhanced floating design elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-lg animate-float-delayed animate-glow-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-accent/25 rounded-full blur-md animate-pulse-slow"></div>
            <div className="absolute top-1/2 -right-4 w-12 h-12 bg-secondary/20 rounded-full blur-sm animate-float"></div>
            <div className="absolute bottom-1/4 -left-4 w-8 h-8 bg-primary/30 rounded-full blur-xs animate-bounce-slow"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center hover:border-primary transition-colors cursor-pointer"
             onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
