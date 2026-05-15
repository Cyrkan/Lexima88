import styles from "./AboutSection.module.scss";

const features = [
  {
    title: "Data-Driven Approach",
    text: "We use measurable insights and analytics to support long-term business growth.",
    icon: "bars"
  },
  {
    title: "Transparent Communication",
    text: "We value clear collaboration and long-term partnerships.",
    icon: "shield"
  },
  {
    title: "Modern Marketing Technologies",
    text: "We work with scalable communication systems and modern digital tools.",
    icon: "layers"
  }
];

function FeatureIcon({ name }: { name: string }) {
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.9998 13.0001C19.9998 18.0001 16.4998 20.5001 12.3398 21.9501C12.1219 22.0239 11.8853 22.0203 11.6698 21.9401C7.49979 20.5001 3.9998 18.0001 3.9998 13.0001V6.00009C3.9998 5.73488 4.10515 5.48052 4.29269 5.29299C4.48023 5.10545 4.73458 5.0001 4.99979 5.0001C6.99979 5.0001 9.49978 3.8001 11.2398 2.2801C11.4516 2.0991 11.7211 1.99965 11.9998 1.99965C12.2784 1.99965 12.5479 2.0991 12.7598 2.2801C14.5098 3.8101 16.9998 5.0001 18.9998 5.0001C19.265 5.0001 19.5193 5.10545 19.7069 5.29299C19.8944 5.48052 19.9998 5.73488 19.9998 6.00009V13.0001Z" stroke="#3DA7FF" strokeWidth="1.99961" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "layers") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.8298 2.18001C12.5693 2.06116 12.2862 1.99965 11.9998 1.99965C11.7134 1.99965 11.4304 2.06116 11.1698 2.18001L2.59986 6.08C2.42241 6.15824 2.27154 6.2864 2.16563 6.44886C2.05971 6.61131 2.00332 6.80106 2.00332 6.995C2.00332 7.18893 2.05971 7.37868 2.16563 7.54114C2.27154 7.7036 2.42241 7.83175 2.59986 7.91L11.1798 11.82C11.4404 11.9388 11.7234 12.0003 12.0098 12.0003C12.2962 12.0003 12.5793 11.9388 12.8398 11.82L21.4198 7.92C21.5973 7.84175 21.7481 7.7136 21.854 7.55114C21.96 7.38868 22.0164 7.19893 22.0164 7.005C22.0164 6.81106 21.96 6.62131 21.854 6.45886C21.7481 6.2964 21.5973 6.16824 21.4198 6.09L12.8298 2.18001Z" stroke="#3DA7FF" strokeWidth="1.99961" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.9999 11.9999C1.99943 12.1911 2.05382 12.3785 2.15662 12.5398C2.25942 12.7011 2.40632 12.8295 2.5799 12.9099L11.1799 16.8199C11.4391 16.9372 11.7203 16.998 12.0049 16.998C12.2894 16.998 12.5707 16.9372 12.8299 16.8199L21.4099 12.9199C21.5869 12.8403 21.7369 12.711 21.8417 12.5476C21.9464 12.3843 22.0014 12.1939 21.9999 11.9999" stroke="#3DA7FF" strokeWidth="1.99961" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.9999 16.9999C1.99943 17.1911 2.05382 17.3785 2.15662 17.5398C2.25942 17.7011 2.40632 17.8295 2.5799 17.9099L11.1799 21.8199C11.4391 21.9372 11.7203 21.9979 12.0049 21.9979C12.2894 21.9979 12.5707 21.9372 12.8299 21.8199L21.4099 17.9199C21.5869 17.8403 21.7369 17.711 21.8417 17.5476C21.9464 17.3842 22.0014 17.1939 21.9999 16.9999" stroke="#3DA7FF" strokeWidth="1.99961" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.00009 3.00009V19.0001C3.00009 19.5305 3.2108 20.0392 3.58588 20.4143C3.96095 20.7893 4.46965 21 5.00009 21H21" stroke="#3DA7FF" strokeWidth="1.99961" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.0001 17V9.00003" stroke="#3DA7FF" strokeWidth="1.99961" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.0001 17V4.99999" stroke="#3DA7FF" strokeWidth="1.99961" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.00008 17.0006V14" stroke="#3DA7FF" strokeWidth="1.99961" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title" data-gsap="about-bg">
      <div className={styles.copy} data-gsap="about-copy">
        <p className={styles.eyebrow} data-gsap="about-copy-item">About</p>
        <h2 id="about-title" data-gsap="about-copy-item">A Practical Approach to Sustainable Growth</h2>
        <p data-gsap="about-copy-item">
          Averis is a customer engagement and performance marketing agency focused on helping businesses improve
          communication, retention, and long-term digital growth.
        </p>
      </div>

      <div className={styles.features}>
        {features.map((feature) => (
          <article className={styles.feature} key={feature.title} data-gsap="about-feature">
            <div className={styles.icon}>
              <FeatureIcon name={feature.icon} />
              <span data-gsap="badge-dot" />
            </div>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
