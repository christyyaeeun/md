import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Text,
} from '@chakra-ui/react';
import CartItem from './CartItem';

const Cart = ({ isOpen, onClose, cartItems, removeFromCart, updateCartItemQuantity }) => {
    const totalPrice = cartItems.reduce(
        (total, item) => total + parseFloat(item.formattedPrice.slice(1)) * item.quantity,
        0
    );

    const handleQuantityChange = (item, event) => {
        const newQuantity = parseInt(event.target.value);
        updateCartItemQuantity(item, newQuantity);
    };

    return (
        <Drawer isOpen={ isOpen } placement="right" onClose={ onClose } size="md">
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your Cart</DrawerHeader>

                    <DrawerBody>
                        { cartItems.length === 0 ? (
                            <Text>No items in cart</Text>
                        ) : (
                            <VStack spacing={ 4 } align="stretch">
                                { cartItems.map((item) => (
                                    <CartItem
                                        key={ item.id }
                                        item={ item }
                                        handleQuantityChange={ handleQuantityChange }
                                        removeFromCart={ removeFromCart }
                                    />
                                )) }
                            </VStack>
                        ) }
                    </DrawerBody>
                    <DrawerFooter>
                        <Text>Total: ${ totalPrice.toFixed(2) }</Text>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
};

export default Cart;
