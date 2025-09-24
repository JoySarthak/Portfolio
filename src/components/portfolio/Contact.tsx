import React from 'react';
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-24 bg-muted/10 transition-all duration-1000 ${
        sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-800 delay-200 ${
          sectionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail size={16} />
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I'm always excited to discuss new opportunities, 
            collaborate on innovative solutions, or simply connect with fellow developers.
          </p>
        </div>
        
          <div ref={contentRef as React.RefObject<HTMLDivElement>} className="max-w-5xl mx-auto">
            {/* CTA Section */}
            <div
              className={`text-center mb-12 transition-all duration-800 delay-400 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    Let's Build Something Amazing Together
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Whether you're looking to hire, collaborate, or just want to chat about technology,
                    I'd love to hear from you. Drop me a message and let's explore the possibilities.
                  </p>

                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      onClick={() => window.open('/cv.pdf', '_blank')}
                      className="px-8 py-3 rounded-full font-semibold"
                    >
                      <FileText size={18} className="mr-2" />
                      View Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          
          {/* Contact Methods Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-800 delay-600 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="hover:shadow-lg transition-all duration-300">
              <a href="mailto:sarthakdutta2002@gmail.com" className="group rounded-xl p-6 block h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-sm text-muted-foreground break-all">sarthakdutta2002@gmail.com</p>
                </div>
              </a>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <a href="https://github.com/JoySarthak" target="_blank" rel="noopener noreferrer" className="group rounded-xl p-6 block h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Github className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">GitHub</h4>
                  <p className="text-sm text-muted-foreground">@JoySarthak</p>
                </div>
              </a>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <a href="https://www.linkedin.com/in/sarthak-dutta-0b8133303/" target="_blank" rel="noopener noreferrer" className="group rounded-xl p-6 block h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">LinkedIn</h4>
                  <p className="text-sm text-muted-foreground">Connect with me</p>
                </div>
              </a>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <a href="tel:+919875595686" className="group rounded-xl p-6 block h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                  <p className="text-sm text-muted-foreground">+91 98755 95686</p>
                </div>
              </a>
            </Card>
          </div>
          
          {/* Quick Contact Info */}
          <div
            className={`text-center mt-16 transition-all duration-800 delay-800 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
                <p className="text-sm text-muted-foreground">I typically respond within 24 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Footer */}
        <div className={`text-center mt-20 pt-8 border-t border-slate-300 dark:border-slate-600 transition-all duration-800 delay-1000 ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-muted-foreground font-medium">Designed & Built with ❤️ by Sarthak Dutta</p>
          <p className="text-xs text-muted-foreground mt-2">© 2025 All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;