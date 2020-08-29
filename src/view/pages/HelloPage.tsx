// Core
import React, { FC } from 'react';

// VM
import { useHelloVM } from '../../viewModel/useHelloVM';

// Components
import { Button } from '../components/Button';

export const HelloPage: FC = () => {
  const { doRequest, data } = useHelloVM();

  const btnClickHandler = () => {
    doRequest();
  };

  return (
    <div>
      Нажми на кнопку: будет круто!
      <div>
        <Button isBlack={false} onClick={btnClickHandler}>
          Жми!
        </Button>
      </div>
      <div>
        {data}
      </div>
    </div>
  );
};
