import { useState } from 'react';

import clsx from 'clsx';
import AnimateHeight from 'react-animate-height';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Breadcrumbs, FewInformation, Success, WorkInUk, YourPosition } from '@/components';
import { ROUTES } from '@/constants';

type IActiveComp = 1 | 2 | 3 | 4;

export const JobApplication = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeComp, setactiveComp] = useState<IActiveComp>(1);
  const isReturnActiveComp = (comp: IActiveComp) => {
    return activeComp === comp ? 'auto' : 0;
  };
  const isSuccesBack = () => {
    navigate(ROUTES.vacansies);
  };

  return (
    <>
      <div className="bg-gray relative py-5 max-md:bg-white max-md:py-4">
        <div className={clsx('container mx-auto')}>
          <Breadcrumbs menu={t('Job application')} />
        </div>
        <div className="my-5 max-md:my-4">
          <div className={clsx('flex items-center justify-center')}>
            <div className="border-border relative w-[38rem] overflow-hidden rounded-[1.25rem] border bg-white max-md:border-white">
              <div className="absolute top-0 left-0 h-1 w-full">
                <div
                  className={clsx(
                    activeComp == 1 && 'w-1/4',
                    activeComp == 2 && 'w-1/2',
                    activeComp == 3 && 'w-3/4',
                    activeComp == 4 && 'w-full',
                    'bg-blue h-full transition-all duration-300',
                  )}
                ></div>
              </div>
              <AnimateHeight duration={500} height={isReturnActiveComp(4)}>
                <Success back={isSuccesBack} />
              </AnimateHeight>
              <AnimateHeight duration={500} height={isReturnActiveComp(3)}>
                <FewInformation setactiveComp={setactiveComp} />
              </AnimateHeight>
              <AnimateHeight duration={500} height={isReturnActiveComp(2)}>
                <WorkInUk setactiveComp={setactiveComp} />
              </AnimateHeight>
              <AnimateHeight duration={500} height={isReturnActiveComp(1)}>
                <YourPosition setactiveComp={setactiveComp} />
              </AnimateHeight>
            </div>
          </div>
        </div>
        <div className="bg-gray absolute right-0 -bottom-5 z-[-1] h-5 w-full"></div>
      </div>
    </>
  );
};
