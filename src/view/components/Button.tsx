import styled from 'styled-components';

type ButtonPropTypes = {
  isBlack: boolean;
}

export const Button = styled.button<ButtonPropTypes>`
  ${({ isBlack }: ButtonPropTypes) => {
    if (isBlack) {
      return `
        background-color: black;
        color: white;
      `;
    }
    return `
      background-color: white;
      color: blue;
    `;
  }};
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid black;
  
  &:hover {
    cursor: pointer;
  }
`;
