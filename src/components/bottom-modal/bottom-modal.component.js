import React from 'react';

import './bottom-modal.styles.css';

const BottomModal = ({ show, children }) => {
    return (
        <div className={`bottom-modal-container ${show? 'show-modal' : '' }`}>
            <div className='pokemon-save-name-container'>
                {children}
            </div>
        </div>
    )
}

export default BottomModal;