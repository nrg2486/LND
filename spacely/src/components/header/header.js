import "./header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [imageBorders, setImageBorders] = useState({
        starPage: "",
        dataPage: "",
        constelationPage: "",
        moon: "",
    });

    const handleImageBorder = (event, key) => {
        const updatedBorders = { ...imageBorders };
        updatedBorders[key] = "image-border-yellow";
        setImageBorders(updatedBorders);
    };

    return (
        <header className="header">
            <nav>
                <ul>
                    <Link to="/home">
                        <nav
                            className={`starPage ${imageBorders.starPage}`}>
                            <img
                                className="logos hover-effect"
                                src="https://www.freeiconspng.com/thumbs/white-star-icon/white-star-icon-19.png"
                                alt="star"
                            />
                        </nav>
                    </Link>
                    <Link to="/details">
                        <nav
                            className={`dataPage ${imageBorders.dataPage}`}
                            onClick={(event) => handleImageBorder(event, "dataPage")}
                        >
                            <img
                                className="logos hover-effect"
                                src="https://flaticons.net/icon.php?slug_category=education&slug_icon=instrument-telescope"
                                alt="telescope"
                            />
                        </nav>
                    </Link>

                    <Link to="/constelation">
                        <nav className={`constelationPage ${imageBorders.constelationPage}`}>
                            <img
                                className="logos hover-effect"
                                src="https://www.freeiconspng.com/uploads/moon-icon-32.png"
                                alt="moon"
                            />
                        </nav>
                    </Link>
                    <Link to="/notices">
                    <nav class="moon">
                        <img
                            className="spacely hover-effect"
                            src="https://www.citypng.com/public/uploads/small/11665225405lofg3fqxqpy7mcbeogqh8jlzjk0iokds27govilmxrxnuep4ldgireh4jun0hiadzhqmss7mzz4efhqxgxrvcjxxa6ath3ktkn64.png"
                            alt="spacely"
                        />
                    </nav>
                    </Link>
                </ul>
            </nav>
        </header>

    );
}



export default Header;
