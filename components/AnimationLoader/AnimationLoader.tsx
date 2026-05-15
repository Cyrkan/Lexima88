const loaderScript = `
(() => {
  if (window.__averisAnimationLoader) return;
  window.__averisAnimationLoader = true;

  let started = false;
  const events = ["pointerdown", "pointermove", "keydown", "touchstart", "scroll"];
  const revealFallback = () => document.documentElement.classList.add("gsap-fallback");
  const fallbackTimer = window.setTimeout(revealFallback, 4000);

  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });

  const cleanup = () => {
    window.clearTimeout(timer);
    events.forEach((eventName) => window.removeEventListener(eventName, start));
  };

  const start = () => {
    if (started) return;
    started = true;
    cleanup();

    loadScript("/vendor/gsap.min.js")
      .then(() => loadScript("/vendor/ScrollTrigger.min.js"))
      .then(() => loadScript("/animations.js"))
      .then(() => window.clearTimeout(fallbackTimer))
      .catch(revealFallback);
  };

  const timer = window.setTimeout(start, 800);
  events.forEach((eventName) => window.addEventListener(eventName, start, { passive: true, once: true }));
})();
`;

export function AnimationLoader() {
  return <script dangerouslySetInnerHTML={{ __html: loaderScript }} />;
}

