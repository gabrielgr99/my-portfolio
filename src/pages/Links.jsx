import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Links.css";

export default function Links() {
  return (
    <div>
      <Header />
      <article>
        <section id="learn-content">
          <h3 id="links">Links úteis para meu aprendizado!</h3>
          <a href="https://www.betrybe.com/" target="_blanked" id="trybe">Trybe</a>
          <a href="https://pt.stackoverflow.com/" target="_blanked" id="stackoverflow">Stack Overflow</a>
          <a href="https://www.w3schools.com/" target="_blanked" id="w3schools">W3Schools</a>
          <a href="https://diolinux.com.br/" target="_blanked" id="diolinux">Diolinux</a><br />
        </section>
      </article>
      <Footer />
    </div>
  )
}
