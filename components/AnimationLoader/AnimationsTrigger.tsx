"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __averisRunAnimations?: () => void;
  }
}

export function AnimationsTrigger() {
  useEffect(() => {
    if (typeof window.__averisRunAnimations === "function") {
      window.__averisRunAnimations();
    }
  });

  return null;
}
