import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/contact";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="foot page">
      <div className="wrap">
        <span>© {currentYear} Maylvin Bargue — Portfolio</span>
        <span>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {" · "}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {" · "}
          <a href={`mailto:${EMAIL}`}>Email</a>
        </span>
      </div>
    </footer>
  );
};
