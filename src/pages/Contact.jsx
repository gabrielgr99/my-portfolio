import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Contact.css";

export default function Contact({ value }) {
  return (
    <main>
      <Header value={ value } />
      <article className={`contact contact-${ value }`}>
        <section>
          <h3>Email para contato!</h3>
          <p><strong>gabrielbj99@gmail.com</strong></p>
        </section>
      </article>
      <Footer />
    </main>
  )
}
