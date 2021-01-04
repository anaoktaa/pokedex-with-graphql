import React from 'react';

import { TextFieldInput, HelperTxt, TextFieldContainer } from './text-field.styled';

const TextField = ({ error, helperText, labelText, ...props }) => {
   return  (
    <TextFieldContainer>
        <TextFieldInput error={error} {...props} />
        <HelperTxt error={error}>{helperText}</HelperTxt>
    </TextFieldContainer>
   )
}

export default TextField;