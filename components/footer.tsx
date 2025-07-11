"use client";

import {
  Github,
  Linkedin,
  Mail,
  Youtube,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/elref7i", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/el-refai/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:ahmed.khaled.refai.b@gmail.com",
      label: "Email",
    },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: MessageCircle, href: "#", label: "Telegram" },
    { icon: Phone, href: "#", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
              Ahmed Refai
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Frontend Developer & Content Creator passionate about sharing
              knowledge and building amazing web experiences.
            </p>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-4 mb-8">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              © 2024 Ahmed Refai. All rights reserved. Built with Next.js,
              React, Tailwind CSS & GSAP.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
