import "./home.css";
import StarList from "../../components/StarInfo";
import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";


function Home() {
    return (
        <>
           
                <div><Header/></div>
                <div class="container">
                    <div class="scrollable"><StarList/></div>
                </div>
                <div><Footer/></div>
           
        </>
    );
}

export default Home;