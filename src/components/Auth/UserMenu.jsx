import React, { useState } from 'react';
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, MenuItem, Menu, MenuButton, MenuList, Avatar, VStack, Text, Box, Flex, MenuDivider, IconButton, Spacer } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import AuthForm from './AuthForm';

function UserMenu({ user }) {
    const { onOpen } = useDisclosure();
    const [ showAuthForm, setShowAuthForm ] = useState(null);

    const { signOut } = useAuth();

    const handleSignOut = async () => {
        try {
            await signOut();
            console.log('User signed out!');
        } catch (error) {
            // Handle any sign-out error here if needed
            console.error('Error during sign out:', error);
        }
    };

    const handleAuthSuccess = () => {
        setShowAuthForm(null);
        onOpen();
    };


    if (!user) {
        // User is not logged in, display login/signup options
        return (
            <Menu>
                <MenuButton pt={ 2 } transition="all 0.3s" _focus={ { boxShadow: 'none' } }>
                    <IconButton variant="link" colorScheme="blue" icon={ <Avatar size="sm" src='https://bit.ly/broken-link' /> } />
                </MenuButton>
                <MenuList bg="white" borderColor="gray.200">
                    <MenuItem onClick={ () => setShowAuthForm('login') }>Log In</MenuItem>
                    <MenuItem onClick={ () => setShowAuthForm('signup') }>Sign Up</MenuItem>

                    {/* Auth Modal */ }
                    <Modal isOpen={ !!showAuthForm } onClose={ () => setShowAuthForm(null) }>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{ showAuthForm === 'login' ? 'Log In' : 'Sign Up' }</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <AuthForm type={ showAuthForm } onAuthSuccess={ handleAuthSuccess } />
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </MenuList>
            </Menu>
        );
    } else {
        // User is logged in, display user's information
        return (
            <Menu>
                <MenuButton pt={ 2 } transition="all 0.3s" _focus={ { boxShadow: 'none' } }>
                    <Flex alignItems="center">
                        <Box>
                            <Avatar
                                size="sm"
                                src='https://bit.ly/broken-link' />
                        </Box>
                        <Box pr='2'>
                            <VStack display={ { base: 'none', md: 'flex' } } alignItems="flex-start" spacing="1px" ml="2">
                                <Text fontSize="sm" whiteSpace='nowrap'>{ user.name }</Text>
                            </VStack>
                        </Box>
                        <Spacer />
                        <Box display={ { base: 'none', md: 'flex' } }>
                            <FiChevronDown />
                        </Box>
                    </Flex>
                </MenuButton>
                <MenuList bg="white" borderColor="gray.200">
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={ handleSignOut }>Sign out</MenuItem>
                </MenuList>
            </Menu>
        );
    }
}

export default UserMenu;

