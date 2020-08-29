// Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import { Button } from '../components/Button';

export const HomePage: FC = () => (
  <div>
    <Link to="/hello">
      <Button isBlack>
        Жми!
      </Button>
    </Link>
  </div>
);
