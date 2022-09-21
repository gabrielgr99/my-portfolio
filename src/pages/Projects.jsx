import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Projects.css";
import "./ProjectsResponsive.css";
import AppContext from "../context/AppContext";
import { useContext } from "react";
import projects from "../data/projects";

export default function Projects() {
  const mode = useContext(AppContext);

  return (
    <main>
      <Header />
      <article id="project-list">

        {
          projects.map((project) => {
            return (
              <section className="project-container">
                <a className={`project-item project-item-${ mode }`} href={ project.href } target="_blanked">
                  <section>
                    <h4>{ project.name }</h4>
                    <img src={ project.src } alt={ project.alt } width="150px" />
                    <div>
                      {
                        project.technologies.map((technologie) => <p>{ technologie }</p>)
                      }
                    </div>
                  </section>
                </a>
              </section>
            )
          })
        }

      </article>
      <Footer value='footer-content-projects' />
    </main>
  )
}
