const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-background/20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto container-padding">
        <div className="animate-fade-in">
          <h1 className="text-hero mb-6">
            UX/UI Designer
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that blend creativity with functionality. 
            I design intuitive interfaces that users love and businesses need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-medium transition-all hover-glow"
            >
              View My Work
            </button>
            <a 
              href="/Alex-Chen-Resume.pdf"
              download="Alex-Chen-Resume.pdf"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium transition-all hover-glow flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-foreground/20 hover:border-primary text-foreground px-8 py-4 rounded-full text-lg font-medium transition-all"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;