"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "UI & Styling",
      skills: [
        "Tailwind CSS",
        "MUI",
        "Bootstrap",
        "Shadcn UI",
        "Responsive Design",
      ],
    },
    {
      title: "State Management",
      skills: ["Redux", "Context API", "TanStack Query", "React Query"],
    },
    {
      title: "Form Handling",
      skills: ["Formik", "React Hook Form", "Yup", "Zod"],
    },
    {
      title: "Tools & APIs",
      skills: ["Git", "GitHub", "VS Code", "Axios", "RESTful APIs", "PWA"],
    },
    {
      title: "Other",
      skills: ["Python", "Figma", "Machine Learning", "Chrome DevTools"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="py-20 container"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to
            bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
