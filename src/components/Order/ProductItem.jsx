import React, { useState, useEffect } from 'react';
import { Box, Badge } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useImageDimensions } from './useImageDimensions';

const ProductItem = ({ item }) => {
    const [ imageLoaded, setImageLoaded ] = useState(false);
    const dimensions = useImageDimensions(item.imageUrl);

    useEffect(() => {
        setImageLoaded(true);
    }, [ dimensions ]);
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
            >
                { imageLoaded && (
                    <img
                        src={ item.imageUrl }
                        alt={ item.imageAlt }
                        style={ { objectFit: 'cover', maxHeight: '250px', width: '100%' } }
                        loading="lazy"
                        width={ dimensions.width } // Set width attribute with actual width
                        height={ dimensions.height } // Set height attribute with actual height
                    />
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
            </Box>
        </motion.div>
    );
}

export default ProductItem;