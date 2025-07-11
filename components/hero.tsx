"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Youtube,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";

export function Hero() {
  useEffect(() => {
    // GSAP Hero animations
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        ".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        ".hero-buttons",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        ".hero-image",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      );

    // Floating animation for profile image
    gsap.to(".hero-image", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    // Floating elements animation
    gsap.to(".floating-1", {
      y: -15,
      x: 10,
      rotation: 360,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    gsap.to(".floating-2", {
      y: 15,
      x: -10,
      rotation: -360,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />

      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full floating-1" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full floating-2" />
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rotate-45 floating-1" />

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Ahmed Refai
              </span>
            </h1>

            <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-4">
              Frontend Developer & Content Creator
            </p>

            <p className="hero-description text-lg text-muted-foreground mb-8 max-w-2xl">
              Building exceptional web experiences with React & Next.js while
              creating educational content for the developer community.
              Passionate about sharing knowledge through YouTube tutorials and
              engaging with fellow developers.
            </p>

            {/* Social Links */}
            <div className="hero-buttons flex items-center justify-center lg:justify-start flex-wrap gap-3 mb-8">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-transform duration-200 bg-transparent"
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

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                onClick={scrollToAbout}
              >
                Explore My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a href="#content">Watch My Content</a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="hero-image w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Ahmed Refai"
                    width={300}
                    height={300}
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
              </div>

              {/* Tech stack floating badges */}
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium floating-1">
                React
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium floating-2">
                Next.js
              </div>
              <div className="absolute top-1/2 -left-8 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium floating-1">
                YouTube
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-sm mb-2 group-hover:animate-pulse">
              Discover More
            </span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
