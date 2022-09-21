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

          {/* <div>
            <img className="gallery-img" alt="Logo CSS" src={ skills[0].src } />
            <h4>{ skills[0].name }</h4>
          </div>
          <div>
            <img className="gallery-img" alt="Logo HTML" src={ htmlLogo } />
            <h4>HTML (Responsivo, Semântico)</h4>
          </div>
          <div>
            <img className="gallery-img" alt="Logo JavaScript" src={ javaScriptLogo } />
            <h4>JAVASCRIPT (APIs)</h4>
          </div>
          <div>
            <img className="gallery-img" alt="Logo JSON" src={ jsonLogo } />
            <h4>JSON</h4>
          </div>
          <div>
            <img className="gallery-img" alt="Logo Python" src={ pythonLogo } />
            <h4>PYTHON</h4>
          </div>
          <div>
            <img className="gallery-img" alt="Logo Python" src={ reactLogo } />
            <h4>REACT (Hooks, Context API)</h4>
          </div>
          <div>
            <img className="gallery-img" alt="Logo Python" src={ reduxLogo } />
            <h4>REDUX</h4>
          </div>
          <div>
            <img className="gallery-img" alt="Logo Python" src={ rtlLogo} />
            <h4>REACT TESTING LIBRARY</h4>
          </div>
          <div>
            <img className="gallery-img" alt="Logo Python" src={ jestLogo } />
            <h4>JEST</h4>
          </div> */}
        </section>
      </article>
      <Footer />
    </main>
  )
}
