// Core
import { useState } from 'react';

// Model
import { doSomeRequest } from '../model';

type ReturnType = {
  doRequest: () => void;
  data: string;
};

export const useHelloVM = (): ReturnType => {
  const [data, setData] = useState('');

  const doRequest = () => {
    doSomeRequest().then((result) => setData(result));
  };

  return {
    data,
    doRequest,
  };
};
