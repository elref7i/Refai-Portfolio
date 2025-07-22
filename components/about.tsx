"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  GraduationCap,
  Calendar,
  Code,
  Youtube,
  Users,
} from "lucide-react";
import { gsap } from "gsap";

export function About() {
  useEffect(() => {
    gsap.fromTo(
      ".about-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const highlights = [
    {
      icon: Code,
      label: "Frontend Developer",
      value: "React & Next.js Expert",
    },
    { icon: Youtube, label: "Content Creator", value: "Educational Videos" },
  ];

  return (
    <section
      id="about"
      className="about-section py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey as a developer and content
            creator, my background, education, and what drives my passion for
            technology and teaching.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="about-card">
            <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm Ahmed Refai, a passionate Frontend Developer and Content
              Creator from Cairo, Egypt. With a strong foundation in modern web
              technologies and a love for teaching, I bridge the gap between
              complex programming concepts and accessible learning experiences.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My journey combines hands-on development experience with content
              creation, helping thousands of developers learn React, Next.js,
              JavaScript, and more through my YouTube channel and community
              platforms.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-5 w-5 text-blue-500" />
                <span>B.Sc. Computer Science Student</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-500" />
                <span>Graduation: June 2025</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">What I Do</h3>

            {highlights.map((highlight, index) => (
              <Card
                key={highlight.label}
                className="about-card hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        {highlight.label}
                      </h4>
                      <p className="text-muted-foreground">{highlight.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Education Card */}
            <Card className="about-card bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">
                  Current Education
                </h4>
                <p className="text-muted-foreground mb-2">
                  B.Sc. in Computer Science
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Menoufia University, Egypt
                </p>
                <p className="text-sm">
                  Relevant Courses: Algorithms, OOP,Data Structure, Software
                  Engineering
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
