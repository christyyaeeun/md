import React from 'react';
import { Box, Text, Flex, Spacer, Select, Divider } from '@chakra-ui/react';

const CartItem = ({ item, handleQuantityChange, removeFromCart }) => {
    return (
        <Box key={ item.id }>
            <Text fontWeight="bold">{ item.title }</Text>
            <Flex direction="row">
                <Text>Quantity</Text>
                <Spacer />
                <Select
                    width="75px"
                    borderRadius="lg"
                    variant="filled"
                    size="sm"
                    value={ item.quantity }
                    onChange={ (event) => handleQuantityChange(item, event) }
                >
                    { [ ...Array(21).keys() ].map((num) => (
                        <option key={ num } value={ num }>
                            { num }
                        </option>
                    )) }
                </Select>
            </Flex>
            <Text>Price: { item.formattedPrice }</Text>
            <Divider />
        </Box>
    );
};

export default CartItem;
