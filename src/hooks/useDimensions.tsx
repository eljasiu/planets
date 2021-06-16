import { useState, useLayoutEffect } from 'react';

interface Dimensions {
    width: number,
    height: number
}

function getDimensions(): Dimensions{

    const { innerWidth: width, innerHeight: height } = window;

    return { width, height };
}

export default function useDimensions(){
    const [dimensions, setDimensions] = useState<Dimensions>(getDimensions());

    const handleResize = () => {
        setDimensions(getDimensions());
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return dimensions;
}