import { getMaxMediaQuery, getMinMediaQuery } from '@src/utils/breakpoints';
import { useEffect, useState } from 'react';

export type MediaQueryType = 'up' | 'down';
export type MediaQueryVariables = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const getMediaQuery = (type: MediaQueryType, variable: MediaQueryVariables) => {
  if (type === 'up') {
    return getMinMediaQuery(variable);
  }
  return getMaxMediaQuery(variable);
};

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches]);

  return matches;
};

export default useMediaQuery;
