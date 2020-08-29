import React, { FC } from 'react';

// Components
import { Wrapper } from './view/components/Wrapper';

// Pages
import { HelloPage } from './view/pages/HelloPage';

export const App: FC = () => (
  <Wrapper>
    <HelloPage />
  </Wrapper>
);
