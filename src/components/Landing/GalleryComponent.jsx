import React, { useState } from 'react';
import {
    Box,
    Heading,
    HStack,
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
// import { v4 as uuidv4 } from 'uuid';
// import Cart from '../Order/Cart'
import items from '../Order/Items'
import ProductItem from '../Order/ProductItem';

function Gallery() {
    const [ selectedTag, setSelectedTag ] = useState(null);
    // const [ cartItems, setCartItems ] = useState([]);
    // const [ isCartOpen, setIsCartOpen ] = useState(false);

    const handleTagSelection = (tag) => {
        setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
    };

    const isMobile = useBreakpointValue({ base: true, md: false });

    // const selectItem = (item) => {
    //     // Handle selecting the item
    // };

    // const addToCart = (item) => {
    //     const newItem = { ...item, id: uuidv4() };
    //     setCartItems((prevItems) => [ ...prevItems, newItem ]);
    //     setIsCartOpen(true);
    // };

    // const toggleCart = () => {
    //     setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
    // };

    // const removeFromCart = (item) => {
    //     setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== item.id));
    // };

    // const updateCartItemQuantity = (item, newQuantity) => {
    //     const updatedItems = cartItems.map((cartItem) => {
    //         if (cartItem.id === item.id) {
    //             return { ...cartItem, quantity: newQuantity };
    //         }
    //         return cartItem;
    //     });
    //     setCartItems(updatedItems);
    // };

    return (
        <>
            <Box maxW="1300px" m="0 auto" p="1em 2em" id="gallery-section">
                <Heading mb={ { base: ".5em" } }>Popular Items</Heading>
                { !isMobile && (
                    <HStack spacing={ 4 } mt={ 4 } mb={ 8 } color='black'>
                        <Button
                            colorScheme={ selectedTag === null ? 'blue' : 'gray' }
                            onClick={ () => handleTagSelection(null) }
                        >
                            All
                        </Button>
                        <Button
                            colorScheme={ selectedTag === 'Donut Box' ? 'blue' : 'gray' }
                            onClick={ () => handleTagSelection('Donut Box') }
                        >
                            Donut Box
                        </Button>
                        <Button
                            colorScheme={ selectedTag === 'Specialty Item' ? 'blue' : 'gray' }
                            onClick={ () => handleTagSelection('Specialty Item') }
                        >
                            Specialty Items
                        </Button>
                        <Button
                            colorScheme={ selectedTag === 'Sausace Roll' ? 'blue' : 'gray' }
                            onClick={ () => handleTagSelection('Sausage Roll') }
                        >
                            Sausage Rolls
                        </Button>
                        <Button
                            colorScheme={ selectedTag === 'Breakfast Good' ? 'blue' : 'gray' }
                            onClick={ () => handleTagSelection('Breakfast Good') }
                        >
                            Breakfast Goods
                        </Button>
                    </HStack>
                ) }
                { isMobile && (
                    <Menu>
                        <MenuButton as={ Button } rightIcon={ <ChevronDownIcon /> }>
                            { selectedTag ? selectedTag : 'Filter' }
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={ () => handleTagSelection(null) }>All</MenuItem>
                            <MenuItem onClick={ () => handleTagSelection('Donut Box') }>Donut Box</MenuItem>
                            <MenuItem onClick={ () => handleTagSelection('Specialty Item') }>Specialty Item</MenuItem>
                            <MenuItem onClick={ () => handleTagSelection('Sausage Roll') }>Sausage Roll</MenuItem>
                            <MenuItem onClick={ () => handleTagSelection('Breakfast Good') }>Breakfast Good</MenuItem>
                            { selectedTag && (
                                <MenuItem onClick={ () => handleTagSelection(null) }>
                                    Clear Filter
                                </MenuItem>
                            ) }
                        </MenuList>
                    </Menu>
                ) }
                <Flex direction="row" flexWrap="wrap" justify="center">
                    { items
                        .filter((item) => selectedTag === null || item.tag === selectedTag)
                        .map((item, index) => (
                            <Box key={ index } p={ 2 } w={ { base: '100%', md: '50%', lg: '33.33%' } }>
                                {/* <ProductItem item={ item } selectItem={ selectItem } addToCart={ addToCart } /> */ }
                                <ProductItem item={ item } />
                            </Box>
                        )) }
                </Flex>
            </Box>
            {/* <Cart
                isOpen={ isCartOpen }
                onClose={ toggleCart }
                cartItems={ cartItems }
            removeFromCart={ removeFromCart }
            updateCartItemQuantity={ updateCartItemQuantity }
            /> */}
        </>
    );
}

export default Gallery;