import "./Banner.css"; 
function Banner (props)   // Prends comme argument en entrée Props 
//Et les valeurs de image, Texte et bannerclasssont récuperées dans Home component pour afficher notre bannière
{
   const {image, Texte} =props 
    return (

        <section className="banner-section">

            <div className="banner-container">

                <img className="img-banner" alt="Bannière" src={image} width={1620} height={220}></img> 
                <h1 className="title-banner">{Texte}</h1> 

            </div>

        </section>
    ); 

};
export default Banner 