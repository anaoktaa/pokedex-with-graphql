import React, { useState, useEffect } from "react";

const withWindowResize = Component => {
    const WrappedComponent = (props) => {
        const findSize = () => {
            return {
                width: window.innerWidth,
            } 
        }    
        const [ actualSize, setActualSize ] = useState(findSize());

        useEffect(() => {
            const resizeUpdate = () => {
                const currentSize = findSize();
         
                if (currentSize !== actualSize) {

                    setActualSize(currentSize);
                }
               
            }
    
            window.addEventListener('resize', resizeUpdate);
        
            return () => window.removeEventListener('resize', resizeUpdate);
        
        }, [actualSize]);

        return (
            <Component actualSize={actualSize} {...props} />
        )
    }
  return WrappedComponent;
};

export default withWindowResize;