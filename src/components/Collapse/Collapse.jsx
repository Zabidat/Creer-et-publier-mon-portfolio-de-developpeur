import "./Collapse.css"; 
import { useState } from "react";
import Arrow from "../../assets/collapse/Vector-Down.svg";  

function Collapse (props) {
    // Les paramètres id, title et content en props sont recupéres depuis le composant Home. 
    const { title, content} = props 

    //Declaration du Hook useState() et l'état de notre valeur est par défaut true. 
    const [isOpen, setOpen] = useState(true); 

    const toggleState = () => {
        // Cette fonction modifie la valeur du contenu des collapses au clic. 
        setOpen(!isOpen); 
    }

    return (

        // Affichage du collapse replié par defaut, 
        //l'utlisateur ouvrira au clic et le fermera au clic tout en faisant disparaitre le texte ainsi que le style.  
      
            <div className="button-collapse-in-home-page">

                    <div className="collapse" >

                        <h3 className="title-in-collapse"> 
                            {title}  

                            <span onClick={toggleState} className="collapse_toggle">

                                    {/* isOpen est une variable qui suit l'état de notre collapse
                                        et event onClick change isOpen état lorsque on clique sur l'élément pour l'ouvir ou le fermé 
                                    */} 

                                {isOpen ? (<img src={Arrow} alt="Vector-Up" className="arrow"   width={24} height={13} />) : (<img src={Arrow} alt="Vector-Down" className="arrow-close"/>)}
                            </span>

                        </h3> 

                        { isOpen && 

                                <div className="collapse-content"> 

                                    {content.map((text) =>
                                        <div className="details-skills">
                                           {text}
                                        </div> 

                                    )}

                                </div> 

                        } 

                    </div>

            </div>



         
    );
}

export default Collapse 