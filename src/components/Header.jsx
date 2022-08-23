import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ value }) {
  return (
    <header>
      <div className={`arrow-polygon arrow-polygon-${ value }`}></div>
      <nav>
        <p><Link to="/" className={`link link-${ value } first-link`} >Sobre</Link></p>
        <p><Link to="/skills" className={`link link-${ value }`} >Skills</Link></p>
        <p><Link to="/projects" className={`link link-${ value }`} >Projetos</Link></p>
        <p><Link to="/contact" className={`link link-${ value } last-link`} >Contato</Link></p>
      </nav>
    </header>
  )
}
