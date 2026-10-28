"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Profil", href: "#apropos" },
  { label: "Projets", href: "#projets" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [active, setActive] = useState(0);

  // Lien actif : dernière section dont le haut a passé 40 % de l'écran.
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));
    const onScroll = () => {
      let current = 0;
      sections.forEach((section, k) => {
        if (section && section.getBoundingClientRect().top < innerHeight * 0.4) {
          current = k;
        }
      });
      setActive(current);
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="pill" aria-label="Navigation">
      {navItems.map((item, k) => (
        <a
          key={item.href}
          href={item.href}
          className={k === active ? "on" : undefined}
          aria-current={k === active ? "location" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};
