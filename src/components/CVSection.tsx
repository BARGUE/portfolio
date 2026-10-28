import Link from "next/link";

const CV_PDF = "/images/cv/CV.pdf";

export const CVSection = () => {
  return (
    <section id="cv" className="section flush">
      <div className="wrap">
        <div className="box cvbox rv">
          <div>
            <h3>Consultez mon CV</h3>
            <p>Mon parcours complet, mes compétences et mes expériences dans un CV détaillé.</p>
          </div>
          <div className="btns">
            <Link className="btn" href="/cv">
              Voir le CV
            </Link>
            <a className="btn main" href={CV_PDF} download="CV_Maylvin_Bargue.pdf">
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
