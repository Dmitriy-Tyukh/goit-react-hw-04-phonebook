import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
outline: 2px solid black;
display: flex;
flex-direction: column;
justify-content: center;
height:180px;
width:85%;
padding: 16px;
border-radius: 16px;
`;

export const FieldStyled = styled(Field)`
  margin-left: 16px;
  border-radius: 16px;
  background-color: #d9d9d9;
  margin-bottom: 16px;
  padding: 4px;
  border: none;
  &:hover {
    color: black;
  }
  &:focus {
    background-color: #fff;
    box-shadow: -2px 4px 26px 10px rgba(235, 95, 95, 0.75);
  }
`;

export const ErrorMessagetyled = styled(ErrorMessage)`
  font-size: 12px;
  margin-bottom: 16px;
  color: red;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #4a4848;
`;

export const ButtonSubmit = styled.button`
  width: 128px;
  border-radius: 16px;
  background-color: blue;
  color: #fff;
`;