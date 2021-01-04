import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './loading.styled';

const Loading = () => {

    return (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    )
}

export default Loading;