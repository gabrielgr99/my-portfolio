import Footer from "../components/Footer";
import Header from "../components/Header";
import pixelArt from "../images/pixel-art-icon.svg";
import toDoList from "../images/todo-list-icon.svg";
import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <Header />
      <article>
        <section id="projects">
          <section id="projects-list">
            <a href="https://pixels-art-project.vercel.app/" target="_blanked">
              <h4>Pixel Art</h4>
              <img src={ pixelArt } alt="Logo pixel art" width="150px" />
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </a>
            <a href="https://to-do-list-beta-wheat.vercel.app/" target="_blanked">
              <h4>To-Do List</h4>
              <img src={ toDoList } alt="Logo to do list" width="150px" />
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </a>
          </section>
        </section>
      </article>
      <Footer />
    </div>
  )
}
