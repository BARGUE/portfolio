"use client";

import { useEffect, useRef } from "react";

/** Compteur animé de 0 à `data-n`, suffixé par `data-s`. */
const countUp = (el: HTMLElement, reducedMotion: boolean) => {
  const target = Number(el.dataset.n);
  const suffix = el.dataset.s ?? "";
  if (reducedMotion) {
    el.textContent = target + suffix;
    return;
  }
  const t0 = performance.now();
  const step = (t: number) => {
    const p = Math.min((t - t0) / 1200, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 4))) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

// Effets de page : fond lumineux en parallaxe, barre de progression,
// apparition des blocs `.rv` au scroll, compteurs, spotlight sur les cartes
// et boutons magnétiques.
export const PageEffects = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = matchMedia("(hover: hover)").matches;
    const cleanups: (() => void)[] = [];

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("in");
          io.unobserve(el);
          el.querySelectorAll<HTMLElement>("[data-n]").forEach((n) =>
            countUp(n, reducedMotion)
          );
        }
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    const blobs = Array.from(meshRef.current?.children ?? []) as HTMLElement[];
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
      }
      if (!reducedMotion) {
        blobs.forEach((blob, k) => {
          blob.style.transform = `translateY(${scrollY * (k ? -0.08 : 0.12)}px)`;
        });
      }
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => removeEventListener("scroll", onScroll));

    if (finePointer && !reducedMotion) {
      document.querySelectorAll<HTMLElement>(".box, .card").forEach((card) => {
        const onMove = (e: PointerEvent) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - r.left}px`);
          card.style.setProperty("--my", `${e.clientY - r.top}px`);
        };
        card.addEventListener("pointermove", onMove);
        cleanups.push(() => card.removeEventListener("pointermove", onMove));
      });

      document.querySelectorAll<HTMLElement>(".btn").forEach((btn) => {
        const onMove = (e: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) * 0.18;
          const y = (e.clientY - r.top - r.height / 2) * 0.25;
          btn.style.transform = `translate(${x}px, ${y}px)`;
        };
        const onLeave = () => (btn.style.transform = "");
        btn.addEventListener("pointermove", onMove);
        btn.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          btn.removeEventListener("pointermove", onMove);
          btn.removeEventListener("pointerleave", onLeave);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div ref={barRef} className="progress" />
      <div ref={meshRef} className="mesh" aria-hidden="true">
        <i />
        <i />
      </div>
    </>
  );
};
