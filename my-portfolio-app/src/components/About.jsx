import styles from "./About.module.css";
import pictureRandom from "../assets/pictureRandom.jpg"
function About() {
    
    return(
        <section className={styles.about} id="about">

  <div className={styles.aboutContainer}>
    <img src={pictureRandom} alt="pictureRandom" />
    <div className={styles.aboutText}>
      <h3>A propos de moi</h3>
      <p>
        Après 15 années dans le milieu médical je m'oriente vers un
        métier qui m'a toujours attirée, développeur web ! 👩🏼‍💻 <br />
        <br />
        C'est la mise en place et le paramétrage d'un logiciel de
        rendez-vous d'imagerie qui a confirmé mon choix de me lancer
        dans le développement. <br />
        <br />
        Désormais pleinement épanouie dans cette nouvelle voie, je
        recherche une entreprise qui me permettra d'exprimer ma
        créativité et de partager un bon esprit d'équipe.{" "}
      </p>
    </div>
  </div>
  </section>)
}
export default About