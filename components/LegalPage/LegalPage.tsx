import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import styles from "./LegalPage.module.scss";

type ListColumn = {
  title?: string;
  items: string[];
};

type LegalSection = {
  title: string;
  lead?: string;
  paragraphs?: string[];
  columns?: ListColumn[];
  contact?: boolean;
};

type LegalPageProps = {
  title: string;
  intro: string[];
  sections: LegalSection[];
  variant: "privacy" | "terms";
};

export function LegalPage({ title, intro, sections, variant }: LegalPageProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={`${styles.container} ${styles[variant]}`}>
          <section className={styles.hero} aria-labelledby="legal-title" data-gsap="legal-hero">
            <p className={styles.eyebrow} data-gsap="legal-hero-item">Legal</p>
            <h1 id="legal-title" data-gsap="legal-hero-item">{title}</h1>
            <div className={styles.intro}>
              {intro.map((paragraph) => (
                <p key={paragraph} data-gsap="legal-hero-item">{paragraph}</p>
              ))}
            </div>
          </section>

          <section className={styles.card} aria-label={`${title} details`} data-gsap="legal-card">
            {sections.map((section, index) => (
              <article className={styles.item} key={section.title} data-gsap="legal-card-item">
                <div className={styles.number} aria-hidden="true">
                  {index + 1}
                </div>
                <div className={styles.content}>
                  <h2>{section.title}</h2>
                  {section.lead ? <p className={styles.lead}>{section.lead}</p> : null}
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.columns ? (
                    <div
                      className={`${styles.columns} ${
                        section.columns.length === 1 ? styles.singleColumn : ""
                      }`}
                    >
                      {section.columns.map((column, columnIndex) => (
                        <div className={styles.column} key={`${section.title}-${columnIndex}`}>
                          {column.title ? <h3>{column.title}</h3> : null}
                          <ul>
                            {column.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {section.contact ? (
                    <div className={styles.contact}>
                      <a href="mailto:lucas@averisoffers.com">lucas@averisoffers.com</a>
                      <p>Based in London</p>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer showHome />
    </>
  );
}
