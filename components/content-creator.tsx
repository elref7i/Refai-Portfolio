"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Youtube,
  Users,
  Play,
  MessageCircle,
  Phone,
  ExternalLink,
} from "lucide-react";
import { gsap } from "gsap";

export function ContentCreator() {
  useEffect(() => {
    gsap.fromTo(
      ".content-card",
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".content-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const stats = [
    {
      icon: Youtube,
      label: "YouTube Channel",
      value: "Active Creator",
      color: "text-red-500",
    },
    {
      icon: Users,
      label: "Community",
      value: "Growing Fast",
      color: "text-blue-500",
    },
    {
      icon: Play,
      label: "Video Series",
      value: "Multiple Playlists",
      color: "text-green-500",
    },
  ];

  const communityLinks = [
    {
      icon: Youtube,
      label: "YouTube Channel",
      description: "Educational programming content & tutorials",
      href: "#",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      icon: MessageCircle,
      label: "Telegram Community",
      description: "Join our developer community discussions",
      href: "#",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: Phone,
      label: "WhatsApp Group",
      description: "Quick updates and community support",
      href: "#",
      color: "bg-green-500 hover:bg-green-600",
    },
  ];

  return (
    <section
      id="content"
      className="content-section py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <Badge
            variant="outline"
            className="mb-4 text-lg px-4 py-2"
          >
            Content Creator
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sharing Knowledge Through{" "}
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Content Creation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            As an active YouTube content creator, I'm passionate about sharing
            programming knowledge, building educational series, and fostering a
            community of developers who learn and grow together.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="content-card text-center hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-muted-foreground">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Links */}
        <div className="grid md:grid-cols-3 gap-6">
          {communityLinks.map((link, index) => (
            <Card
              key={link.label}
              className="content-card group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 rounded-full ${link.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <link.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{link.label}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">{link.description}</p>
                <Button
                  className={`w-full ${link.color} text-white group-hover:scale-105 transition-transform duration-200`}
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Now
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Learn Together?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of developers in our community. Get access to
                exclusive content, participate in discussions, and accelerate
                your programming journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600"
                >
                  Subscribe to YouTube
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                >
                  Join Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
