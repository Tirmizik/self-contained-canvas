import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ContactSection from '@/components/portfolio/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <section id="about" className="section-padding bg-card">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <div className="animate-fade-in">
              <h2 className="text-section mb-8">About Me</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                I'm a passionate UX/UI designer with over 5 years of experience creating digital products 
                that make a difference. My approach combines user-centered design principles with modern 
                aesthetics to deliver solutions that are both beautiful and functional.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                When I'm not designing, you can find me exploring new design trends, experimenting with 
                prototyping tools, or mentoring upcoming designers in the community.
              </p>
            </div>
          </div>
        </section>
        
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <footer className="bg-background py-8 border-t border-border">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 mb-4 md:mb-0">
              © 2024 Tirmizi Kasim. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                Dribbble
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                Behance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
