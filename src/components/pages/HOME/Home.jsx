import Banner from "../../Banner/Banner"; 
import imgBanner from "../../../assets/banner/Image-Banniere.webp"; 


function Home () {
     
    return (

        <section className="">

            <div className="container-home">

                    <Banner Texte="Zabidat Abdallah : Développeuse web" image={imgBanner}></Banner>

                    <div className=""> 

                    </div>

            </div>

        </section>
    );
}

export default Home 