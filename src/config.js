// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import Booki from "./images/logoBoki.png";
import logolivre from "./images/MonvieuxGrimoire.png";
import Ninacarducci from "./images/NinaCarducci.png"; 
import MonVieuxGrimoireFrontEnd from "./images/MonVieuxGrimoireFrontEnd.png";
import APIDEUXAPPLICATIONS from "./images/APIEntreDeuxApplications.png"; 
import CreerMonPortfolio from "./images/CreerMonPortFolio.png"; 
import projetKasa from "./images/ProjetKasa.png"; 
import FrontendSiteNotation from "./images/FrontendSitedeNotation.png"; 
import SophieBluel from "./images/SophieBluel.png"; 


/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Zabidat";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog i con or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo1 =
  "Je m'appelle Zabidat Abdallah et je suis développeuse web, passionnée de programmation, j'aime découvrir de nouvelles technologies et relever toujours plus de défis. Étant spécialiste dans la création des sites web sur mesure, le référencement SEO et la modernisation de sites existants. Mon objectif est de crée des sites qui répondent parfaitement aux besoins de client, tout en optimisant leur visibilité en ligne grâce à des techniques avancées de référencement. Le monde du web m'a toujours passionée, et une allergie au chargée clientèle, domaine dans lequel j'ai travaillé plusieurs années, m'a orientée vers une nouvelle passion : le Développement Web, dont j'ai suivi une formation professionnelle chez Openclassrooms, pour ainsi devenir développeuse web.";
  export const moreInfo2 = 
  "j'ai pu acquérir différentes compétences techniques en matière de développement front-end et back-end, grâce à la réalisation de plusieurs projets tirés de cas concrets d'entreprises. L'ensemble des projets que j'ai réalisé sont présenté dans En tant que développeuse web, je suis sérieuse, assidue et toujours prête à relever de nouveaux défis, j'incarne la transition d'une chargée clientèle vers une développeuse passionnée. Ma philosophie ? De la chargée clientèle à la programmation, il n'y a qu'un pas.";
/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <Icon icon="iconoir:agile" className="display-4" />,
    name: "Method Agile",
  },
  {
    id: 11,
    skill: <Icon icon="logos:nodejs" className="display-4" />,
    name: "Node JS",
  },
  {
    id: 12,
    skill: <Icon icon="logos:mongodb-icon" className="display-4" />,
    name: "Mongo DB",
  },
  {
    id: 13,
    skill: <Icon icon="bi:filetype-scss" className="display-4" />,
    name: "SCSS",
  },
  {
    id: 14,
    skill: <Icon icon="skill-icons:expressjs-dark" className="display-4" />,
    name: "Express Js",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1mUwx-JN8bHvTmRFCUiYmr-zVJM3-pa5E/view?usp=drive_link";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "Project_Booki", "Site_de_notation_de_livres","Nina-Carducci", "Mon-Vieux-Grimoire", "API_HTTP_Project", "portfolio","Projet-Kasa-React", "Site_de_notation_de_livres-Front-End","Sophie_Bluel" ];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
  {
    name: "Project_Booki",
    image: Booki,
  },
  {
    name: "Site_de_notation_de_livres",
    image: logolivre,
  },
  {
    name: "Nina-Carducci",
    image: Ninacarducci,
  },

  {
    name: "Mon-Vieux-Grimoire",
    image: MonVieuxGrimoireFrontEnd,
  },
  {
    name: "API_HTTP_Project",
    image: APIDEUXAPPLICATIONS, 
  },

  {
    name: "portfolio",
    image: CreerMonPortfolio, 
  },

  {
    name: "Projet-Kasa-React",
    image: projetKasa,
  },
  {
    name: "Site_de_notation_de_livres-Front-End",
    image : FrontendSiteNotation,
  },

  {
    name: "Sophie_Bluel",
    image: SophieBluel
  }, 

];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xwpkbklg";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
