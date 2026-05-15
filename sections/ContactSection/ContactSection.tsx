import styles from "./ContactSection.module.scss";

function ContactIcon({ type }: { type: "email" | "pin" }) {
  if (type === "pin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.9998 9.99988C19.9998 14.9929 14.4608 20.1929 12.6008 21.7988C12.4275 21.9291 12.2166 21.9996 11.9998 21.9996C11.783 21.9996 11.5721 21.9291 11.3988 21.7988C9.53878 20.1929 3.9998 14.9929 3.9998 9.99988C3.9998 7.87815 4.84265 5.84333 6.34294 4.34304C7.84322 2.84275 9.87805 1.9999 11.9998 1.9999C14.1215 1.9999 16.1563 2.84275 17.6566 4.34304C19.1569 5.84333 19.9998 7.87815 19.9998 9.99988Z" stroke="#2463EB" strokeWidth="1.99961" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9998 12.9999C13.6566 12.9999 14.9998 11.6567 14.9998 9.99988C14.9998 8.34303 13.6566 6.99989 11.9998 6.99989C10.3429 6.99989 8.99979 8.34303 8.99979 9.99988C8.99979 11.6567 10.3429 12.9999 11.9998 12.9999Z" stroke="#2463EB" strokeWidth="1.99961" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.9999 4.00004H3.99989C2.89533 4.00004 1.9999 4.89547 1.9999 6.00004V18C1.9999 19.1046 2.89533 20 3.99989 20H19.9999C21.1044 20 21.9998 19.1046 21.9998 18V6.00004C21.9998 4.89547 21.1044 4.00004 19.9999 4.00004Z" stroke="#2463EB" strokeWidth="1.99961" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.9998 6.99989L13.0299 12.6999C12.7211 12.8933 12.3642 12.9959 11.9999 12.9959C11.6356 12.9959 11.2786 12.8933 10.9699 12.6999L1.9999 6.99989" stroke="#2463EB" strokeWidth="1.99961" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <div className={styles.copy} data-gsap="contact-copy">
        <p data-gsap="contact-copy-item">Contact</p>
        <h2 id="contact-title" data-gsap="contact-copy-item">Let&apos;s Connect</h2>
        <span data-gsap="contact-copy-item">
          We&apos;re always open to discussing new projects, partnerships, and communication strategies.
        </span>
      </div>

      <address className={styles.details}>
        <a className={styles.detail} href="mailto:lucas@averisoffers.com" data-gsap="contact-item">
          <span className={styles.icon}>
            <ContactIcon type="email" />
          </span>
          <span>
            <small>Email</small>
            lucas@averisoffers.com
          </span>
        </a>

        <div className={styles.detail} data-gsap="contact-item">
          <span className={styles.icon}>
            <ContactIcon type="pin" />
          </span>
          <span>
            <small>Location</small>
            Based in London
          </span>
        </div>
      </address>
    </section>
  );
}
