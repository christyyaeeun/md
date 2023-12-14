import React from 'react';
import {
    Box,
    Container,
    Heading,
    Image,
    Spacer,
    Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Animation = ({ children, delay = 0 }) => (
    <motion.div
        initial={ { opacity: 0, x: -50 } }
        animate={ { opacity: 1, x: 0 } }
        exit={ { opacity: 0 } }
        transition={ { duration: 1, delay } }
    >
        { children }
    </motion.div>
);

function About() {
    return (
        <div id="about-section">
            <Box className="about" minHeight="900px" position="relative" bg="white">
                <Box className="about__background" />
                <Box
                    className="about__inner-container"
                    position="relative"
                    zIndex="1"
                    color="white"
                    mt={ { base: '-5em' } }
                    m="0 auto"
                >
                    <Container
                        display="flex"
                        justifyContent="center"
                        maxW="1200px"
                        width="100%"
                        color="#3b3b3b"
                        flexDirection={ { base: 'column', md: 'row', lg: 'row' } }
                        margin="0 auto"

                    >
                        <Animation id="left-col" delay={ 0.4 }>
                            <Image
                                className="img"
                                mt="1em"
                                h={ { base: '350px', md: '400px', lg: '550px' } }
                                w={ { base: '350px', md: '400px', lg: '550px' } }
                                display={ { base: 'none', md: 'block', lg: 'block' } }
                                objectFit="cover"
                                src="https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/dough-about.jpg?alt=media&token=a7c8b763-3773-4bac-b411-bb82a95773a2" />
                        </Animation>

                        <motion.div
                            id="right-col"
                            className="about-column layout-flow"
                            // flexBasis="50%"
                            initial={ { x: 50, opacity: 0 } }
                            animate={ { x: 0, opacity: 1 } }
                            transition={ { duration: 1, delay: 0.6 } }
                        >
                            <Spacer height={ { base: '50px', lg: '100px' } } aria-hidden="true" />
                            <Box id="about-textbox" ml={ { base: "0", md: "-10em", lg: "3em" } } bg={ { base: 'white', md: '#f0f0f069', lg: '#f0f0f069' } } maxW={ { md: "450px", lg: '550px' } }>
                                <Heading
                                    as="h2"
                                    fontSize={ { base: '40px', lg: '50px' } }
                                    lineHeight="1.1"
                                    fontWeight="bold"
                                    mb="15px"
                                    color={ { base: 'gray.800', md: '#3b3b3b', lg: '#3b3b3b' } }
                                >
                                    About Us
                                </Heading>

                                <Text mb="2" fontSize={ { base: '15px', md: '16px', lg: '18px' } } color={ { base: 'gray.800', md: '#3b3b3b', lg: '#3b3b3b' } }>
                                    Our story began in 2018 when we transitioned into new ownership and underwent major transformations.
                                    We wanted to create a warm and inviting atmosphere that would make everyone feel at home when they walked through our doors.
                                    Since then, we've earned a reputation as one of the best donut shops in Dallas thanks to our dedication to quality.
                                    We use only fresh and high-quality ingredients to create our delicious treats, from classic glazed and chocolate
                                    frosted donuts to unique creations like our Cronuts and Fresh Strawberry Cream Croissants.
                                </Text>

                                <Text fontSize={ { base: '15px', md: '16px', lg: '18px' } } color={ { base: 'white', md: '#3b3b3b', lg: '#3b3b3b' } }>
                                    We're proud to have been recognized by Uber Eats as one of the "Best Overall" restaurants in Dallas,
                                    and we're committed to continuing to serve our community with the best donuts around.
                                    We invite you to come and experience the Morning Donuts difference for yourself.
                                </Text>
                            </Box>
                        </motion.div>
                    </Container>
                </Box>
            </Box>
        </div>
    );
}

export default About;
