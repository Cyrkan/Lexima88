import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <picture className={styles.bg}>
        <source media="(max-width: 480px)" srcSet="/images/hero-bg-360.avif" type="image/avif" />
        <source media="(max-width: 480px)" srcSet="/images/hero-bg-360.webp" type="image/webp" />
        <source media="(max-width: 480px)" srcSet="/images/hero-bg-360.png" />
        <source media="(max-width: 1023px)" srcSet="/images/hero-bg-768.avif" type="image/avif" />
        <source media="(max-width: 1023px)" srcSet="/images/hero-bg-768.webp" type="image/webp" />
        <source media="(max-width: 1023px)" srcSet="/images/hero-bg-768.png" />
        <source media="(max-width: 1599px)" srcSet="/images/hero-bg-1440.avif" type="image/avif" />
        <source media="(max-width: 1599px)" srcSet="/images/hero-bg-1440.webp" type="image/webp" />
        <source media="(max-width: 1599px)" srcSet="/images/hero-bg-1440.png" />
        <source srcSet="/images/hero-bg-1920.avif" type="image/avif" />
        <source srcSet="/images/hero-bg-1920.webp" type="image/webp" />
        <img src="/images/hero-bg-1920.png" alt="" fetchPriority="high" />
      </picture>
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
