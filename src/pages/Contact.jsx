import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Contact.css";
import AppContext from "../context/AppContext";
import { useContext } from "react";

export default function Contact() {
  const mode = useContext(AppContext);

  return (
    <main>
      <Header />
      <article className={`contact contact-${ mode }`}>
        <section>
          <h3>Email para contato!</h3>
          <p><strong>gabrielbj99@gmail.com</strong></p>
        </section>
      </article>
      <Footer />
    </main>
  )
}
