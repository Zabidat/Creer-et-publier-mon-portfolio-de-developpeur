import { Link } from "react-router-dom";
import "./Header.css"; 
import logo from "../../assets/logo/Zabidat-logo.webp"; 


function Header (){
    return (
        <header className="header-property">

            <figure className="figure-property">
                <img src= { logo } alt="Image-de-Zabidat" className="logo-pic" />
            </figure>

            <nav className="nav-header">
                 
                 <Link  to="/"  className="navbar-link-active link-navbar">Accueil</Link>
                 <Link to="/Portfolio" className="navbar-link-active link-navbar">Portfolio</Link>
                 <Link to ="/Contact" className="navbar-link-active  link-navbar">Contact</Link>

            </nav> 

        </header>
    ); 
}
export default Header 