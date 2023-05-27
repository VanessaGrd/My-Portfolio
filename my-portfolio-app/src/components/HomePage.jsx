import styles from "./HomePage.module.css";
import Projects from "./Projects";
import Presentation from "./Presentation";
import Navbar from "./Navbar";
import About from "./About";

function HomePage() {
  return (
    <>
      <body>
        <Navbar />
        <Presentation />
        <About/>
        <section className={styles.projects} id="projects">
          <Projects />

        </section>
        <section className={styles.CV} id="CV"></section>
      </body>
    </>
  );
}

export default HomePage;
