import React from 'react'
import { motion } from 'framer-motion';
import {
    Container,
    Box,
    Heading,
    Text,
    SimpleGrid,
    Center,
    useColorModeValue,
    Stack,
    Link,
} from '@chakra-ui/react';
import { BsClockFill } from "react-icons/bs"
import { PhoneIcon } from '@chakra-ui/icons';
import MapEmbed from './MapEmbed'

const Contact = () => {
    return (
        <Container h="700px" maxW="1300px" id="contact-section">
            <Container maxW="full" mt={ 0 } centerContent overflow="hidden" id="contact-container">
                <motion.div
                    transition={ { duration: 1.5, delay: .1 } }
                    initial={ { opacity: 0, y: 50 } }
                    animate={ { opacity: 1, y: 20 } }
                    exit={ { opacity: 0 } }
                >

                    <SimpleGrid id="hero-grid" columns={ { base: 1, md: 1, lg: 2 } } gridColumnGap='1em' spacing={ 10 } mt='2em' pb={ { base: '4em', md: '5em', lg: '6em' } }>
                        <Stack spacing={ 4 } alignItems={ { base: "center", lg: "flex-start" } } maxW="500px">
                            <Heading mb=".5em">Contact Us</Heading>
                            <Center py={ 6 } mt="-3em">
                                <Box
                                    w={ { sm: 'sm', md: 'sm', lg: 'md' } }
                                    rounded={ 'sm' }
                                    overflow={ 'hidden' }
                                    bg="white"
                                    border={ '1px' }
                                    borderColor="black"
                                    boxShadow={ useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan') }>

                                    <Box p={ 4 }>
                                        <Heading color={ 'black' } fontSize={ 'xl' } mb="1em">
                                            Didn't find what you were looking for?
                                        </Heading>
                                        <Text as="i" my=".5em" color={ 'gray.500' } fontSize={ { sm: 'sm', md: 'md', lg: 'lg' } }>
                                            If you placed an order with a third party vendor (DoorDash/UberEats), and something has gone wrong, please reach out directly to the third party vendor for further assistance.
                                        </Text>
                                        <Box display="flex" alignItems="center" my="1em">
                                            <BsClockFill className="contact-icon" />
                                            <Text className="contact-info" ml=".2em">Mon - Sun 5:00 AM - 12:00 PM</Text>
                                        </Box>

                                        <Box display="flex" alignItems="center">
                                            <PhoneIcon className="contact-icon" />
                                            <Link className="contact-info" href="tel:+14692060108" ml=".2em" target="blank" > (469)-206-0108</Link>
                                        </Box>

                                    </Box>
                                </Box>
                            </Center>
                        </Stack>
                        <MapEmbed />
                    </SimpleGrid>
                </motion.div>
            </Container>
        </Container>
    )
}

export default Contact