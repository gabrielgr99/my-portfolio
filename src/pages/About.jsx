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
          <p className="about">Sou desenvolvedor Front-End. Tenho como objetivo alcançar nível de senioridade máxima HTML, JavaScript e CSS, e consequentemente extendendo aos frameworks e tecnologias que eu estiver atuando. Desejo também conhecer novas tecnologias além de ReactJS, NextJS e outras que utilizo atualmente.
          </p>
        </section>
      </article>
      <Footer value='footer-content-about' />
    </main>
  )
}
