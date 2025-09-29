import React from "react";
import mobileAppImage from "@/assets/project-mobile-app.png";
import dashboardImage from "@/assets/project-dashboard.png";
import ecommerceImage from "@/assets/project-ecommerce.png";
import educationImage from "@/assets/ education.png";
import healthImage from "@/assets/health.png";

// Type for each project
type Project = {
  id: number;
  title: string;
  description: string;
  image: string; // just use string path for Vite
  tags: string[];
  behanceLink: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "FinTech Mobile App",
    description: "Redesign Halal Pay.",
    image: mobileAppImage,
    tags: ["Mobile Design", "FinTech", "iOS/Android"],
    behanceLink:
      "https://www.behance.net/gallery/231065811/Redesign-Halal-Pay-(-Hijra-Bank)",
  },
  {
    id: 2,
    title: "Health Care Mobile App",
    description: "TeleMedicine app.",
    image: educationImage,
    tags: ["Mobile app", "Healthcare", "Android/iOS"],
    behanceLink:
      "https://www.behance.net/gallery/235570783/TeleMedicine-app-in-Ethiopia",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Ethiomart E-Commerce in Ethiopia – UI/UX Case Study.",
    image: ecommerceImage,
    tags: ["E-commerce", "Web Design", "UX Research"],
    behanceLink:
      "https://www.behance.net/gallery/216041301/Ethiomart-E-Commerce-in-Ethiopia-UIUX-Case-Study",
  },
  {
    id: 4,
    title: "Dictionary Mobile App",
    description: "Redesign English to Afaan Oromo Dictionary.",
    image: dashboardImage,
    tags: ["Mobile app", "Redesign", "UX Design"],
    behanceLink:
      "https://www.behance.net/gallery/232828331/English-to-Afaan-Oromo-Dictionary",
  },
  {
    id: 5,
    title: "Educational Website",
    description: "Redesign University Website.",
    image: healthImage,
    tags: ["Education", "Web Design", "UX Research"],
    behanceLink:
      "https://www.behance.net/gallery/221806339/University-Website-Redesign",
  },
];

const ProjectsSection: React.FC = () => {
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
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center gap-2">
                    <svg
                      className="w-5 h-5 transition-transform group-hover:rotate-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View Case Study
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
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
