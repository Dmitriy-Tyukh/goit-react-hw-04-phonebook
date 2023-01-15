import styled from '@emotion/styled';

export const Input = styled.input`
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


export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #4a4848;
`;