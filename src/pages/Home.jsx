import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { AboutComponent, ContactComponent, MenuComponent, GalleryComponent, HeroComponent } from '../components/Landing';
import Navbar from '../components/Layout/Navbar';
import { Box } from '@chakra-ui/react';

function Home() {
    const [ showScrollToTop, setShowScrollToTop ] = useState(false);

    const heroRef = useRef();
    const aboutRef = useRef();
    const galleryRef = useRef();
    const contactRef = useRef();
    const menuRef = useRef();

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const shouldShowScrollToTop = scrollTop > 0;
        setShowScrollToTop(shouldShowScrollToTop);
    };

    const handleNavClick = (section) => {
        if (section === 'hero') {
            scrollToSection(heroRef);
        } else if (section === 'about') {
            scrollToSection(aboutRef);
        } else if (section === 'gallery') {
            scrollToSection(galleryRef);
        } else if (section === 'contact') {
            scrollToSection(contactRef);
        } else if (section === 'menu') {
            scrollToSection(menuRef);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <>
            <Box bg='white' color='black'>
                <Navbar onScrollToSection={ handleNavClick } />

                { showScrollToTop && (
                    <div className="scroll-to-top-btn" onClick={ () => scrollToSection(heroRef) }>
                        <FaArrowUp />
                    </div>
                ) }

                <div ref={ heroRef } className="home-container section" id="home-container" />
                <HeroComponent menuRef={ menuRef } />
                <div ref={ aboutRef } className="about-container section" id="about-container" />
                <AboutComponent />
                <div ref={ galleryRef } className="gallery-container section" id="gallery-container" />
                <GalleryComponent />
                <div ref={ menuRef } className="menu-container section" id="menu-container" />
                <MenuComponent />

                <motion.div
                    transition={ { duration: 1, delay: 0.3 } }
                    initial={ { opacity: 0, y: 50 } }
                    animate={ { y: 0 } }
                    whileInView={ { opacity: 1 } }
                >
                    <div ref={ contactRef } className="contact-container section" id="contact-container" />
                    <ContactComponent />
                </motion.div>
            </Box>
        </>
    );
}

export default Home;




