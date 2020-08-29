import React, { FC } from 'react';
import styled from 'styled-components';

type ButtonPropTypes = {
  isBlack: boolean;
}

const Button = styled.button<ButtonPropTypes>`
  background-color: ${(props) => (props.isBlack ? 'black' : 'red')};
`;

const Wrapper = styled.div`
  margin: 10px;
`;

export const App: FC = () => (
  <div>
    Application!
  </div>
);
