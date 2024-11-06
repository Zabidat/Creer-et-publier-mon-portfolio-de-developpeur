import "./Footer.css";
import { Link } from "react-router-dom";
import logoGitHub from "../../assets/logoGithub/github.webp"
import logoLinkedin from "../../assets/logolinkedin/linkedin.webp"; 

function Footer (){
    return (
        
            <footer>
                <Link to="https://github.com/Zabidat" target="_blank" rel="noopener noreferrer" title="Voir le profil sur GitHub">
                    <img src={logoGitHub} alt="Logo Github" title="GitHub" width={60} height={60} className="logo-github"></img>
                </Link>

                <div className="footer-informations">
                    <p className="author">© 2024 Created with  by Zabidat Abdallah, Tous droits réservés.</p>
                    <p className="contact-informations">
                        Du Lundi au Vendredi de 8h00 à 18h00
                    </p>
                    <p className="contact-informations">
                        07 66 01 29 26 
                    </p>
                    <p className="contact-informations"> 
                        Région Auvergne-Rhône-Alpes, France  
                    </p>
                </div>

                <Link to="https://www.linkedin.com/in/abdallah-zabidat-176694171/" target="_blank" rel="noopener noreferrer" title="Voir le Profil sur Linkedin"> 
                    <img className="logo-linkedin" src={logoLinkedin} alt="Logo Linkedin" title="Linkedin" width={70} height={70}></img>
                </Link>
            </footer>
        
    );
}

export default Footer 