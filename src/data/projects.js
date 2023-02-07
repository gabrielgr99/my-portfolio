import pixelArtLogo from "../images/projects/pixel-art-logo.svg";
import todoListLogo from "../images/projects/todo-list-logo.svg";
import jsUnitTestsLogo from "../images/projects/javascript-unit-tests-logo.png"
import rtlLogo from "../images/projects/rtl-logo.png";
import dockerTodoListLogo from "../images/projects/docker-todo-list-logo.png";
import allForOneLogo from "../images/projects/all-for-one-logo.png";
import oneForAllLogo from "../images/projects/one-for-all-logo.png";
import talkerManagerLogo from "../images/projects/talker-manager-logo.png";
import storeManagerLogo from "../images/projects/store-manager-logo.png";
import apuracaoVotosLogo from "../images/projects/apuracao-votos-logo.png";
import colorGuessLogo from "../images/projects/color-guess-logo.png";
import memeGeneratorLogo from "../images/projects/meme-generator-logo.png";
import walletLogo from "../images/projects/wallet-logo.png";

const projects = [
  {
    name: "Pixel Art",
    href: "https://pixels-art-project.vercel.app/",
    src: pixelArtLogo,
    alt: "pixel-art logo",
    technologies: [ 'HTML', 'CSS', 'JavaScript' ]
  },
  {
    name: "To Do List",
    href: "https://to-do-list-beta-wheat.vercel.app/",
    src: todoListLogo,
    alt: "todo-list logo",
    technologies: [ 'HTML', 'CSS', 'JavaScript' ]
  },
  {
    name: "JavaScript Unit Tests",
    href: "https://github.com/gabrielgr99/Project-JavaScript-Unit-Tests",
    src: jsUnitTestsLogo,
    alt: "js-unit-tests logo",
    technologies: [ 'Jest' ]
  },
  {
    name: "RTL",
    href: "https://github.com/gabrielgr99/Project-React-Testing-Library",
    src: rtlLogo,
    alt: "react-testing-library logo",
    technologies: [ 'React Testing Library', 'Jest' ]
  },
  {
    name: "Docker To Do List",
    href: "https://github.com/gabrielgr99/Project-Docker-Todo-List",
    src: dockerTodoListLogo,
    alt: "docker-todo-list logo",
    technologies: [ 'Docker' ]
  },
  {
    name: "All For One",
    href: "https://github.com/gabrielgr99/Project-Mysql-All-For-One",
    src: allForOneLogo,
    alt: "all-for-one logo",
    technologies: [ 'MySQL' ]
  },
  {
    name: "One For All",
    href: "https://github.com/gabrielgr99/Project-Mysql-One-For-All",
    src: oneForAllLogo,
    alt: "one-for-all logo",
    technologies: [ 'MySQL', 'Normalização' ]
  },
  {
    name: "Talker Manager",
    href: "https://github.com/gabrielgr99/Project-Talker-Manager",
    src: talkerManagerLogo,
    alt: "talker-manager logo",
    technologies: [ 'JavaScript', 'API' ]
  },
  {
    name: "Store Manager",
    href: "https://github.com/gabrielgr99/Project-Store-Manager",
    src: storeManagerLogo,
    alt: "store-manager logo",
    technologies: [ 'JavaScript', 'API RESTful MSC', 'MySQL', 'Testes (Chai, Sinon, Sinon-Chai)' ]
  },
  {
    name: "Apuração de Votos",
    href: "https://github.com/gabrielgr99/projeto-apuracao-votos",
    src: apuracaoVotosLogo,
    alt: "apuração-votos logo",
    technologies: [ 'JavaScript', 'Python', 'JSON', 'React', 'CSS' ]
  },
  {
    name: "Color Guess",
    href: "https://github.com/gabrielgr99/project-color-guess",
    src: colorGuessLogo,
    alt: "color-guess logo",
    technologies: [ 'HTML', 'CSS (Tailwind)', 'JavaScript' ]
  },
  {
    name: "Meme Generator",
    href: "https://github.com/gabrielgr99/project-meme-generator",
    src: memeGeneratorLogo,
    alt: "meme-generator logo",
    technologies: [ 'HTML', 'CSS (Tailwind)', 'JavaScript' ]
  },
  {
    name: "Wallet",
    href: "https://github.com/gabrielgr99/project-wallet",
    src: walletLogo,
    alt: "wallet logo",
    technologies: [ 'React (Redux, RTL)', 'CSS (Tailwind)', 'JavaScript', 'ESLint', 'Jest' ]
  }
];

export default projects;