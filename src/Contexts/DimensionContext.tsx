import { createContext, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export const DimensionContext = createContext<{ 
    dimensions: {
        width: number,
        height: number,
    },
    update: () => void
}>(null);


export default function DimensionContextProvider({ children }) {
    
    const [dimensions, setDimensions] = useState({ width: Dimensions.get("screen").width, height: Dimensions.get("screen").height })

    function update() {
        
    }

    return (
        <DimensionContext.Provider value={{ update, dimensions }}>
            { children }
        </DimensionContext.Provider>
    );
}