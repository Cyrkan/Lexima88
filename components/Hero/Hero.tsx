import Image from "next/image";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.glowOne} data-gsap="hero-glow-one" />
      <div className={styles.glowTwo} data-gsap="hero-glow-two" />
      <div className={styles.starfield} aria-hidden="true" data-gsap="hero-stars" />
      <div className={styles.orbitLineOne} aria-hidden="true" data-gsap="hero-orbit-one" />
      <div className={styles.orbitLineTwo} aria-hidden="true" data-gsap="hero-orbit-two" />
      <div className={styles.imageWrap} aria-hidden="true" data-gsap="hero-image">
        <Image
          src="/images/hero-orbit.avif"
          alt=""
          width={1896}
          height={1909}
          priority
          fetchPriority="high"
          quality={70}
          sizes="(max-width: 767px) 420px, (max-width: 1023px) 720px, 960px"
          className={styles.heroImage}
          data-gsap="hero-image-core"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.eyebrow} data-gsap="hero-eyebrow">Performance Marketing Agency</p>
        <h1 id="hero-title" data-gsap="hero-title">Customer Engagement &amp; Performance Marketing</h1>
        <p className={styles.copy} data-gsap="hero-copy">
          We help brands improve customer communication, retention, and digital engagement through modern
          marketing technologies and data-driven strategies.
        </p>
        <a className={styles.button} href="mailto:lucas@averisoffers.com" data-gsap="hero-cta">
          Contact us
        </a>
      </div>
    </section>
  );
}
