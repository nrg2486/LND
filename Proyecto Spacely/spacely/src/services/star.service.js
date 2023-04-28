import React from 'react';
import StarInfo from "../components/StarInfo.js";

const stars = [
    {
        id: 1,
        name: 'Sirius',
        discoveryDate: '1862-08-31',
        galaxy: 'Vía Láctea',
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Sirius_A_and_B_artwork.jpg"
    },
    {
        id: 2,
        name: 'Alpha Centauri',
        discoveryDate: '1839-11-16',
        galaxy: 'Vía Láctea',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/fpkcGfVHtKWEgYSJBfg69h-1920-80.jpg'
    },
    {
        id: 3,
        name: 'Betelgeuse',
        discoveryDate: '1836-11-30',
        galaxy: 'Vía Láctea',
        imageUrl: 'https://i0.wp.com/eos.org/wp-content/uploads/2021/06/betelgeuse-cold-spot-dust-cloud.jpg'
    },
    {
        id: 4,
        name: 'Antares',
        discoveryDate: '1819-07-20',
        galaxy: 'Vía Láctea',
        imageUrl: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/4114/production/_97506661_3840.jpg'
    },
    {
        id: 5,
        name: 'Vega',
        discoveryDate: '1727-05-17',
        galaxy: 'Vía Láctea',
        imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*I3D-Y8yMScEImd7Ja_ofzw.jpeg'
    },
    {
        id: 6,
        name: 'Aldebaran',
        discoveryDate: '1600-01-01',
        galaxy: 'Vía Láctea',
        imageUrl: 'https://osr.org/wp-content/uploads/2016/03/aldebaran-star.jpg'
    },
    {
        id: 7,
        name: 'Rigel',
        discoveryDate: '1825-09-12',
        galaxy: 'Vía Láctea',
        imageUrl: 'https://www.astronomytrek.com/wp-content/uploads/2016/02/rigel.jpg'
    },
    {
        id: 8,
        name: 'Proxima Centauri',
        discoveryDate: '1915-08-23',
        galaxy: 'Vía Láctea',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/New_shot_of_Proxima_Centauri%2C_our_nearest_neighbour.jpg'
    },
    {
        id: 9,
        name: 'Bellatrix',
        discoveryDate: '1869-01-01',
        galaxy: 'Vía Láctea',
        imageUrl: 'https://i0.wp.com/astrologyking.com/wp-content/uploads/bellatrix-star-gamma-orionis.jpg?fit=720%2C405&ssl=1'
    },
    {
        id: 10,
        name: 'Pollux',
        discoveryDate: '1610-01-07',
        galaxy: 'Vía Láctea',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Pollux..jpg'
    },
    {
        id: 11,
        name: 'Spica',
        discoveryDate: '2003-06-10',
        galaxy: 'Vía Láctea',
        imageUrl: 'https://www.star-facts.com/wp-content/uploads/2019/10/Spica.webp'
    },
    {
        id: 12,
        name: 'Altair',
        discoveryDate: '1725-01-01',
        galaxy: 'Vía Láctea',
        imageUrl: 'https://storage.googleapis.com/theskylive-static/website/sky/stars/star-images/75/7557_800.jpg'
    }
];

// ... and so on for the remaining 11 stars


const Stars = () => {
    return (
        <div>
            <StarInfo stars={stars} />
        </div>
    );
};

export default Stars