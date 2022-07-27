import "./Footer.css";

export default function Footer() {
  const linkedinLogo = "https://img.icons8.com/color/48/undefined/linkedin.png";
  const githubLogo = "https://img.icons8.com/ios/50/FFFFFF/github--v1.png";
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
      </section>
    </footer>
  )
}
