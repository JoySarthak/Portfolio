import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MapPin, Phone, Instagram, Facebook, File } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';


const Contact = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Message sent successfully!');
        e.currentTarget.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

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
        
        <div ref={contentRef as React.RefObject<HTMLDivElement>} className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-800 delay-400 ${
            contentVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, exciting projects, 
                or just chatting about tech. Whether you're a company looking to hire, 
                a fellow developer, or someone with an interesting idea, don't hesitate to reach out.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "sarthak2002dutta.com" },
                { icon: Phone, title: "Phone", value: "+91 xxxxx-xxxxx" },
                { icon: MapPin, title: "Location", value: "West Bengal, India" }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className={`flex items-center space-x-4 transition-all duration-400 ${
                    contentVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`flex space-x-4 pt-6 transition-all duration-600 delay-1000 ${
              contentVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              <Button variant="outline" size="sm" asChild className="hover-scale">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github size={18} className="mr-2" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="hover-scale">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} className="mr-2" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="hover-scale">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram size={18} className="mr-2" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="hover-scale">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook size={18} className="mr-2" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className={`hover-scale transition-all duration-800 delay-600 hover:shadow-lg ${
            contentVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className={`transition-all duration-400 ${
                    contentVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '800ms' }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className={`transition-all duration-400 ${
                    contentVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '900ms' }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                
                <div className={`transition-all duration-400 ${
                  contentVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '1000ms' }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="Project inquiry" required />
                </div>
                
                <div className={`transition-all duration-400 ${
                  contentVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '1100ms' }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required 
                  />
                </div>

                <div className={`transition-all duration-400 ${
                  contentVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '1150ms' }}
                >
                  <label htmlFor="attachment" className="block text-sm font-medium mb-2">
                    Attachment (Optional)
                  </label>
                  <div className="flex items-center gap-2">
                    <File size={18} className="text-muted-foreground" />
                    <Input 
                      id="attachment" 
                      name="attachment"
                      type="file" 
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className={`w-full hover-scale transition-all duration-400 ${
                    contentVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '1200ms' }}
                >
                  Send Mail
                </Button>
              </form>
            </CardContent>
          </Card>
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