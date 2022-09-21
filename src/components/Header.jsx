import { Link } from "react-router-dom";
import "./Header.css";
import AppContext from "../context/AppContext";
import { useContext } from "react";

export default function Header() {
  const mode = useContext(AppContext);

  return (
    <header>
      <div className={`arrow-polygon arrow-polygon-${ mode }`}></div>
      <nav>
        <p><Link to="/" className={`link first-link`} >Sobre</Link></p>
        <p><Link to="/skills" className={`link`} >Skills</Link></p>
        <p><Link to="/projects" className={`link`} >Projetos</Link></p>
        <p><Link to="/contact" className={`link last-link`} >Contato</Link></p>
      </nav>
    </header>
  )
}
