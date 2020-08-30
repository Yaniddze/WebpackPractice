// Core
import { observable } from 'mobx';

// Model
import { doSomeRequest } from '../model';

type ReturnType = {
  doRequest: (request: string) => void;
  data: Data;
};

type Data = {
  info: string;
};

const storage = observable({
  info: '',
});

export const useHelloVM = (): ReturnType => {
  const doRequest = (request: string) => {
    doSomeRequest(request).then((result) => {
      storage.info = result;
    });
  };

  return {
    data: storage,
    doRequest,
  };
};
