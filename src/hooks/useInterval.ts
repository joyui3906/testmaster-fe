import { useEffect, useRef, useState } from 'react';

const useInterval = (callback: any, delayMillis: number | null) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  function tick() {
    savedCallback.current();
  }
  useEffect(() => {
    if (!delayMillis && delayMillis !== 0) {
      return undefined;
    }
    const id = setInterval(tick, delayMillis);
    return () => clearInterval(id);
  }, [delayMillis]);
};

export default useInterval;
