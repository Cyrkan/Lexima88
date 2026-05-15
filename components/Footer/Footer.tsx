import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

type FooterProps = {
  showHome?: boolean;
};

export function Footer({ showHome = false }: FooterProps) {
  return (
    <footer className={`${styles.footer} ${showHome ? styles.withHome : ""}`}>
      <Link className={styles.logo} href="/" aria-label="Averis home">
        <Image src="/images/logo-white.svg" alt="Averis" width={75} height={22} />
      </Link>
      <nav aria-label="Legal">
        {showHome ? <Link href="/">Home</Link> : null}
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
      </nav>
      <p>© 2026 Averis. All rights reserved.</p>
    </footer>
  );
}
