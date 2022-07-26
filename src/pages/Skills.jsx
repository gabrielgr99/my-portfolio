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

export default function Skills() {
  return (
    <div>
      <Header />
      <article id="pictures-learn">
        <section id="section-pictures">
          <div>
            <h4>CSS</h4>
            <img className="gallery-img" alt="Logo CSS" src={ cssLogo } />
          </div>
          <div>
            <h4>HTML</h4>
            <img className="gallery-img" alt="Logo HTML" src={ htmlLogo } />
          </div>
          <div>
            <h4>JAVASCRIPT {"(APIs)"}</h4>
            <img className="gallery-img" alt="Logo JavaScript" src={ javaScriptLogo } />
          </div>
          <div>
            <h4>JSON</h4>
            <img className="gallery-img" alt="Logo JSON" src={ jsonLogo } />
          </div>
          <div>
            <h4>PYTHON</h4>
            <img className="gallery-img" alt="Logo Python" src={ pythonLogo } />
          </div>
          <div>
            <h4>REACT {"(Hooks, Context API)"}</h4>
            <img className="gallery-img" alt="Logo Python" src={ reactLogo } />
          </div>
          <div>
            <h4>REDUX</h4>
            <img className="gallery-img" alt="Logo Python" src={ reduxLogo } />
          </div>
          <div>
            <h4>REACT TESTING LIBRARY</h4>
            <img className="gallery-img" alt="Logo Python" src={ rtlLogo} />
          </div>
          <div>
            <h4>JEST</h4>
            <img className="gallery-img" alt="Logo Python" src={ jestLogo } />
          </div>
        </section>
      </article>
      <Footer />
    </div>
  )
}
