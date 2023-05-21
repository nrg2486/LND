import "./details.css";
import DetailedData from "../../components/detailedData.js";
import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";

function Details() {
    return (
        <>
                <div><Header/></div>
                
                <div><DetailedData/></div>
                <div><Footer/></div>
        </>
    );
}

export default Details;