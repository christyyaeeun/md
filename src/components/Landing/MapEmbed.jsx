// import React from 'react';

// const MapEmbed = () => {
//     return (
//         <div style={ { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '600px', height: '450px' } }>
//             <iframe
//                 title='Google Maps Embed'
//                 width="600"
//                 height="450"
//                 style={ { border: '0', borderRadius: '15px' } }
//                 src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB9GPdd2ABuZBmNZ4fWDvM4owQCEhC6v6E&q=Morning+Donuts+,Dallas,TX+75243"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 loading="lazy"
//             ></iframe>
//         </div>
//     );
// };

// export default MapEmbed;

import React, { useEffect, useRef } from 'react';

const MapEmbed = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const loadScript = () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCkwrLIy4XbH5fj6g30RtZFVM0xW8onNeI&callback=initMap`; // Replace YOUR_API_KEY with your actual API key
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        };

        window.initMap = () => {
            if (!window.google || !mapRef.current) return; // Check if Google Maps API is loaded and if mapRef is available
            new window.google.maps.Map(mapRef.current, {
                center: { lat: 32.7767, lng: -96.797 },
                zoom: 12
            });
        };

        loadScript();

        return () => {
            // Clean up script element
            const scriptElement = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkwrLIy4XbH5fj6g30RtZFVM0xW8onNeI&callback=initMap"]');
            if (scriptElement) {
                document.body.removeChild(scriptElement);
            }
        };
    }, []);

    return (
        <div style={ { width: '600px', height: '450px', border: '0', borderRadius: '15px' } }>
            <div ref={ mapRef } style={ { width: '100%', height: '100%' } } />
        </div>
    );
};

export default MapEmbed;
