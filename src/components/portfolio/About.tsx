import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  const education = [
    {
      level: "Class X - 2019",
      board: "CISCE",
      institution: "Sri Aurobindo Institute of Education",
    },
    {
      level: "Class XII - 2021",
      board: "ISC",
      institution: "Sri Aurobindo Institute of Education",
    },
    {
      level: "B.Tech 2022-26",
      board: "Computer Science & Engineering",
      institution: "Narula Institute of Technology",
    },
  ];

  const experience = [
    {
      role: "Internship Training",
      type: "Machine Learning Using Python",
      company: "Globsyn Finishing School & Technologies Ltd.",
      duration: "09.07.2024 - 25.09.2024",
    },
  ];

  const [activeTab, setActiveTab] = React.useState("education");

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-24 bg-muted/10 transition-all duration-1000 ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in technology and education
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card
            ref={cardRef as React.RefObject<HTMLDivElement>}
            className={`hover-scale transition-all duration-800 delay-400 hover:shadow-lg ${
              cardVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`transition-all duration-600 delay-600 ${
                  cardVisible 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform -translate-x-8'
                }`}>
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                    alt="Workspace"
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                </div>

                <div
                  className={`space-y-6 transition-all duration-600 delay-800 ${
                    cardVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                >
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      Currently pursuing B.Tech in Computer Science and
                      Engineering at Narula Institute of Technology, with a
                      profound interest in coding and different programming
                      languages. I'm on a journey to become a Data-Scientist & Fullstack
                      developer with expertise in AI/ML, frontend and backend
                      , Database technologies.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex space-x-4 border-b border-muted/20 pb-2">
                      <button
                        onClick={() => setActiveTab("education")}
                        className={`px-4 py-2 font-medium transition-colors ${
                          activeTab === "education"
                            ? "text-primary border-b-2 border-primary"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        Education
                      </button>
                      <button
                        onClick={() => setActiveTab("experience")}
                        className={`px-4 py-2 font-medium transition-colors ${
                          activeTab === "experience"
                            ? "text-primary border-b-2 border-primary"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        Experience
                      </button>
                    </div>

                    <div className="space-y-6">
                      {activeTab === "education" ? (
                        education.map((edu, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 group"
                          >
                            <div className="p-2 bg-primary/10 rounded-full text-primary mt-1">
                              <GraduationCap size={18} />
                            </div>
                            <div>
                              <h4 className="font-medium text-primary">
                                {edu.level}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {edu.board}
                              </p>
                              <p className="text-muted-foreground">
                                {edu.institution}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        experience.map((exp, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 group"
                          >
                            <div className="p-2 bg-primary/10 rounded-full text-primary mt-1">
                              <Briefcase size={18} />
                            </div>
                            <div>
                              <h4 className="font-medium text-primary">
                                {exp.role}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {exp.type}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {exp.duration}
                              </p>
                              <p className="text-muted-foreground">
                                {exp.company}
                              </p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;