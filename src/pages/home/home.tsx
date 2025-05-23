import clsx from 'clsx';

import {
  AboutCompany,
  Frequently,
  Opportunity,
  Partners,
  Partnerships,
  Professions,
} from '@/components';

export const Home = () => {
  console.log('PWR');

  return (
    <>
      <div className={clsx('container mx-auto')}>
        <Opportunity />
        <AboutCompany />
        <Professions />
        <Partners />
      </div>
      <Partnerships apron />
      <Frequently apron />
    </>
  );
};
