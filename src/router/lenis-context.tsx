import { ReactNode, createContext, useContext, useEffect, useRef } from 'react';

import Lenis from '@studio-freight/lenis';

type LenisContextType = React.MutableRefObject<Lenis | null>;

const LenisContext = createContext<LenisContextType | null>(null);

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
};

export const useLenis = (): LenisContextType | null => useContext(LenisContext);
