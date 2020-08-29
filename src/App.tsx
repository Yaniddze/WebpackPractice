import React, { FC } from 'react';

// Components
import { Button } from './view/components/Button';
import { Wrapper } from './view/components/Wrapper';

export const App: FC = () => (
  <Wrapper>
    <Button isBlack>
      Cool text
    </Button>
    <Button isBlack={false}>
      Not cool text
    </Button>
    <Button isBlack>
      Third button
    </Button>
  </Wrapper>
);
