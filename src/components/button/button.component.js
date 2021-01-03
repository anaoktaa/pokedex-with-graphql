import React from 'react';

import { CustomButton } from './button.styled';

const Button = ({ bgColor, bgColorHover, children, ...props }) => {
    return (
        <CustomButton bgColorHover={bgColorHover} bgColor={bgColor} {...props}>
            {children}
        </CustomButton>
    )
};

export default Button;
