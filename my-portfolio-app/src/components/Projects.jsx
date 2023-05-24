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
        <div className={styles.project}>
          <a href="https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WeWildin/">
            <img src={projet1} alt="projet1" />
          </a>
          <p>
            1er projet pédagogique réalisé en groupe lors de ma formation à la
            Wild Code School. <br></br>Portfolio des étudiants de la WCS à destination
            des recruteurs qui peuvent filtrer en fonction des hardskills et des
            softskills recherchés. Technos utilisées : HTML, CSS, JavaScript,
            Git/Github, Figma, Trello.
          </p>
          </div>
          <div className={styles.project}>
          <a href="https://daily-expat.netlify.app/">
            <img src={projet2} alt="projet2" />
          </a>
          <p>
            2ème projet pédagogique réalisé en groupe lors de ma formation à la
            Wild Code School. <br></br>Site à destination des expatriés qui souhaitent
            renouer avec leur pays d'origine.<br></br> Ils peuvent retrouver des images,
            des musiques, des recettes et les news de leur pays. Technos
            utilisées : HTML, CSS, React, JavaScript, API, NodeJS, Git/Github,
            Figma, Trello.
          </p>
          </div>
          <div className={styles.project3}>
          <a href="">
            <img src={projet3} alt="projet3" />
          </a>
          <p>
            Projet réalisé en groupe lors d'un hackathon de 24h. Site d'une
            association qui propose de réserver des visites gratuites de
            New-York, en fonction des quartiers choisis par le touriste et des
            volontaires disponibles. Technos utilisées : HTML, CSS, React,
            JavaScript, API, NodeJS, Git/Github, Figma, Trello.
          </p>
        
        </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
