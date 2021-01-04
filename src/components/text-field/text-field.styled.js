import styled from '@emotion/styled';

export const TextFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

export const TextFieldInput = styled.input`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 6px 11px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid ${({ error }) => error? 'red' : '#d9d9d9'};
    border-radius: 5px;
    transition: all 0.3s;

    &:focus {
        outline: none;
        box-shadow: ${({ error }) => error? 'none' : '0 0 5px  #929292'};
        border: 1px solid ${({ error }) => error? 'red' : '#d9d9d9'}; 
    }
`;

export const LabelText = styled.label`
    font-size: 12px;
    color: ${({ error }) => error? 'red' : '#4c4c4c'};
    margin: 0 0 5px;
    padding-left: 3px;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
`;

export const HelperTxt = styled.label`
    font-size: 12px;
    color: ${({ error }) => error? 'red' : '#4c4c4c'};
    margin: 5px 0 0;
    padding-left: 3px;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
`;