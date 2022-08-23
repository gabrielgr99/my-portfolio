import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Contact.css";

export default function Contact({ value }) {
  return (
    <div>
      <Header value={ value } />
      <article>
        <section className={`construction construction-${ value }`}>
          <h3>Email para contato!</h3>
          <p><strong>gabrielbj99@gmail.com</strong></p>
        </section>
      </article>
      <Footer />
    </div>
  )
}
