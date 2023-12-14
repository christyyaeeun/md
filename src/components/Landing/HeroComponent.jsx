// import React from 'react'
// import {
//     Box,
//     Button,
//     Container,
//     Heading,
//     Image,
//     Text,
//     Stack,
//     useBreakpointValue,
// } from "@chakra-ui/react";
// import { motion } from 'framer-motion';
// import './style.css'
// import mobileWebp from '../../assets/img/mobile.png'
// import mobileImgFallback from '../../assets/img/hero-mobile.webp'
// import desktopWebp from '../../assets/img/hero-desktop.webp'
// import desktopImgFallback from '../../assets/img/desktop.png'

// function Hero({ menuRef }) {
//     const scrollToSection = (sectionRef) => {
//         if (sectionRef.current) {
//             sectionRef.current.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start',
//             });
//         }
//     };

//     const imageUrl = useBreakpointValue({
//         base: `url(${ mobileWebp }), url(${ mobileImgFallback })`,
//         md: `url(${ desktopWebp }), url(${ desktopImgFallback })`,
//     });

//     return (
//         <motion.div
//             transition={ { duration: 1, delay: .3 } }
//             initial={ { opacity: 0, y: 50 } }
//             animate={ { y: 0 } }
//             whileInView={ { opacity: 1 } }
//         >
//             <Box className='hero'>
//                 <Box
//                     className='hero-cover'
//                     minHeight="900px"
//                     position="relative"
//                     bg='white'
//                 >
//                     <Box className="hero-cover__background" />
//                     <Image
//                         className="hero-cover__image-bg"
//                         alt=""
//                         src={ imageUrl }
//                         width="100%"
//                         objectFit="cover"
//                         scale={ 0 }
//                         zIndex="0"
//                         loading="lazy"
//                     />

//                     <Box
//                         className="hero-cover__inner-container is-layout-flow"
//                         position="relative"
//                         zIndex="1"
//                         mt={ { base: "-5em" } }
//                     >
//                         <Container className="hero-columns alignfull" display="flex" maxW="100%">
//                             {/* <Box id="left-col" className="hero-column is-layout-flow" flexBasis="50%" />
//                             <Box id="right-col" className="hero-column is-layout-flow" flexBasis="50%" bg={ { base: "whiteAlpha.200", lg: "transparent" } }> */}
//                             <Box id="left-col" className="hero-column is-layout-flow" />
//                             <Box id="right-col" className="hero-column is-layout-flow" bg={ { base: "whiteAlpha.200", lg: "transparent" } }>

//                                 <Container maxW={ '5xl' }>
//                                     <Stack
//                                         className="hero-text"
//                                         textAlign={ 'center' }
//                                         align={ 'center' }
//                                         spacing={ { base: 8, md: 10 } }
//                                         px={ { lg: 10 } }
//                                         py={ { base: 20, lg: 28 } }>
//                                         <Heading
//                                             id="cta-text"
//                                             color="black"
//                                             fontWeight={ 600 }
//                                             fontSize={ { base: '3xl', sm: '4xl', md: '5xl' } }
//                                             lineHeight={ '110%' }>
//                                             Freshly baked{ ' ' }
//                                             <Text as={ 'span' } color={ 'blue.400' }>
//                                                 every day
//                                             </Text>
//                                         </Heading>
//                                         <Text id="cta-text" maxW={ '3xl' } color='black'>
//                                             Always fresh and delicious. Come visit our family-run bakery and start your day off right!
//                                         </Text>
//                                         <Stack spacing={ 6 } direction={ 'row' }>
//                                             <Button as='a' target='_blank' href={ 'https://www.order.store/store/morning-donuts/sc0Ta0gDRoGYLjb_k9r32A' } rounded={ 'full' } px={ 6 } colorScheme={ 'blue' } bg={ 'blue.400' } _hover={ { bg: 'blue.300' } }> Order Online </Button>
//                                             <Button bg='blackAlpha.200' color='black' onClick={ () => { scrollToSection(menuRef); } } rounded={ 'full' } px={ 6 } > View Menu </Button>
//                                         </Stack>

//                                     </Stack>
//                                 </Container>
//                             </Box>
//                         </Container>
//                     </Box>
//                 </Box >
//             </Box >
//         </motion.div>

//     )
// }

// export default Hero


import React, { useEffect } from 'react';
import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    Text,
    Stack,
    useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from 'framer-motion';
import './style.css';
// import mobileImg from '../../assets/img/hero-mobile.webp';
import desktopImg from '../../assets/img/hero-desktop.webp';

function Hero({ menuRef }) {
    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const preloadDesktopImage = () => {
        const img = new window.Image();
        img.src = desktopImg;
    };

    useEffect(() => {
        preloadDesktopImage();
    }, []);

    const imageUrl = useBreakpointValue({
        base: desktopImg,
        md: desktopImg,
    });

    return (
        <motion.div
            transition={ { duration: 1, delay: 0.3 } }
            initial={ { opacity: 0, y: 50 } }
            animate={ { y: 0 } }
            whileInView={ { opacity: 1 } }
        >
            <Box className="hero">
                <Box className="hero-cover" minHeight="900px" position="relative" bg="white">
                    <Box className="hero-cover__background" />
                    <Image
                        className="hero-cover__image-bg"
                        alt=""
                        src={ imageUrl }
                        width="100%"
                        objectFit="cover"
                        scale={ 0 }
                        zIndex="0"
                        loading="lazy"
                    />

                    <Box
                        className="hero-cover__inner-container is-layout-flow"
                        position="relative"
                        zIndex="1"
                        mt={ { base: "-5em" } }
                    >
                        <Container className="hero-columns alignfull" display="flex" maxW="100%">
                            <Box id="left-col" className="hero-column is-layout-flow" />
                            <Box
                                id="right-col"
                                className="hero-column is-layout-flow"
                                bg={ { base: "whiteAlpha.200", lg: "transparent" } }
                            >
                                <Container maxW="5xl">
                                    <Stack
                                        className="hero-text"
                                        textAlign="center"
                                        align="center"
                                        spacing={ { base: 8, md: 10 } }
                                        px={ { lg: 10 } }
                                        py={ { base: 20, lg: 28 } }
                                    >
                                        <Heading
                                            id="cta-text"
                                            color="black"
                                            fontWeight={ 600 }
                                            fontSize={ { base: '3xl', sm: '4xl', md: '5xl' } }
                                            lineHeight="110%"
                                        >
                                            Freshly baked{ ' ' }
                                            <Text as="span" color="blue.400">
                                                every day
                                            </Text>
                                        </Heading>
                                        <Text id="cta-text" maxW="3xl" color="black">
                                            Always fresh and delicious. Come visit our family-run bakery and start your day off right!
                                        </Text>
                                        <Stack spacing={ 6 } direction="row">
                                            <Button
                                                as="a"
                                                target="_blank"
                                                href="https://www.order.store/store/morning-donuts/sc0Ta0gDRoGYLjb_k9r32A"
                                                rounded="full"
                                                px={ 6 }
                                                colorScheme="blue"
                                                color='black'
                                                _hover={ { bg: 'blue.300' } }
                                            >
                                                Order Online
                                            </Button>
                                            <Button
                                                bg="blackAlpha.200"
                                                transition='ease-in-out 300ms'
                                                _hover={ { outline: 'solid 1px gray', outlineOffset: '0' } }
                                                onClick={ () => {
                                                    scrollToSection(menuRef);
                                                } }
                                                rounded="full"
                                                px={ 6 }
                                            >
                                                View Menu
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </Container>
                            </Box>
                        </Container>
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
}

export default Hero;
