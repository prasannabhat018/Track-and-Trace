import React from 'react';
//import './custom-button.styles.scss';

import { CustomButtonContainer } from './custom-button.styles';

function CustomButton({ children, ...props }) {
    return (
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    );
}

export default CustomButton;
