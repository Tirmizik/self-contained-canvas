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
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-section mb-8">About Me</h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Biography */}
              <div className="lg:col-span-2 animate-fade-in">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Who I Am</h3>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
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
              
              {/* Education & Experience */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Education</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                        <h4 className="font-semibold text-foreground">Bachelor of Design</h4>
                        <p className="text-foreground/70">Visual Communication Design</p>
                        <p className="text-sm text-foreground/60">University of Arts • 2018-2022</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Certifications</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-background/30 rounded-lg">
                        <h4 className="font-medium text-foreground">Google UX Design Certificate</h4>
                        <p className="text-sm text-foreground/60">2023</p>
                      </div>
                      <div className="p-3 bg-background/30 rounded-lg">
                        <h4 className="font-medium text-foreground">Adobe Certified Expert</h4>
                        <p className="text-sm text-foreground/60">2022</p>
                      </div>
                      <div className="p-3 bg-background/30 rounded-lg">
                        <h4 className="font-medium text-foreground">Figma Design Systems</h4>
                        <p className="text-sm text-foreground/60">2023</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Experience</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                        <h4 className="font-semibold text-foreground">Senior UX/UI Designer</h4>
                        <p className="text-foreground/70">TechCorp Inc.</p>
                        <p className="text-sm text-foreground/60">2022 - Present</p>
                      </div>
                      <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                        <h4 className="font-semibold text-foreground">Product Designer</h4>
                        <p className="text-foreground/70">StartupXYZ</p>
                        <p className="text-sm text-foreground/60">2020 - 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
