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
          <p className="about">Eu sou Gabriel</p>
          <p className="about">Tenho 22 anos</p>
          <p className="about">Nasci em Uberlândia - Minas Gerais</p>
          <p className="about">Atualmente estou me formando em Engenharia Ambiental e estudando Desenvolvimento Web</p>
        </section>
      </article>
      <Footer />
    </div>
  )
}
