import { useState, useEffect } from 'react';

export function useImageDimensions(src) {
    const [ dimensions, setDimensions ] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setDimensions({ width: img.width, height: img.height });
        };
        img.src = src;
    }, [ src ]);

    return dimensions;
}
