import React from 'react';

import { TextFieldInput, HelperTxt, LabelText } from './text-field.styled';

const TextField = ({ error, helperText, labelText, ...props }) => {
   return  (
    <>
        <LabelText>{labelText}</LabelText>
        <TextFieldInput error={error} {...props} />
        <HelperTxt error={error}>{helperText}</HelperTxt>
    </>
   )
}

export default TextField;