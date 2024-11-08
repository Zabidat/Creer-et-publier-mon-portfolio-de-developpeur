import  "./Home.css"; 
import compCollapse from "../../../datas/compCollapse.json"; 
import Banner from "../../Banner/Banner"; 
import About from "../../About/About"; 
import imgBanner from "../../../assets/banner/banner.webp"; 
import logo from "../../../assets/logo/Zabidat-logo.webp"; 
import Collapse from "../../Collapse/Collapse"; 
import Project from  "../../Projets/Projets"; 

// Au 
function Home () {
     
    return (
        <>


                <Banner Texte="Zabidat Abdallah: Développeuse web" image={imgBanner}></Banner>
                 
                <About image={logo}></About>

                <section className="skills-section">
                    <h2 className="title-skills-section">Compétences</h2> 
                    <hr></hr> 
                    
                    <div className="collapse-in-home-page"> 
                                {/* Title and content of Competences Collapse */}
                            

                                { compCollapse.map((text) => (

                                     <Collapse title ={text.title}  content= {text.content}  key={text.id}></Collapse>
                                ))}  

                     </div>

                </section> 

                <section>

                    <Project/>
                     
                </section>

            </>
    );
}

export default Home 