import "./home.css";
import StarInfo from "../../services/star.service.js";
import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";

function Home() {
    return (
        <>
           
                <div><Header/></div>
                <div class="container">
                    <div class="scrollable"><StarInfo/></div>
                </div>
                <div><Footer/></div>
           
        </>
    );
}

export default Home;