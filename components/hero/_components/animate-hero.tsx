"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function AnimateHero() {
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

  return (
    <>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      {/* Geometric shapes */}
      <div className="absolute overflow-hidden top-24 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full floating-1">
        <Image
          src="/AR.png"
          alt=""
          width={128}
          className="w-full h-full object-cover"
          objectFit="contain"
          height={128}
        />
      </div>
      <div className="absolute overflow-hidden bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full floating-2">
        <Image
          src="/AR.png"
          alt=""
          width={128}
          className="w-full h-full object-cover"
          objectFit="contain"
          height={128}
        />
      </div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rotate-45 floating-1" />
    </>
  );
}
