"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Flower App",
      description:
        "Discover the beauty of nature at your fingertips with our Flower App. Whether you're a seasoned botanist or just someone who appreciates the elegance of flowers, this app is your ultimate companion.",
      technologies: [
        "Next.js",
        "Zod",
        "Next auth",
        "Next-intel(i18n)",
        "Shadcn-ui",
        "React Query",
        "React-hook-form",
        "TypeScript",
        "Tailwindcss",
      ],
      type: "Modern E-commerce Platform",
      code: "https://github.com/elref7i/flower-app",
      demo: "https://github.com/elref7i/flower-app",
    },
    {
      title: "P-Flow",
      description:
        "Comprehensive pharmacy and inventory management system streamlining inventory reconciliation by 20%",
      technologies: [
        "vite",
        "React.js",
        "Firebase",
        "MUI",
        "Axios",
        "Formik",
        "Yup",
        "React Query",
        "react-infinite-scroll-component",
        "use-debounce",
        "react-hot-toast",
        "leaflet",
      ],
      type: "E-commerce Platform",
      code: "https://github.com/elref7i/p-flow",
      demo: "https://p-flow.pages.dev",
    },
    {
      title: "Online Exam",
      description:
        "Authenticated online exam system supporting over 100 concurrent users with 99% uptime",
      technologies: [
        "Next.js",
        "Zod",
        "Next auth",
        "Next-intel(i18n)",
        "Shadcn-ui",
        "React Query",
        "React-hook-form",
        "TypeScript",
        "Tailwindcss",
      ],
      type: "Educational Platform",
      code: "https://github.com/elref7i/online-exam-app",
      demo: "https://online-exam-app-psi.vercel.app",
    },
    {
      title: "Fresh-Cart",
      description:
        "Responsive e-commerce platform providing seamless online shopping experience",
      technologies: [
        "Vite",
        "React.js",
        "Tailwind CSS",
        "React Query",
        "React-router-dom",
        "Axios",
        "Formik",
        "Yup",
      ],
      type: "E-commerce Platform",
      code: "https://github.com/elref7i/E-commerce",
      demo: "https://e-commerce-flame-eight-54.vercel.app",
    },
    {
      title: "My Note",
      description:
        "User-friendly notes manager with dark mode functionality leading to 30% increase in user retention",
      technologies: [
        "Vite",
        "React.js",
        "Tailwind CSS",
        "React Query",
        "React-router-dom",
        "Axios",
        "Formik",
        "Yup",
      ],
      type: "Productivity App",
      code: "https://github.com/elref7i/my-note-app",
      demo: "https://my-note-app-pink.vercel.app/",
    },
    {
      title: "Yummy",
      description:
        "Meal discovery application providing seamless browsing experience for over 5,000 recipes",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
      type: "Recipe Discovery",
      code: "https://github.com/elref7i/Yummy",
      demo: "https://yummy-blush-one.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-muted/30"
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
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in building
            scalable and user-centric applications.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      asChild
                    >
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
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
