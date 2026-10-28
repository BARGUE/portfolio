import { Fragment } from "react";
import { cssVars } from "@/lib/utils";

const titleWords = ["Je", "conçois", "des", "interfaces"];
const rollingWords = ["performantes.", "accessibles.", "soignées."];

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M4 12L12 4M5 4h7v7" />
  </svg>
);

export const HeroSection = () => {
  return (
    <header className="hero">
      <div className="wrap">
        <span className="chip up">
          <i className="dot" />
          Maylvin Bargue · Développeur Front-End React / Next.js
        </span>

        {/* Mots qui montent un à un, puis adjectif qui défile */}
        <h1>
          {titleWords.map((word, i) => (
            <Fragment key={word}>
              <span className="w">
                <span style={cssVars({ "--i": i })}>{word}</span>
              </span>{" "}
            </Fragment>
          ))}
          <span className="roll" aria-label={rollingWords.join(" ")}>
            <span className="track" aria-hidden="true">
              {[...rollingWords, rollingWords[0]].map((word, i) => (
                <span key={i}>{word}</span>
              ))}
            </span>
          </span>
        </h1>

        <p className="lead up" style={cssVars({ "--d": ".55s" })}>
          Développeur front-end avec 5 ans d&apos;expérience (3 ans
          d&apos;alternance, 2 ans en CDI) sur des produits web en production à
          forte audience. Spécialisé React et Next.js (SSR, performance,
          architecture modulaire), j&apos;ai aussi développé deux projets
          mobiles en React Native avec Expo.
        </p>

        <div className="btns up" style={cssVars({ "--d": ".7s" })}>
          <a className="btn main" href="#projets">
            Voir mes projets <ArrowIcon />
          </a>
          <a className="btn" href="#cv">
            Télécharger mon CV
          </a>
        </div>
      </div>
    </header>
  );
};
