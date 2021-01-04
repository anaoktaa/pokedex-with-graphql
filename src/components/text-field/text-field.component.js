import React from 'react';

import { TextFieldInput, LabelText } from './text-field.styled';

const TextField = ({ error, helperText, labelText, ...props }) => {
   return  (
    <>
        <LabelText error={error} id='main-label'>{labelText}</LabelText>
        <TextFieldInput aria-labelledby='main-label' error={error} {...props} />
        <LabelText error={error}>{helperText}</LabelText>
    </>
   )
}

export default TextField;