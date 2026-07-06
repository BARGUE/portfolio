"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/maylvin-bargue",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/BARGUE",
    color: "hover:text-foreground",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:contact@maylkirian@gmail.com",
    color: "hover:text-primary",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.02 }}
          >
            Portfolio
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-secondary text-muted-foreground transition-colors ${link.color}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Maylvin Bargue — Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};
