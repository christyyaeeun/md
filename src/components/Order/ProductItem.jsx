import React, { useState, useEffect } from 'react';
import { Box, IconButton, Badge, Button } from '@chakra-ui/react';
import { DeleteIcon, AddIcon, SmallAddIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const ProductItem = ({ item, selectItem, addToCart }) => {
    const [ quantity, setQuantity ] = useState(1);
    const [ showIcons, setShowIcons ] = useState(false);
    const [ isButtonClicked, setIsButtonClicked ] = useState(false);

    const handleSelectItem = () => {
        selectItem(item);
        setIsButtonClicked(true);
    };

    const handleAddToCart = () => {
        addToCart({ ...item, quantity });
        setIsButtonClicked(false);
    };

    useEffect(() => {
        if (isButtonClicked) {
            setShowIcons(true);
        }
    }, [ isButtonClicked ]);

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity === 1) {
            setIsButtonClicked(false);
        }
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
    };

    return (
        <motion.div
            transition={ { duration: 1, delay: 0.2 } }
            initial={ { opacity: 0, y: 50 } }
            animate={ { y: 0 } }
            whileInView={ { opacity: 1 } }
        >
            <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                mx="auto"
                position="relative"
                onMouseEnter={ () => setShowIcons(isButtonClicked) }
                onMouseLeave={ () => setShowIcons(false) }
            >

                { !showIcons && !isButtonClicked && (
                    <IconButton
                        bg="black"
                        borderRadius="2xl"
                        icon={
                            <Box size="14px" color="white">
                                <SmallAddIcon boxSize="25px" />
                            </Box>
                        }
                        aria-label="Select item"
                        size="sm"
                        position="absolute"
                        top="2"
                        right="2"
                        onClick={ handleSelectItem }
                    />
                ) }
                <img
                    src={ item.imageUrl }
                    alt={ item.imageAlt }
                    style={ { objectFit: 'cover', maxHeight: '250px', width: '100%' } }
                />

                { (showIcons || isButtonClicked) && (
                    <motion.div
                        initial={ { opacity: 0, x: '100%' } }
                        animate={ { opacity: 1, x: 0 } }
                        transition={ { duration: 0.3 } }
                        style={ {
                            position: 'absolute',
                            top: '2px',
                            right: '2px',
                        } }
                    >
                        <Box display="flex" alignItems="center" bg="black" p="2" boxShadow="sm" width="100px" borderRadius="xl">
                            <IconButton
                                icon={
                                    <Box size="14px" color="white">
                                        <DeleteIcon boxSize="15px" />
                                    </Box>
                                }
                                aria-label="Remove from cart"
                                size="xs"
                                mr="2"
                                bg="black"
                                color="white"
                                onClick={ handleDecrement }
                            />
                            <Box px={ 2 } fontWeight="semibold" fontSize="md" color="white">
                                { quantity }
                            </Box>
                            <IconButton
                                icon={
                                    <Box color="white">
                                        <AddIcon />
                                    </Box>
                                }
                                aria-label="Remove from cart"
                                size="xs"
                                ml="2"
                                bg="black"
                                color="white"
                                onClick={ handleIncrement }
                            />
                        </Box>
                    </motion.div>
                ) }

                <Box p="6">
                    <Box display="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" bg="#048848" color="white">
                            { item.tag }
                        </Badge>
                    </Box>

                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={ 1 }>

                        { item.title }
                    </Box>

                    <Box>
                        { item.formattedPrice }
                        <Box as="span" color="gray.600" fontSize="sm"></Box>
                    </Box>
                </Box>

                { isButtonClicked && (
                    <Button onClick={ handleAddToCart } w="100%">
                        Add to Cart
                    </Button>
                ) }
            </Box>
        </motion.div>
    );
}

export default ProductItem;