"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmed.khaled.refai.b@gmail.com",
      href: "mailto:ahmed.khaled.refai.b@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 100 789 0938",
      href: "tel:+201007890938",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/elref7i",
      href: "https://github.com/elref7i",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/el-refai",
      href: "https://linkedin.com/in/el-refai",
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
      id="contact"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can
            work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                          <item.icon className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={
                                item.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="text-muted-foreground hover:text-blue-500 transition-colors underline"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input placeholder="Project Collaboration" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button
                  className="w-full"
                  size="lg"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
