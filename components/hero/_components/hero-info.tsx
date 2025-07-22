import { Button } from "@/components/ui/button";
import { SOCIAL_LINK } from "../constants/links-social";
import { scrollToAbout } from "../utils/scroll-to-about";
import Image from "next/image";

export default function HeroInfo() {
  return (
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
          creating educational content for the developer community. Passionate
          about sharing knowledge through YouTube tutorials and engaging with
          fellow developers.
        </p>

        {/* Social Links */}
        <div className="hero-buttons flex items-center justify-center lg:justify-start flex-wrap gap-3 mb-8">
          {SOCIAL_LINK.map((social) => (
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
          <div className="hero-image size-[300px] md:size-[500px] lg:size-[400px] rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1 shadow-2xl">
            <div className="w-full h-full  rounded-full overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 flex items-center justify-center">
              <Image
                src="/me.jpg"
                alt="Ahmed Refai"
                width={500}
                height={500}
                className="object-cover "
                priority
              />
            </div>
          </div>

          {/* Tech stack floating badges */}
          <div className="absolute -top-4 right-0 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium floating-1">
            React
          </div>
          <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium floating-2">
            Next.js
          </div>
          <div className="absolute top-1/2 -left-8 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium floating-1">
            YouTuber
          </div>
        </div>
      </div>
    </div>
  );
}
