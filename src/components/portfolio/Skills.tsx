import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { title } from "process";

const Skills = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        "C",
        "C++",
        "Java",
        "Python",
        "SAP ABAP",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "MongoDB",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "Numpy",
        "Pandas",
        "Matplotlib",
        "Scikit-learn",
        "Streamlit",
        "Plotly",
        "Seaborn",
        "OrdinalEncoder",
        "Django",
        "Data Preprocessing"
      ],
    },
    {
      title: "frontend & Backend",
      skills: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB", "Next.js", "Shadcn-UI", "Lucide-React"],
    },
    {
      title: "Core",
      skills: [
        "DBMS",
        "Webdev",
        "Machine Learning",
        "AI",
        "DSA",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Anaconda Navigator",
        "Jupyter Notebook",
        "VS Code",
        "PowerBi",
        "linux",
      ],
    },
    {
      title: "Communication Skills",
      skills: [
        "fluent in English",
        "Hindi",
        "Bengali",
        "Public Speaking",
        "Team Collaboration",
        "Problem Solving",
        "leadership",
      ],
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-24 transition-all duration-1000 ${
        sectionVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-12"
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-800 delay-200 ${
            sectionVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`hover-scale transition-all duration-600 hover:shadow-lg ${
                cardsVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-12"
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`hover-scale text-sm py-1 px-3 transition-all duration-300 ${
                        cardsVisible
                          ? "opacity-100 transform scale-100"
                          : "opacity-0 transform scale-90"
                      }`}
                      style={{
                        transitionDelay: `${
                          600 + index * 200 + skillIndex * 50
                        }ms`,
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
