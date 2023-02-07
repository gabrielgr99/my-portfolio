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
          <p className="about">Sou desenvolvedor Full-Stack e formado em Engenharia Ambiental 
            pela Universidade Federal de Uberlândia. Busco me tornar reconhecido pelo meu trabalho,
            e para isso pretendo melhorar cada vez mais a qualidade dos meus códigos, deixando eles 
            mais limpos e de fácil interpretação.
          </p>
        </section>
      </article>
      <Footer value='footer-content-about' />
    </main>
  )
}
