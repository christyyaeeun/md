import React from 'react';

const MapEmbed = () => {
    return (
        <div style={ { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '600px', height: '450px' } }>
            <iframe
                title='Google Maps Embed'
                width="600"
                height="450"
                style={ { border: '0', borderRadius: '15px' } }
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB9GPdd2ABuZBmNZ4fWDvM4owQCEhC6v6E&q=Morning+Donuts+,Dallas,TX+75243"
                referrerPolicy="no-referrer-when-downgrade"
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default MapEmbed;
