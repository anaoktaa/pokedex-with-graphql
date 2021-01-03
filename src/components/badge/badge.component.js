import React from 'react';

import { BadgeContainer } from './badge.styled';

const Badge = ({ type, children, ...props }) => {
    return (
        <BadgeContainer type={type} {...props}>
            {children}
        </BadgeContainer>
    )
}

export default Badge;