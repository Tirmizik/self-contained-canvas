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
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      Education
                    </h3>
                    <div className="space-y-4">
                      <div className="group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <div className="relative p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-foreground mb-1">Bachelor of Science</h4>
                              <p className="text-foreground/80 font-medium mb-2">Electrical & Computer Engineering (Computer Engineering Stream)</p>
                              <p className="text-sm text-foreground/60 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Ambo University • 2015-2021
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <div className="relative p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-border/30 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-foreground mb-1">Bachelor of Arts</h4>
                              <p className="text-foreground/80 font-medium mb-2">Management</p>
                              <p className="text-sm text-foreground/60 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Riftvalley University • 2017-2020
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      Certifications
                    </h3>
                    <div className="grid gap-4">
                      <div className="group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <div className="relative p-5 bg-background/70 backdrop-blur-sm rounded-lg border border-border/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-md">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">G</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-foreground">Google UX Design Certificate</h4>
                              <p className="text-sm text-foreground/60 mt-1">2024</p>
                            </div>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <div className="relative p-5 bg-background/70 backdrop-blur-sm rounded-lg border border-border/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-md">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">M</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-foreground">Meta Front End Developer Certificate</h4>
                              <p className="text-sm text-foreground/60 mt-1">2024</p>
                            </div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <div className="relative p-5 bg-background/70 backdrop-blur-sm rounded-lg border border-border/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-md">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">C</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-foreground">CISCO Cyber Security</h4>
                              <p className="text-sm text-foreground/60 mt-1">2023</p>
                            </div>
                            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                      </div>
                      Experience
                    </h3>
                    <div className="space-y-4">
                      <div className="group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <div className="relative p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-foreground mb-1">Contact Center Advisor</h4>
                              <p className="text-foreground/80 font-medium mb-2">Ethiotelecom</p>
                              <p className="text-sm text-foreground/60 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                April 2021 - Present
                              </p>
                            </div>
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <div className="relative p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-border/30 hover:border-purple-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-foreground mb-1">UX/UI Designer</h4>
                              <p className="text-foreground/80 font-medium mb-2">GO2COD</p>
                              <p className="text-sm text-foreground/60 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                November 2024 - December 2024
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <div className="relative p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-border/30 hover:border-indigo-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-foreground mb-1">Product Designer</h4>
                              <p className="text-foreground/80 font-medium mb-2">Oromia Broadcasting Network</p>
                              <p className="text-sm text-foreground/60 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                November 2019 - February 2020
                              </p>
                            </div>
                          </div>
                        </div>
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
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/tirmizi-kasim" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-foreground/60 hover:text-[#0077B5] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                aria-label="Connect on LinkedIn"
              >
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a 
                href="https://dribbble.com/tirmiziK" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-foreground/60 hover:text-[#ea4c89] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20 px-4 py-2 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20"
                aria-label="Follow on Dribbble"
              >
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                </svg>
                Dribbble
              </a>
              <a 
                href="https://www.behance.net/tirmizikasim" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-foreground/60 hover:text-[#1769ff] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/20 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                aria-label="View portfolio on Behance"
              >
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 7.5v9c0 .8.7 1.5 1.5 1.5H9c3.5 0 6.3-2.8 6.3-6.3S12.5 5.4 9 5.4H1.5c-.8 0-1.5.7-1.5 1.5v.6zm3 1.9h4.5c1.1 0 2 .9 2 2s-.9 2-2 2H3V9.4zm0 6.1V13h4.5c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.8-2.7 2.8H3zm16.5-9.4h-6v1.5h6V6.1zm-2.3 4.1c1.5 0 2.7 1.2 2.7 2.7 0 .2 0 .4-.1.6H15.5c.1 1.1 1 1.9 2.1 1.9.8 0 1.5-.4 1.9-1.1h1.6c-.6 1.4-2 2.3-3.5 2.3-2.1 0-3.8-1.7-3.8-3.8s1.7-3.6 3.8-3.6zm-1.1 2.9h3.3c-.2-.9-.9-1.6-1.8-1.6s-1.3.7-1.5 1.6z"/>
                </svg>
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
