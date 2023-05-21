import React from "react";
import "./notices.css";
import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";
import RssFeed from '../../components/rss/rssfeed.js';

const Notices = () => {

    return (
        <>
            <div><Header /></div>
            <div >
                <h2 className="menu">Menú de Noticias</h2>
                <h2 class="foto">
                    <a href="/rss.xml"><img src="https://cdn.icon-icons.com/icons2/112/PNG/512/rss_18953.png" alt="rss" width={40} /></a>
                </h2>
                
            </div>
            <div class="rss-notices"><RssFeed/></div>
            <div ><Footer /></div>
        </>
    );
};

export default Notices;
