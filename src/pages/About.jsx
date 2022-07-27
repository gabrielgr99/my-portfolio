import Footer from "../components/Footer";
import Header from "../components/Header";
import perfilImage from "../images/perfil-image.jpeg";
import "./About.css";

export default function About() {
  return (
    <div>
      <Header />
      <article id="img-container">
        <img id="img-perfil" src={ perfilImage } alt="Imagem de perfil" height="350" />
        <section>
          <p className="about">Olá, me chamo</p>
          <p className="about" id="my-name">Gabriel Gomes Rodrigues</p>
          <p className="about">Tenho 22 anos, sou desenvolvedor Front-End, moro em Uberlândia - MG e
            atualmente estou me formando em Engenharia Ambiental, e estudando
            Desenvolvimento Web na Trybe para me tornar um desenvolvedor Full Stack.
          </p>
        </section>
      </article>
      <Footer />
    </div>
  )
}
