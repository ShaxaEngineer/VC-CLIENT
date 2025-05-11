import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useLenis } from './lenis-context';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenisRef = useLenis();

  useEffect(() => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0);
    }
  }, [pathname]);

  return null;
};
