import { Link } from "react-router-dom"; 
import "./Cards.css";
import logoGitHub from "../../assets/logoGithub/github.webp";
import logoLink from "../../assets/logoLink/logoLink.webp"; 


function Cards(props)
{
    // Les paramètres cover,title qui récupèrent l'image de couverture et titres de chaque logement en props
    //Depuis le composant Home, Pour afficher les cards

    const {cover, mission, titre, github, gitpage, id, alt} = props 

    return (

       <article className="card-project">

        <Link to="" title={id}> 

            <div className="filter-project-card"></div>
            <img src={cover} alt={alt} title={titre} width={100} height={100}></img>
            <hr></hr>
            
            <div className="title-and-mission">

                <h2 className="card-title">{titre}</h2>
                <h3 className="mission">{mission}</h3>

                <div className="tags">

                </div>

                <p className="see-more">Cliquer pour voir plus</p>

            </div>

            <div className="work-link"> 

                <Link to={github} aria-label="github link" target="_blank" rel="noreferrer" title="Voir le projet sur GitHub">
                    <img src={logoGitHub} alt="Logo Github" title="Lien vers code github"  width={50} height={50}></img>
                </Link>

                <Link to={gitpage} aria-label="project link" target="_blank" rel="noreferrer" title="Voir le projet en ligne">
                    <img src={logoLink} alt="Logo vers site" title="Lien Site Web" width={50} height={50}></img> 
                </Link>

            </div>

        </Link>

       </article>

    ); 
}

export default Cards 