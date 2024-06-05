import styled from "styled-components";

export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const ItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 150px 300px;
    gap: 15px;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
`;

export const SubmitButton = styled.input.attrs(() => ({ type: 'submit' }))`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
`;

export const ErrorText = styled.span`
    font-size: 12px;
    color: #da3838;
`;

export const Label = styled.label`
    font-size: 16px;
    font-weight: 500;
`;

export const Input = styled.input`
    text-align: center;
    padding: 4px;
    width: auto;
    height: 35px;
    box-sizing: border-box;
    border-radius: 4px;
`;

export const HeaderText = styled.h2`
    font-size: 22px;
    font-weight: 500;
    color: linear-gradient(0deg, rgba(255, 0, 0, 1) 0%, rgba(7, 0, 211, 1) 100%);
`;