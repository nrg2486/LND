import "./constelation.css";

import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";

function Constelation() {
    return (
        <>
            <div><Header /></div>


            <div className="page-container">
                <div className="blue-box">
                    <img src="https://images.vexels.com/media/users/3/242934/isolated/preview/2cd90ce2890680e88e4b6dca78a2e966-trazo-de-constelaciones-amarillas.png" alt="Constelación"/>
                        <div className="white-frame">
                            CONSTELACIÓN
                        </div>
                </div>
            </div>
            <div><Footer /></div>
        </>
    );
}

export default Constelation;
