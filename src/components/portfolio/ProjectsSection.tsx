import mobileAppImage from '@/assets/project-mobile-app.jpg';
import dashboardImage from '@/assets/project-dashboard.jpg';
import ecommerceImage from '@/assets/project-ecommerce.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "FinTech Mobile App",
      description: "A comprehensive financial management app with intuitive design and seamless user experience.",
      image: mobileAppImage,
      tags: ["Mobile Design", "FinTech", "iOS/Android"],
      link: "#"
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Data visualization platform with complex information architecture made simple and beautiful.",
      image: dashboardImage,
      tags: ["Web App", "Dashboard", "Data Viz"],
      link: "#"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Complete shopping experience redesign focusing on conversion optimization and user journey.",
      image: ecommerceImage,
      tags: ["E-commerce", "Web Design", "UX Research"],
      link: "#"
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
                
                <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;