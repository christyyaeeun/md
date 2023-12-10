import React from 'react';

const MapEmbed = () => {
    return (
        <div style={ { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '600px', height: '450px' } }>
            <iframe
                title='Google Maps Embed'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209.38816460322266!2d-96.7407725304073!3d32.89259881470757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea00665d64bcb%3A0xccbb26e999372f52!2sMorning%20Donuts!5e0!3m2!1sen!2sus!4v1688069737530!5m2!1sen!2sus"
                width="600"
                height="450"
                style={ { border: '0', borderRadius: '15px' } }
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default MapEmbed;
