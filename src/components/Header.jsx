import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div id="arrow-polygon"></div>
      <nav>
        <p><Link id="tag-about" to="/" className="link" >Sobre</Link></p>
        <p><Link to="/skills" className="link" >Skills</Link></p>
        <p><Link to="/projects" className="link" >Projetos</Link></p>
        <p><Link id="tag-contact" to="/contact" className="link" >Contato</Link></p>
      </nav>
    </header>
  )
}
