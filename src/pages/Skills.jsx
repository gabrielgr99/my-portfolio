import Footer from "../components/Footer";
import Header from "../components/Header";
import cssLogo from "../images/css-logo.png";
import htmlLogo from "../images/html-logo.png";
import javaScriptLogo from "../images/javaScript-logo.png";
import jsonLogo from "../images/JSON-logo.svg";
import pythonLogo from "../images/python-logo.png";
import reactLogo from "../images/react-logo.png";
import reduxLogo from "../images/redux-logo.png";
import rtlLogo from "../images/rtl-logo.png";
import jestLogo from "../images/jest-logo.png";
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
          <div>
            <img className="gallery-img" alt="Logo CSS" src={ cssLogo } />
            <h4>CSS</h4>
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
          </div>
        </section>
      </article>
      <Footer />
    </main>
  )
}
