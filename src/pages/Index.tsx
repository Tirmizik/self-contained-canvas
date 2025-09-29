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
                    I'm a passionate UX/UI designer with  creating digital products 
                    that make a difference. My approach combines user-centered design principles with modern 
                    aesthetics to deliver solutions that are both beautiful and functional.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                   I enjoy exploring emerging design trends, experimenting with advanced prototyping tools,
                    and mentoring aspiring designers in the community.
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
                        <h4 className="font-semibold text-foreground">Bachelor of science </h4>
                        <p className="text-foreground/70">Electrical & Computer Engineering( Computer Engineering Stream)</p>
                        <p className="text-sm text-foreground/60">Ambo Univesity • 2015-2021</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                        <h4 className="font-semibold text-foreground">Bachelor of Art </h4>
                        <p className="text-foreground/70">Management)</p>
                        <p className="text-sm text-foreground/60">Riftvalley Univesity • 2017-2020</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Certifications</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-background/30 rounded-lg">
                        <h4 className="font-medium text-foreground">Google UX Design Certificate</h4>
                        <p className="text-sm text-foreground/60">2024</p>
                      </div>
                      <div className="p-3 bg-background/30 rounded-lg">
                        <h4 className="font-medium text-foreground">Meta Front End Developer Certificate</h4>
                        <p className="text-sm text-foreground/60">2024</p>
                      </div>
                      <div className="p-3 bg-background/30 rounded-lg">
                        <h4 className="font-medium text-foreground">CISCO Cyber Security</h4>
                        <p className="text-sm text-foreground/60">2023</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Experience</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                        <h4 className="font-semibold text-foreground">Contact Center Advisor</h4>
                        <p className="text-foreground/70">Ethiotelecom</p>
                        <p className="text-sm text-foreground/60"> April 2021 - Present</p>
                      </div>
                      <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                        <h4 className="font-semibold text-foreground">UX/UI Designer</h4>
                        <p className="text-foreground/70">GO2COD</p>
                        <p className="text-sm text-foreground/60">November 2024 - December 2024</p>
                      </div>
                        <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                        <h4 className="font-semibold text-foreground">Product Designer</h4>
                        <p className="text-foreground/70">Oromia Broadcasting Network</p>
                        <p className="text-sm text-foreground/60">November 2019 -  February 2020</p>
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
              © 2025 Tirmizi Kasim. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="linkedin.com/in/tirmizi-kasim" className="text-foreground/60 hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://dribbble.com/tirmiziK" className="text-foreground/60 hover:text-primary transition-colors">
                Dribbble
              </a>
              <a href="https://www.behance.net/tirmizikasim" className="text-foreground/60 hover:text-primary transition-colors">
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
