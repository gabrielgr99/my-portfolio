import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ value }) {
  return (
    <header>
      <div className={`arrow-polygon arrow-polygon-${ value }`}></div>
      <nav>
        <p><Link to="/" className={`link first-link`} >Sobre</Link></p>
        <p><Link to="/skills" className={`link`} >Skills</Link></p>
        <p><Link to="/projects" className={`link`} >Projetos</Link></p>
        <p><Link to="/contact" className={`link last-link`} >Contato</Link></p>
      </nav>
    </header>
  )
}
