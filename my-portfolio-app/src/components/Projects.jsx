import projet1 from "../assets/projet1.png";
import projet2 from "../assets/projet2.png";
import projet3 from "../assets/projet3.png";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <>
      <div className={styles.projectsContainer}>
        <h3>Projets</h3>
        <div className={styles.projectsBox}>
          <h2>Projets pédagogiques de groupe</h2>
          <div className={styles.project}>
            <img src={projet1} alt="projet1" />

            <div className={styles.overlay}>
              <div className={styles.overlayText}>
                <h2>WILDKED'IN</h2>
                <p>
                  Portfolio des étudiants de la WCS à destination des recruteurs
                  qui peuvent filtrer en fonction des hardskills et des
                  softskills recherchés. <br></br> <br></br>Technos utilisées :{" "}
                  <br></br>
                  HTML, CSS, JavaScript, Git/Github, Figma, Trello.
                  <br />
                  <br />
                  <a href="https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WeWildin/">
                    <span>En voir plus...</span>{" "}
                  </a>
                </p>{" "}
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img src={projet2} alt="projet2" />
            <div className={styles.overlay}>
              <div className={styles.overlayText}>
                <a href="https://daily-expat.netlify.app/">
                  <h2>DAILY EXPAT</h2>
                  <p>
                    Site à destination des expatriés qui souhaitent renouer avec
                    leur pays d'origine.
                    <br></br> Ils peuvent retrouver des images, des musiques,
                    des recettes et les news de leur pays. <br></br> <br></br>
                    Technos utilisées :<br></br> HTML, CSS, React, JavaScript,
                    API, NodeJS, Git/Github, Figma, Trello.
                    <br />
                    <br />
                    <a href="https://daily-expat.netlify.app/">
                      <span>En voir plus...</span>
                    </a>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.project3}>
            <img src={projet3} alt="projet3" />
            <div className={styles.overlayP3}>
            <div className={styles.overlayText}>
            
                <h2>APPLE VOLUNTEERS</h2>
                <p>
                  Projet réalisé en 24h lors d'un hackathon. <br></br>Site d'une
                  association qui propose de réserver des visites gratuites de
                  New-York, en fonction des quartiers choisis par le touriste et
                  des volontaires disponibles. <br /><br />
                Technos utilisées : <br /> HTML, CSS, React,
                  JavaScript, API, NodeJS, Git/Github, Figma, Trello.<br></br><br></br>
                  <a href="">
                    {" "}
                    <span>En cours de déploiement...</span>{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
