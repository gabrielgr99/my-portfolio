import Footer from "../components/Footer";
import Header from "../components/Header";
import perfilImage from "../images/perfil-image-removebg.png";
import "./About.css";

export default function About() {
  return (
    <div>
      <Header />
      <article id="img-container">
        <img id="img-perfil" src={ perfilImage } alt="Imagem de perfil" height="350" />
        <section>
          <p className="about" id="my-name">Gabriel Gomes Rodrigues</p>
          <p className="about">22 anos</p>
          <p className="about">Uberlândia/MG</p>
          <p className="about">Sou desenvolvedor Front-End e estudo Desenvolvimento Web pela Trybe 
            com objetivo de me tornar um desenvolvedor Full Stack. Também sou discente de último 
            período em Engenharia Ambiental pela Universidade Federal de Uberlândia.
          </p>
        </section>
      </article>
      <Footer />
    </div>
  )
}
