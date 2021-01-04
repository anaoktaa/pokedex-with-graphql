import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './loading.styled';

const Loading = () => {

    return (
        <SpinnerOverlay data-testid='loading-progress'>
            <SpinnerContainer/>
        </SpinnerOverlay>
    )
}

export default Loading;