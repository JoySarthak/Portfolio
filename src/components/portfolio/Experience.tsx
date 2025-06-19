import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ExternalLink, X } from "lucide-react"; // Import X icon for close button
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  // State for the modal
  const [expandedImage, setExpandedImage] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const certificates = [
    {
      title: "ABAP Programming",
      company: "SAP BTP FOUNDATION",
      period: "2025",
      description:
        "Completed the Learning the Basics of ABAP Programming on SAP BTP (Foundational Level), gaining skills in creating ABAP Cloud projects, writing basic ABAP code with conditional logic, and implementing error handling for performance analysis.",
      technologies: ["ABAP", "SAP BTP", "Cloud Programming"],
      imageUrl: "/cert7.png",
      certificateUrl:
        "https://www.credly.com/badges/a7c8d7c1-0471-4597-a362-98f529e7dbf0/public_url",
    },
    {
      title: "Data Structures and Performance",
      company: "UC San Diego via Coursera",
      period: "2025",
      description:
        "Completed Data Structures and Performance by UC San Diego on Coursera,which provides foundational knowledge on efficient data organization and algorithm performance analysis using java",
      technologies: ["Java", "Data Structures", "Algorithms"],
      imageUrl: "/cert6.png",
      certificateUrl:
        "https://coursera.org/share/212dc01b0215a23e0b223d682c61c916",
    },
    {
      title: "MongoDB Advanced",
      company: "Ardent Computech Pvt Ltd",
      period: "2025",
      description:
        "Completed advanced 30hrs training on MongoDB & its integration with Node.js, functionalities",
      technologies: ["NoSQL", "MongoDB", "Node.js"],
      imageUrl: "/cert4.png",
      certificateUrl:
        "https://certificate.ardentsoftware.co.in/generate/132371",
    },
    {
      title: "Django ",
      company: "Ardent Computech Pvt Ltd",
      period: "2024",
      description:
        "Completed 30hrs training on Django, including all its functionalities and integration with Python.",
      technologies: ["Python", "Django", "Web Development"],
      imageUrl: "/cert5.png",
      certificateUrl:
        "https://certificate.ardentsoftware.co.in/generate/116359",
    },
    {
      title: "Foundations of AI",
      company: "IBM Skills Build",
      period: "2024",
      description:
        "Completed comprehensive course on the foundations of artificial intelligence covering machine learning concepts and practical applications.",
      technologies: ["AI", "Machine Learning", "IBM Watson"],
      imageUrl: "/cert1.png",
      certificateUrl:
        "https://www.credly.com/badges/539145b3-6458-47d3-9a30-cab67ff67f93/public_url",
    },
    {
      title: "Object-Oriented Data Structures",
      company: "University of Illinois via Coursera",
      period: "2024",
      description:
        "Mastered object-oriented programming concepts and advanced data structures implementation in C++.",
      technologies: ["C++", "Data Structures", "Algorithms"],
      imageUrl: "/cert2.png",
      certificateUrl:
        "https://coursera.org/share/f37bae18daf59a72ae5f6a43ac409a1d",
    },
    {
      title: "Responsive Web Development",
      company: "University of London via Coursera",
      period: "2023",
      description:
        "Learned responsive design principles and modern web development techniques for building cross-platform applications.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      imageUrl: "/cert3.png",
      certificateUrl:
        "https://coursera.org/share/a171f7a3813e840fe2c5428328cb3cd7",
    },
  ];

  const handleImageClick = (url: string, title: string) => {
    setExpandedImage({ url, title });
  };

  const closeModal = () => {
    setExpandedImage(null);
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`py-24 transition-all duration-1000 ${
        sectionVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-800 delay-200 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificates & Accomplishments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional certifications and learning achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            ref={timelineRef as React.RefObject<HTMLDivElement>}
            className="relative"
          >
            {/* Timeline line */}
            <div
              className={`absolute left-8 top-0 bottom-0 w-px bg-border transition-all duration-1000 delay-400 ${
                timelineVisible
                  ? "opacity-100 scale-y-100"
                  : "opacity-0 scale-y-0"
              }`}
              style={{ transformOrigin: "top" }}
            />

            <div className="space-y-12">
              {certificates.map((cert, index) => (
                <div
                  key={cert.title}
                  className={`relative flex items-start transition-all duration-600 ${
                    timelineVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${600 + index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background shadow-lg transition-all duration-400 ${
                        timelineVisible
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-0"
                      }`}
                      style={{ transitionDelay: `${800 + index * 200}ms` }}
                    >
                      <Briefcase size={20} className="text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <Card
                      className={`hover-scale transition-all duration-600 hover:shadow-lg ${
                        timelineVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${700 + index * 200}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Certificate Image - now clickable */}
                          <div
                            className="flex-shrink-0 w-40 h-40 bg-muted rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() =>
                              handleImageClick(cert.imageUrl, cert.title)
                            }
                          >
                            <img
                              src={cert.imageUrl}
                              alt={`${cert.title} certificate`}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-semibold">
                                  {cert.title}
                                </h3>
                                <p className="text-primary font-medium">
                                  {cert.company}
                                </p>
                              </div>
                              <Badge variant="outline" className="mt-2 md:mt-0">
                                {cert.period}
                              </Badge>
                            </div>

                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {cert.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {cert.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className={`text-xs transition-all duration-300 ${
                                    timelineVisible
                                      ? "opacity-100 scale-100"
                                      : "opacity-0 scale-90"
                                  }`}
                                  style={{
                                    transitionDelay: `${
                                      900 + index * 200 + techIndex * 50
                                    }ms`,
                                  }}
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>

                            <Button
                              asChild
                              variant="outline"
                              className="mt-2 hover-scale transition-all"
                            >
                              <a
                                href={cert.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                View Certificate <ExternalLink size={16} />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for expanded image */}
      {expandedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close image"
            >
              <X size={32} />
            </button>

            <div className="bg-white p-2 rounded-lg">
              <img
                src={expandedImage.url}
                alt={`Expanded view of ${expandedImage.title}`}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>

            <p className="text-white text-center mt-2 text-lg">
              {expandedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
