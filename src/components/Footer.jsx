import "./Footer.css";
import icon from "../images/gIcon.png"; 

export default function Footer() {
  const linkedinLogo = "https://img.icons8.com/color/48/undefined/linkedin.png";
  const githubLogo = "https://img.icons8.com/ios/50/FFFFFF/github--v1.png";
  const gIcon = "https://icons8.com/icon/80292/g";
  const icons = "https://icons8.com";
  return (
    <footer id="footer-content">
      <p>Feito por <strong>Gabriel Gomes Rodrigues</strong></p>
      <section>
        <a href="https://br.linkedin.com/in/gabrielgr" target="_blanked">
          <img width="30px" alt="Logo linkedin" src={ linkedinLogo } />
        </a>
        <a href="https://github.com/gabrielgr99/" target="_blanked">
          <img width="30px" alt="Logo github" src={ githubLogo } />
        </a>
        <a target="_blanked" href={ gIcon }>
          <img width="30px" alt="Ícone G" src={ icon } />
        </a>
      </section>
      <p id="icon-reference">
        all icons by
        <a target="_blanked" href={ icons }>Icons8</a>
      </p>
    </footer>
  )
}
