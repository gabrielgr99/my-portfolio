import Footer from "../components/Footer";
import Header from "../components/Header";
import skills from "../data/skills";
import "./Skills.css";
import AppContext from "../context/AppContext";
import { useContext } from "react";

export default function Skills() {
  const mode = useContext(AppContext);

  return (
    <main>
      <Header />
      <article id="pictures-learn">
        <section className={`section-pictures section-pictures-${mode}`}>

          {
            skills.map((skill) => {
              return (
                <div>
                  <img alt={ skill.alt } src={ skill.src } />
                  <h4>{ skill.name }</h4>
                </div>
              );
            })
          }

        </section>
      </article>
      <Footer />
    </main>
  )
}
