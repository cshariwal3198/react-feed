import styled from "styled-components";

export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    gap: 20px; height: 75%;
    width: 400px;
    padding: 20px;
    background-color: aliceblue;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0; right: 0;
    justify-content: center;
    align-items: center;
    width: 100%; height: 100%;
`;

export const ItemWrapper = styled.div<{ $isSM: boolean }>`
    display: grid;
    grid-template-columns: auto;
    column-gap: 15px; row-gap: 7px;
    justify-content: start;
    align-items: center;
    width: 100%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    min-width: 400px;
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
    align-items: center;
`;

export const ErrorText = styled.span`
    font-size: 12px;
    color: #da3838;
`;

export const Label = styled.label`
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Input = styled.input`
    text-align: center;
    padding: 4px;
    height: 35px;
    box-sizing: border-box;
    border: 1px solid #46464667;
    background: none;
    min-width: 380px;
    border-top: 0; border-left: 0px; border-right: 0px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    &:focus{
        outline: none;
    }
`;

export const HeaderText = styled.h2`
    font-size: 28px;
    font-weight: 500;
    text-align: center;
    color: #0717ff;
    margin: 0;
`;

export const Footer = styled.div`
    display: inline-flex;
    align-items: center;
    column-gap: 5px;
    padding: 10px;
`;

export const StyledButtonLink = styled.h6`
    border: none;
    font-size: 16px;
    background-color: none;
    color: #4160ec;
    cursor: pointer;
`;
