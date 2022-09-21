import Footer from "../components/Footer";
import Header from "../components/Header";
import pixelArt from "../images/pixel-art-icon.svg";
import toDoList from "../images/todo-list-icon.svg";
import "./Projects.css";
import "./ProjectsResponsive.css";
import AppContext from "../context/AppContext";
import { useContext } from "react";

export default function Projects() {
  const mode = useContext(AppContext);

  return (
    <main>
      <Header />
      <article id="project-list">
        <section className="project-container">
          <a className={`project-item project-item-${ mode }`} href="https://pixels-art-project.vercel.app/" target="_blanked">
            <section>
              <h4>Pixel Art</h4>
              <img src={ pixelArt } alt="Logo pixel art" width="150px" />
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </section>
          </a>
        </section>
        <section className="project-container">
          <a className={`project-item project-item-${ mode }`} href="https://to-do-list-beta-wheat.vercel.app/" target="_blanked">
            <section>
              <h4>To-Do List</h4>
              <img src={ toDoList } alt="Logo to do list" width="150px" />
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </section>
          </a>
        </section>
      </article>
      <Footer value='footer-content-projects' />
    </main>
  )
}
