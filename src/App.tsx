import React, { FC } from 'react';
import styled from 'styled-components';

type ButtonPropTypes = {
  isBlack: boolean;
}

const Button = styled.button<ButtonPropTypes>`
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

const Wrapper = styled.div`
  margin: 10px;
`;

export const App: FC = () => (
  <Wrapper>
    <Button isBlack>
      Cool text
    </Button>
    <Button isBlack={false}>
      Not cool text
    </Button>
  </Wrapper>
);
