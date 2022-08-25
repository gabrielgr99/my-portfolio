import Footer from "../components/Footer";
import Header from "../components/Header";
import pixelArt from "../images/pixel-art-icon.svg";
import toDoList from "../images/todo-list-icon.svg";
import "./Projects.css";

export default function Projects({ value }) {
  return (
    <main>
      <Header value={ value } />
      <article id="project-list">
        <section className="project-container">
          <a className={`project-item project-item-${ value }`} href="https://pixels-art-project.vercel.app/" target="_blanked">
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
          <a className={`project-item project-item-${ value }`} href="https://to-do-list-beta-wheat.vercel.app/" target="_blanked">
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
      <Footer />
    </main>
  )
}
