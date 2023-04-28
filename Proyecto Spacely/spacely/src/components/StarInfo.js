import React from 'react';

const StarInfo = (props) => {
    const { stars } = props;

    return (
        <div class="stars-container">
            {stars.map(star => (
                <>
                <div class="fotoEstrella"><img class="fotos" src={star.imageUrl} alt={star.name} /></div>
                <div key={star.id} >
                    <h2>{star.name}</h2>
                    <p>Discovered on: {star.discoveryDate}</p>
                    <p>Galaxy: {star.galaxy}</p>
                </div>
                </>
            ))}
        </div>

    );
};

export default StarInfo;