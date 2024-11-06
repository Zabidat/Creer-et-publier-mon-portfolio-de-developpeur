import { Link } from "react-router-dom";
import "./About.css"; 
import logoCV from "../../assets/logoCV/CV-LOGO.webp";  
 

function About (props)   // Prends comme argument en entrée Props 
//Et la valeur de image, est récuperée dans Home component pour afficher notre bannière
{
   const {image} =props 

    return (

        <section className="about-section">

            <h2 className="about-section-title">À propos</h2>
            <hr></hr>

            <div className="about-portrait-and-content">

                <div className="portrait-and-logo-cv">

                    <img className="about-portrait" alt="Portrait de Zabidat Abdallah" title="Zabidat Abdallah" src={image} width={245} height={325}></img>
                    <Link className="logo-cv" to="/" title="Voir mon CV" rel="noopener noreferrer">
                        <img src={logoCV} alt="Logo CV pdf" title="Voir mon CV" width={70} height={70}></img>
                    </Link>
                </div>

                <div className="about-button-and-content">

                    <div className="about-content">
                        <p>
                            Je m'appelle 
                            <span> Zabidat Abdallah </span>
                            et je suis <span> développeuse web, </span>
                            passionnée de programmation, j'aime découvrir de nouvelles technologies 
                            et relever toujours plus de défis.
                        </p>
                        <p>
                            Étant spécialiste dans 
                            <span> la création des sites web sur mesure, le référencement SEO et la modernisation de sites existants. </span>
                            Mon objectif est de crée des sites qui répondent parfaitement aux besoins de clients,
                             tout en optimisant leur visibilité en ligne grâce à des techniques avancées de référencement. 
                        </p>
                        <p>Le monde du web m'a toujours passionée, et une allergie au chargée clientèle, 
                            domaine dans lequel j'ai travaillé plusieurs années, 
                            m'a orientée vers une nouvelle passion : <strong>le Développement Web, </strong>
                            dont j'ai suivi  <Link className="about-link-training-and-contact" to="https://openclassrooms.com/fr/paths/899-developpeur-web" target="_blank"  rel="noopener noreferrer" title="Voir la formation"> une formation diplômante chez Openclassrooms,
                             pour ainsi devenir" développeuse web.  
                            </Link>
                        </p>
                        <p>Au cours de cette fromation, j'ai pu acquérir différentes compétences techniques en matière de développement front-end et back-end,
                             grâce à la réalisation de plusieurs projets tirés de cas concrets d'entreprises.</p>
                        <p>L'ensemble des projets que j'ai réalisé sont présenté dans  
                            <Link className="about-link-training-and-contact" title="Voir le portfolio" to="/Portfolio"> ma page portfolio.</Link>
                        </p>
                        <p>En tant que développeuse web, je suis sérieuse, assidue et toujours prête à relever de nouveaux défis, 
                             j'incarne la transition d'une chargée clientèle vers une développeuse passionnée. <em>Ma philosophie ? </em> 
                             <i>"De la chargée clientèle à la programmation, il n'y a qu'un pas."</i> 
                            </p>
                        <p></p>
                    </div>

                    <Link to="/Portfolio" className="button-link-in-about-section" title="Voir les projets">Voir le portfolio</Link>

                </div>

            </div>

        </section>
    ); 

};
export default About  