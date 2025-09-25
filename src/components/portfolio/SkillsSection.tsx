import { useEffect, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Figma", level: 90 },
    { name: "Adobe Creative Suite", level: 85 },
    { name: "Prototyping", level: 88 },
    { name: "User Research", level: 82 },
    { name: "Design Systems", level: 92 }
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
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Progress */}
          <div className="animate-slide-up">
            <h3 className="text-xl font-semibold mb-8 text-foreground">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-foreground/70">{skill.level}%</span>
                  </div>
                  <div className="skill-bar h-3">
                    <div 
                      className="skill-progress transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
      

export default SkillsSection;
