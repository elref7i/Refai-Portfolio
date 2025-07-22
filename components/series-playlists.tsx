"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Clock,
  Users,
  ExternalLink,
  Brain,
  Code,
  Zap,
  Trophy,
  Layers,
} from "lucide-react";
import { gsap } from "gsap";

export function SeriesPlaylists() {
  useEffect(() => {
    gsap.fromTo(
      ".playlist-card",
      { opacity: 0, y: 50, rotationY: 15 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".playlists-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Hover animations
    const cards = document.querySelectorAll(".playlist-card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  const playlists = [
    {
      title: "Machine Learning",
      description:
        "Comprehensive ML tutorials covering algorithms, implementation, and real-world applications",
      icon: Brain,
      status: "active",
      episodes: "12 Videos",
      // duration: "8+ Hours",
      level: "Intermediate",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      href: "https://www.youtube.com/watch?v=fFP4_Wl2J88&list=PLkPKsQteEU7cAm3TO5y-_4aG7gFQ_n196",
    },
    {
      title: "My Note App Series",
      description:
        "Build a complete note-taking application from scratch using modern web technologies",
      icon: Layers,
      status: "active",
      episodes: "12 Videos",
      // duration: "6+ Hours",
      level: "Beginner",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      href: "https://www.youtube.com/watch?v=KXxBYJOdkZk&list=PLkPKsQteEU7eXJVsoury4dUJZhe_8BAfN",
    },
    {
      title: "Trick JS",
      description:
        "JavaScript tips, tricks, and advanced concepts to level up your programming skills",
      icon: Zap,
      status: "active",
      episodes: "5+ Videos",
      // duration: "10+ Hours",
      level: "Advanced",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      href: "#",
    },

    {
      title: "Quick JS Flow",
      description:
        "Fast-paced JavaScript concepts and modern development workflows",
      icon: Code,
      status: "coming-soon",
      episodes: "Coming Soon",
      duration: "TBA",
      level: "Intermediate",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-500/10",
      href: "#",
    },
  ];

  return (
    <section
      id="series"
      className="playlists-section py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <Badge
            variant="outline"
            className="mb-4 text-lg px-4 py-2"
          >
            YouTube Series
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Educational{" "}
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Video Series
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dive deep into programming concepts with my comprehensive video
            series. From beginner-friendly tutorials to advanced topics, there's
            something for every developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist, index) => (
            <Card
              key={playlist.title}
              className={`playlist-card group relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 ${playlist.bgColor}`}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge
                  variant={
                    playlist.status === "active" ? "default" : "secondary"
                  }
                  className={
                    playlist.status === "active"
                      ? "bg-green-500 hover:bg-green-600"
                      : ""
                  }
                >
                  {playlist.status === "active" ? "Active" : "Coming Soon"}
                </Badge>
              </div>

              <CardHeader className="relative">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${playlist.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <playlist.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {playlist.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {playlist.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <Play className="h-4 w-4 text-primary" />
                      {playlist.episodes}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      {playlist.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <Badge
                      variant="outline"
                      className="text-xs"
                    >
                      {playlist.level}
                    </Badge>
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      For Developers
                    </span>
                  </div>
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${playlist.color} hover:opacity-90 transition-opacity group-hover:scale-105 transform duration-200`}
                  disabled={playlist.status === "coming-soon"}
                  asChild={playlist.status === "active"}
                >
                  {playlist.status === "active" ? (
                    <a
                      href={playlist.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Series
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  ) : (
                    <>
                      Coming Soon
                      <Clock className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </CardContent>

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${playlist.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Never Miss an Update</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to my YouTube channel and turn on notifications to get
                notified when new videos are released in your favorite series.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600"
              >
                <a
                  href="https://www.youtube.com/@El_Refai?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe to YouTube
                </a>

                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
