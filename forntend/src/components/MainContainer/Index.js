import Banner from "../banner/Index.js";
import  CardsContainer  from "../cardsContainer/CardsContainer.js";
import Footer from "../footer/Footer.js";
import Header from "../header/index.js";

const MainContainer = () => {
    return(
      <div className=''>
        <Header/>
        <Banner/>
        <CardsContainer/>
        <Footer/>
      </div>
    )
}
export default MainContainer;