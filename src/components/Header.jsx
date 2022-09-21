import { Link } from "react-router-dom";
import "./Header.css";
import "./HeaderResponsive.css";
import AppContext from "../context/AppContext";
import { useContext } from "react";

export default function Header() {
  const mode = useContext(AppContext);

  return (
    <header>
      <div className={`arrow-polygon arrow-polygon-${ mode }`}></div>
      <nav>
        <p><Link to="/" className={`link link-${ mode } first-link-${ mode }`} >Sobre</Link></p>
        <p><Link to="/skills" className={`link link-${ mode }`} >Skills</Link></p>
        <p><Link to="/projects" className={`link link-${ mode }`} >Projetos</Link></p>
        <p><Link to="/contact" className={`link link-${ mode } last-link-${ mode }`} >Contato</Link></p>
      </nav>
    </header>
  )
}
