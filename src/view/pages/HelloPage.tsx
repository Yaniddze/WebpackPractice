// Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useObserver } from 'mobx-react';

// VM
import { useHelloVM } from '../../viewModel/useHelloVM';

// Components
import { Button } from '../components/Button';

export const HelloPage: FC = () => {
  const { doRequest, data } = useHelloVM();

  const btnClickHandler = () => {
    doRequest(`${data.info} (new info)`);
  };

  return useObserver(() => (
    <div>
      Нажми на кнопку: будет круто!
      <div>
        <Button isBlack={false} onClick={btnClickHandler}>
          Жми!
        </Button>
      </div>
      <div>
        {data.info}
      </div>
      <Link to="/home">
        <Button isBlack={false}>
          Назад
        </Button>
      </Link>
    </div>
  ));
};
