import Footer from "../components/Footer";
import Header from "../components/Header";
import perfilImage from "../images/perfil-image-removebg.png";
import "./About.css";
import "./AboutResponsive.css";
import AppContext from "../context/AppContext";
import { useContext } from "react";

export default function About() {
  const mode = useContext(AppContext);

  return (
    <main>
      <Header />
      <article className={ `img-container img-container-${ mode }` }>
        <img id="img-perfil" src={ perfilImage } alt="Imagem de perfil" height="350" />
        <section>
          <p className={`my-name my-name-${ mode }`}>Gabriel Gomes Rodrigues</p>
          <p className="about">22 anos</p>
          <p className="about">Uberlândia/MG</p>
          <p className="about">Sou desenvolvedor Front-End e estudo Desenvolvimento Web pela Trybe 
            com objetivo de me tornar um desenvolvedor Full Stack. Também sou discente de último 
            período em Engenharia Ambiental pela Universidade Federal de Uberlândia.
          </p>
        </section>
      </article>
      <Footer value='footer-content-about' />
    </main>
  )
}
