import React from 'react';

import { ProgressContainer, ProgressBarValue, Container } from './progress.styles';


const Progress = ({ value, color, name }) => {
    return (
        <div style={{marginBottom: '18px'}}>
            <Container>
                <p>{name}</p>
                <p>{value}%</p>
            </Container>
            <ProgressContainer>
                <ProgressBarValue bgColor={color} valueWidth={value}>
                </ProgressBarValue>
            </ProgressContainer>
        </div>
    )
}

export default Progress;