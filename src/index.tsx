import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

type ButtonPropTypes = {
  isBlack: boolean;
}

const Button = styled.button<ButtonPropTypes>`
  background-color: ${props => props.isBlack? 'black': 'red'};
`;

const Wrapper = styled.div`
  margin: 10px;
`;


ReactDOM.render(
  <div>
    <Wrapper>
      <Button isBlack>
        Cool
      </Button>
      <Button isBlack={false}>
        Cool
      </Button>
    </Wrapper>
  </div>,
  document.getElementById('root')
);
