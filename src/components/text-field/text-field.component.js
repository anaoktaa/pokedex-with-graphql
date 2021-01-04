import React from 'react';

import { TextFieldInput, HelperTxt, LabelText } from './text-field.styled';

const TextField = ({ error, helperText, labelText, ...props }) => {
   return  (
    <>
        <LabelText id='main-label'>{labelText}</LabelText>
        <TextFieldInput aria-labelledby='main-label' error={error} {...props} />
        <HelperTxt error={error}>{helperText}</HelperTxt>
    </>
   )
}

export default TextField;