import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div id="arrow-polygon"></div>
      <nav>
        <p><Link id="tag-about" to="/" >Sobre</Link></p>
        <p><Link to="/skills" >Skills</Link></p>
        <p><Link to="/projects" >Projetos</Link></p>
        <p><Link id="tag-warning" to="/warning" >Aviso</Link></p>
      </nav>
    </header>
  )
}
