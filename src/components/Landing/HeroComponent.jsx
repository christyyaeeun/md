import React from 'react'
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
import './style.css'

function Hero({ menuRef }) {
    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };
    const imageUrl = useBreakpointValue({
        base: 'https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/hero-bg1.png?alt=media&token=6b0ea9be-24e8-4856-9d64-89e27e6a4ac7',
        md: 'https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/pattern-nobg.png?alt=media&token=f46aeaab-2708-4f95-ac47-c43f3d4b4997',
    });
    return (
        <motion.div
            transition={ { duration: 1, delay: .3 } }
            initial={ { opacity: 0, y: 50 } }
            animate={ { y: 0 } }
            whileInView={ { opacity: 1 } }
        >
            <Box className='hero'>
                <Box className='hero-cover' minHeight="900px" position="relative">
                    <Box className="hero-cover__background" />
                    <Image
                        className="hero-cover__image-bg"
                        alt="Hero Image"
                        src={ imageUrl }
                        width="100%"
                        height="100%"
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
                            <Box id="right-col" className="hero-column is-layout-flow" bg={ { base: "whiteAlpha.200", lg: "transparent" } }>
                                <Container maxW={ '5xl' }>
                                    <Stack
                                        className="hero-text"
                                        textAlign={ 'center' }
                                        align={ 'center' }
                                        spacing={ { base: 8, md: 10 } }
                                        px={ { lg: 10 } }
                                        py={ { base: 20, lg: 28 } }>
                                        <Heading
                                            id="cta-text"
                                            color="black"
                                            fontWeight={ 600 }
                                            fontSize={ { base: '3xl', sm: '4xl', md: '5xl' } }
                                            lineHeight={ '110%' }>
                                            Freshly baked{ ' ' }
                                            <Text as={ 'span' } color={ 'blue.400' }>
                                                every day
                                            </Text>
                                        </Heading>
                                        <Text id="cta-text" maxW={ '3xl' }>
                                            Always fresh and delicious. Come visit our family-run bakery and start your day off right!
                                        </Text>
                                        <Stack spacing={ 6 } direction={ 'row' }>
                                            <Button as='a' target='_blank' href={ 'https://www.order.store/store/morning-donuts/sc0Ta0gDRoGYLjb_k9r32A' } rounded={ 'full' } px={ 6 } colorScheme={ 'blue' } bg={ 'blue.400' } _hover={ { bg: 'blue.300' } }> Order Online </Button>
                                            <Button onClick={ () => { scrollToSection(menuRef); } }
                                                rounded={ 'full' }
                                                outlineOffset='0'
                                                transition='ease-in-out 500ms'
                                                _hover={ { outline: 'solid 1px gray', bg: 'gray.200' } }
                                                px={ 6 } > View Menu </Button>
                                        </Stack>
                                    </Stack>
                                </Container>
                            </Box>
                        </Container>
                    </Box>
                </Box >
            </Box >
        </motion.div>
    )
}
export default Hero
