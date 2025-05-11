/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Routes } from 'react-router-dom';

import { Footer, Header } from '@/components';

import { LenisProvider } from './lenis-context';
import { routsData } from './routsData';
import { ScrollToTop } from './scroll-to-top';

export const Routs = () => {
  return (
    <>
      <Header />
      <LenisProvider>
        <ScrollToTop />
        <Routes />
      </LenisProvider>
      <Routes>
        {routsData?.map((item: any) => {
          if (item.child) {
            return item.child?.map((child: any) => {
              return <Route key={child.id} path={child.path} element={child.page} />;
            });
          } else return <Route key={item.id} path={item.path} element={item.page} />;
        })}
      </Routes>
      <Footer />
    </>
  );
};
