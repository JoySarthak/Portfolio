import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className={`py-24 bg-muted/10 transition-all duration-1000 ${
        sectionVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 delay-200 ${
          sectionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feel free to contact me for any inquiries or just to say hello!
          </p>
        </div>
        
        <div ref={contentRef as React.RefObject<HTMLDivElement>} className="max-w-4xl mx-auto text-center">
          <div className={`mb-12 transition-all duration-800 delay-400 ${
            contentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new opportunities, exciting projects, 
              or just chatting about tech. Whether you're a company looking to hire, 
              a fellow developer, or someone with an interesting idea, don't hesitate to reach out.
              I love connecting with like-minded individuals and exploring innovative solutions together.
            </p>
          </div>
          
          {/* Contact Icons */}
          <div className={`flex justify-center items-center gap-8 flex-wrap transition-all duration-800 delay-600 ${
            contentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <a 
              href="mailto:sarthak2002dutta@gmail.com" 
              className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                sarthakdutta2002@gmail.com
              </span>
            </a>
            
            <a 
              href="https://github.com/JoySarthak" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Github className="text-primary" size={24} />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                GitHub
              </span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sarthak-dutta-0b8133303/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="text-primary" size={24} />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                LinkedIn
              </span>
            </a>
            
            <a 
              href="tel:+9198775595686" 
              className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary" size={24} />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                +91 9875595686
              </span>
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <div className={`text-center mt-16 pt-8 border-t border-border transition-all duration-800 delay-1000 ${
          contentVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-muted-foreground">
            _Built By Sarthak_
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;