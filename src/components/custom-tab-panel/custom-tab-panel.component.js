import React from 'react';
import PropTypes from 'prop-types';

import { TabPanelContainer } from './custom-tab-panel.styled';

import './custom-tab-panel.styles.css';

const CustomTabPanel = ({ title, children, ...props }) => {
    return (
        <TabPanelContainer {...props} content={children} className='tab-panel'>{title}</TabPanelContainer>
    )
};

CustomTabPanel.propTypes = {
    'data-key': PropTypes.string.isRequired,
    'title': PropTypes.string.isRequired
};

export default CustomTabPanel;