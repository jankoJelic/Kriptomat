import {useEffect} from 'react';

const useAbortEffect = (asyncFunction = () => {}, dependencies = []) => {
  useEffect(() => {
    let abortController = new AbortController();

    if (!abortController.signal.aborted) {
      asyncFunction();
    }

    return () => {
      abortController.abort();
    };
  }, [asyncFunction, ...dependencies]);
};

export default useAbortEffect;
