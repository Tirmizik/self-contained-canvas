import mobileAppImage from '@/assets/project-mobile-app.jpg';
import dashboardImage from '@/assets/project-dashboard.jpg';
import ecommerceImage from '@/assets/project-ecommerce.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "FinTech Mobile App",
      description: "Redesign Halal Pay.",
      image: mobileAppImage,
      tags: ["Mobile Design", "FinTech", "iOS/Android"],
      behanceLink: "https://www.behance.net/gallery/231065811/Redesign-Halal-Pay-(-Hijra-Bank)"
    },
    {
      id: 2,
      title: "Health care mobile app",
      description: "TeleMedicine app.",
      image: dashboardImage,
      tags: ["Mobile app", "Heathcare", "Android/iOS"],
      behanceLink: "https://www.behance.net/gallery/235570783/TeleMedicine-app-in-Ethiopia"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Ethiomart E-Commerce in Ethiopia – UI/UX Case Study.",
      image: ecommerceImage,
      tags: ["E-commerce", "Web Design", "UX Research"],
      behanceLink: "https://www.behance.net/gallery/216041301/Ethiomart-E-Commerce-in-Ethiopia-UIUX-Case-Study"
    }
     {
      id: 4,
      title: "Dictionary Mobile app",
      description: " Redesign English to Afaan Oromo Dictionary.",
      image: ecommerceImage,
      tags: ["Mobile app", "redesign", "UX Design"],
      behanceLink: "https://www.behance.net/gallery/232828331/English-to-Afaan-Oromo-Dictionary"
    }
   {
      id: 5,
      title: "Educactional Website",
      description: " Redesign University Website .",
      image: ecommerceImage,
      tags: ["Education", "Web Design", "UX Research"],
      behanceLink: "https://www.behance.net/gallery/221806339/University-Website-Redesign"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A selection of recent work showcasing my approach to solving complex design challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="card-gradient rounded-2xl overflow-hidden card-shadow hover-glow group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.behanceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium transition-colors inline-flex items-center gap-2 group"
                >
                  View Case Study 
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
