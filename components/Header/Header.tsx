import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" }
];

const legalItems = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" }
];

export function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" aria-label="Averis home">
        <Image src="/images/logo-white.svg" alt="Averis" width={95} height={28} priority />
      </Link>

      <nav className={styles.nav} aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <a className={styles.cta} href="mailto:lucas@averisoffers.com">
        Contact us
      </a>

      <details className={styles.mobileMenu}>
        <summary className={styles.menuButton} aria-label="Open menu">
          <span />
          <span />
          <span />
        </summary>

        <div className={styles.mobilePanel} id="mobile-navigation">
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            {legalItems.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a className={styles.mobileCta} href="mailto:lucas@averisoffers.com">
              Contact us
            </a>
          </nav>
        </div>
      </details>
    </header>
  );
}
