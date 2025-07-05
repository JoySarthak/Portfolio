import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    {
      title: "Online Library Management System",
      description: "Full-stack OLMS solution with React, Node.js, MongoDB atlas. Features include user authentication, Book management, and fineless Renewal system",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Data Analytics & ML Dashboard",
      description: "EDA on Mobile Brand Sales Dataset and Selling price prediction using and evaluation of different ML models. Includes data cleaning, visualization, and model deployment.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Python", "Pandas", "Scikit-learn", "Django", "Seaborn", "Matplotlib"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Smart Dashboard for Data Science",
      description: "Data visualization dashboard with interactive charts, real-time metrics, cleaning and analysis tools, and machine learning model integration for any dataset. Smart automation for various data science tasks.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["Python", "Streamlit", "Plotly", "Pandas", "Scikit-learn"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`py-24 bg-muted/10 transition-all duration-1000 ${
        sectionVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-12'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 delay-200 ${
          sectionVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>
        
        <div 
          ref={projectsRef as React.RefObject<HTMLDivElement>}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`overflow-hidden hover-scale transition-all duration-600 hover:shadow-lg group ${
                projectsVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" asChild className="hover-scale">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="hover-scale">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;