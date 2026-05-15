"use client";

import { useEffect } from "react";

export function GsapAnimations() {
  useEffect(() => {
    let revertGsap: (() => void) | undefined;
    let isCancelled = false;
    let isStarted = false;

    const initAnimations = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (isCancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();
      revertGsap = () => mm.revert();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
      const revealSequence = (
        trigger: string,
        targets: string,
        options: {
          x?: number;
          y?: number;
          start?: string;
          stagger?: number;
          duration?: number;
          delay?: number;
        } = {}
      ) => {
        const elements = gsap.utils.toArray<HTMLElement>(targets);

        if (!elements.length) {
          return;
        }

        gsap.from(elements, {
          immediateRender: false,
          x: options.x ?? 0,
          y: options.y ?? 30,
          opacity: 0,
          duration: options.duration ?? 0.68,
          delay: options.delay ?? 0,
          stagger: options.stagger ?? 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger,
            start: options.start ?? "top 84%",
            once: true,
          },
        });
      };

      gsap.to('[data-gsap="hero-image"]', {
        y: 8,
        scale: 1.012,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to('[data-gsap="hero-image-core"]', {
        filter: "brightness(1.28) saturate(1.2)",
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to('[data-gsap="hero-stars"]', {
        backgroundPosition: "148px 148px, 260px 236px",
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      gsap.to('[data-gsap="hero-orbit-one"]', {
        opacity: 0.68,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to('[data-gsap="hero-orbit-two"]', {
        opacity: 0.68,
        duration: 7.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to('[data-gsap="hero-glow-one"]', {
        opacity: 0.48,
        scale: 1.05,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to('[data-gsap="hero-glow-two"]', {
        opacity: 0.48,
        scale: 1.05,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to('[data-gsap="about-bg"]', {
        backgroundPosition: "100% 38%, 0 0",
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to('[data-gsap="badge-dot"]', {
        boxShadow: "0 0 0 7px rgba(36, 99, 235, 0)",
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
        ease: "sine.inOut",
      });

      // Hero entrance — staggered fade + slide up
      const heroElements = [
        '[data-gsap="hero-eyebrow"]',
        '[data-gsap="hero-title"]',
        '[data-gsap="hero-copy"]',
        '[data-gsap="hero-cta"]',
      ].map((sel) => document.querySelector(sel)).filter(Boolean);

      if (heroElements.length) {
        gsap.from(heroElements, {
          y: 28,
          opacity: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
          delay: 0.15,
        });
      }

      revealSequence('[data-gsap="services-heading"]', '[data-gsap="services-heading-item"]', {
        y: 32,
        start: "top 86%",
        stagger: 0.14,
        duration: 0.7,
      });

      revealSequence('[data-gsap="service-card"]', '[data-gsap="service-card"]', {
        y: 52,
        start: "top 82%",
        stagger: 0.12,
        duration: 0.65,
      });

      revealSequence('[data-gsap="about-copy"]', '[data-gsap="about-copy-item"]', {
        x: -60,
        y: 0,
        start: "top 80%",
        stagger: 0.14,
        duration: 0.76,
      });

      revealSequence('[data-gsap="about-feature"]', '[data-gsap="about-feature"]', {
        x: 56,
        y: 0,
        start: "top 80%",
        stagger: 0.14,
        duration: 0.65,
      });

      revealSequence('[data-gsap="contact-copy"]', '[data-gsap="contact-copy-item"]', {
        x: -56,
        y: 0,
        start: "top 82%",
        stagger: 0.14,
        duration: 0.72,
      });

      revealSequence('[data-gsap="contact-item"]', '[data-gsap="contact-item"]', {
        x: 48,
        y: 0,
        start: "top 82%",
        stagger: 0.18,
        duration: 0.65,
      });
      });
    };

    const startAnimations = () => {
      if (isStarted) {
        return;
      }

      isStarted = true;
      window.clearTimeout(timer);
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, startAnimations);
      });
      void initAnimations();
    };

    const interactionEvents = ["pointerdown", "pointermove", "keydown", "touchstart", "scroll"];
    const timer = window.setTimeout(startAnimations, 6500);

    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, startAnimations, { passive: true, once: true });
    });

    return () => {
      isCancelled = true;
      window.clearTimeout(timer);
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, startAnimations);
      });
      revertGsap?.();
    };
  }, []);

  return null;
}
