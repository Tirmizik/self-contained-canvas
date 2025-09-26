import { useEffect, useState } from 'react';
import { Code2, Figma, Smartphone, Brain, FileText, Users, Design } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "Figma", icon: Figma, level: 95, color: "text-purple-400" },
    { name: "CSS", icon: Code2, level: 90, color: "text-blue-400" },
    { name: "HTML", icon: Code2, level: 92, color: "text-orange-400" },
    { name: "React.js", icon: Code2, level: 88, color: "text-cyan-400" },
    { name: "React Native", icon: Smartphone, level: 85, color: "text-green-400" },
    { name: "Miro", icon: Users, level: 90, color: "text-yellow-400" },
    { name: "Notion", icon: FileText, level: 85, color: "text-gray-400" },
    { name: "AI Tools", icon: Brain, level: 82, color: "text-pink-400" },
     { name: "UX Design", icon: Users, level: 95, color: "text-pink-400" },
     { name: "UI Design", icon: Design, level: 95, color: "text-pink-400" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section mb-4">Skills & Expertise</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.name}
                className="bg-background/50 hover:bg-primary/10 p-6 rounded-2xl text-center transition-all duration-300 hover-glow cursor-pointer group border border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <IconComponent 
                    size={40} 
                    className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <h3 className="text-foreground font-semibold mb-3 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <div className="skill-bar h-2 mb-2">
                  <div 
                    className="skill-progress transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
                <span className="text-foreground/70 text-sm">{skill.level}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
