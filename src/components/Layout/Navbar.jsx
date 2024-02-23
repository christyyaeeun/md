import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Flex,
    Stack,
    Text,
    IconButton,
    Collapse,
    useColorModeValue,
    useBreakpointValue,
    UnorderedList,
    ListItem,
    Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import './style.css'
// import { useAuth } from "../../context/AuthContext";
// import UserMenu from "../Auth/UserMenu";

export default function Navbar({ onScrollToSection }) {
    const [ activeButton, setActiveButton ] = useState('hero');
    const [ isOpenMenu, setIsOpenMenu ] = useState(false);

    // const { user } = useAuth();

    const handleButtonClick = (section) => {
        onScrollToSection(section);
        setActiveButton(section);
    };

    const handleOrderOnlineClick = () => {
        // Send event to Google Analytics
        window.gtag('event', 'order_online_click', {
            'event_category': 'Button Clicks',
            'event_label': 'Order Online Button Clicked'
        });
    };

    return (
        <Box w="100vw" pos="fixed" zIndex="2">
            <Flex
                bg={ useColorModeValue('white', 'gray.800') }
                minH={ '60px' }
                py={ { base: 2 } }
                px={ { base: 4 } }
                borderBottom={ 1 }
                borderStyle={ 'solid' }
                borderColor={ useColorModeValue('gray.200', 'gray.900') }
                align={ 'center' }
            >
                <Flex flex={ { base: 1, md: 'auto' } } ml={ { base: -2 } } display={ { base: 'flex', md: 'none' } }>
                    <IconButton
                        as={ Button }
                        variant="ghost"
                        colorScheme="blue"
                        ml={ { base: -2 } }
                        aria-label="Toggle Navigation"
                        onClick={ () => setIsOpenMenu(!isOpenMenu) }
                        icon={ isOpenMenu ? <CloseIcon w={ 3 } h={ 3 } /> : <HamburgerIcon w={ 5 } h={ 5 } /> }
                    />
                </Flex>
                <Flex flex={ { base: 1 } } justify={ { base: 'center', md: 'start' } }>
                    <Box bg="black" px="2">
                        <Text
                            textAlign={ useBreakpointValue({ base: 'center', md: 'left' }) }
                            fontFamily="heading"
                            fontWeight="900"
                            textTransform="uppercase"
                            color={ useColorModeValue('white', 'black') }
                        >
                            <Link to="/dashboard">MD</Link>
                        </Text>
                    </Box>

                    <Flex fontSize="large" fontWeight="700" display={ { base: 'none', md: 'flex' } } ml={ 10 }>
                        <nav className="nav-menu">
                            <UnorderedList listStyleType="none">
                                <Stack className="nav-link" direction="row" spacing="6">
                                    <ListItem>
                                        <button onClick={ () => handleButtonClick('hero') } className={ activeButton === 'hero' ? 'active' : '' }>
                                            Home
                                        </button>
                                    </ListItem>
                                    <ListItem>
                                        <button onClick={ () => handleButtonClick('about') } className={ activeButton === 'about' ? 'active' : '' }>
                                            About
                                        </button>
                                    </ListItem>
                                    <ListItem>
                                        <button onClick={ () => handleButtonClick('gallery') } className={ activeButton === 'gallery' ? 'active' : '' }>
                                            Gallery
                                        </button>
                                    </ListItem>
                                    <ListItem>
                                        <button onClick={ () => handleButtonClick('menu') } className={ activeButton === 'menu' ? 'active' : '' }>
                                            Menu
                                        </button>
                                    </ListItem>
                                    <ListItem>
                                        <button onClick={ () => handleButtonClick('contact') } className={ activeButton === 'contact' ? 'active' : '' }>
                                            Contact
                                        </button>
                                    </ListItem>
                                </Stack>
                            </UnorderedList>
                        </nav>
                    </Flex>
                </Flex>
                <Stack flex={ { base: 1, md: 0 } } justify={ 'flex-end' } alignItems={ 'center' } direction={ 'row' } spacing={ 4 }>
                    <Button
                        as="a"
                        target="_blank"
                        display={ { base: 'none', md: 'inline-flex' } }
                        fontSize="sm"
                        fontWeight={ 600 }
                        color="white"
                        bg="black"
                        href="https://www.order.store/store/morning-donuts/sc0Ta0gDRoGYLjb_k9r32A"
                        _hover={ {
                            bg: '#3693fa',
                            color: 'white',
                        } }
                        _active={ {
                            bg: '#037aff',
                            color: 'white',
                        } }
                        onClick={ handleOrderOnlineClick }
                    >
                        Order Online
                    </Button>
                    {/* <Button
                        as={ 'a' }
                        target="_blank"
                        display={ { base: 'none', md: 'inline-flex' } }
                        fontSize={ 'sm' }
                        fontWeight={ 600 }
                        color={ 'white' }
                        bg={ 'black' }
                        href={ 'https://www.order.store/store/morning-donuts/sc0Ta0gDRoGYLjb_k9r32A' }
                        _hover={ {
                            bg: '#3693fa',
                            color: 'white',
                        } }
                        _active={ {
                            bg: '#037aff',
                            color: 'white',
                        } }
                    >
                        Order Online
                    </Button> */}

                    {/* <IconButton
                            variant="link"
                            colorScheme="blue"
                            onClick={ handleUserMenuClick }
                            icon={ <Icon as={ AiOutlineUser } boxSize="6" /> }
                        /> */}
                    {/* <UserMenu user={ user } /> */ }

                </Stack>
            </Flex>
            <Collapse in={ isOpenMenu } animateOpacity>
                <UnorderedList listStyleType="none">
                    <Stack
                        className="nav-link nav-menu"
                        direction="column"
                        spacing="4"
                        fontSize="large"
                        bg={ useColorModeValue('white', 'black') }
                        p={ 2 }
                        display={ { md: 'none' } }
                    >
                        <ListItem>
                            <button onClick={ () => handleButtonClick('hero') } className={ activeButton === 'hero' ? 'active' : '' }>
                                Home
                            </button>
                        </ListItem>
                        <ListItem>
                            <button onClick={ () => handleButtonClick('about') } className={ activeButton === 'about' ? 'active' : '' }>
                                About
                            </button>
                        </ListItem>
                        <ListItem>
                            <button onClick={ () => handleButtonClick('gallery') } className={ activeButton === 'gallery' ? 'active' : '' }>
                                Gallery
                            </button>
                        </ListItem>
                        <ListItem>
                            <button onClick={ () => handleButtonClick('menu') } className={ activeButton === 'menu' ? 'active' : '' }>
                                Menu
                            </button>
                        </ListItem>
                        <ListItem>
                            <button onClick={ () => handleButtonClick('contact') } className={ activeButton === 'contact' ? 'active' : '' }>
                                Contact
                            </button>
                        </ListItem>
                    </Stack>
                </UnorderedList>
            </Collapse>
        </Box>
    );
}