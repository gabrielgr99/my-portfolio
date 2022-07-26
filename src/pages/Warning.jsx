import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Warning.css";

export default function Warning() {
  return (
    <div>
      <Header />
      <article>
        <section id="construction">
          <h3>Portfólio em construção!</h3>
          <p>Se você está aqui não feche a página ainda, por favor, gostaria de pedir atenciosamente
            por um feedback. Caso tenha alguma sugestão para melhorar este portfólio, se gostou da ideia
            mas não da execução, se gostou da execução mas não da ideia, se tem algo a acrescentar aos dois
            fatores ou em outros que acha legal, mande um e-mail me contando sua impressão desta página.
          </p><br />
          <p><strong>gabrielbj99@gmail.com</strong></p><br />
        </section>
      </article>
      <Footer />
    </div>
  )
}
