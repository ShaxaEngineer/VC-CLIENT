import { FC } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ARROW, HAND, HANDSHAKE, LIGHTNING, PEOPLE } from '@/assets';
import { AnimationGsap, AnimationGsapText } from '@/components';
import { ROUTES } from '@/constants';

interface PartnershipsProps {
  apron?: boolean;
}

export const Partnerships: FC<PartnershipsProps> = ({ apron }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue relative rounded-t-[1.25rem] py-[5rem] max-md:py-[2rem]">
        <div className={clsx('container mx-auto')}>
          <div className="grid grid-cols-7 gap-16 max-lg:grid-cols-1 max-md:gap-6">
            {/* text */}
            <div className="col-span-3 max-lg:col-span-1">
              <h3 className="max-w-[25rem] text-3xl !font-bold text-white max-md:text-xl">
                {t('Looking for Great Employees? Let’s Work Together')}
              </h3>
              <AnimationGsapText
                className={clsx(
                  'max-w-[25rem] text-base text-white/50 max-md:text-sm',
                  'mt-6 max-md:mt-4',
                )}
              >
                {t(
                  'We have talented candidates ready to join your team. Post your job with us and reach the right people faster. It’s simple, smart, and effective.',
                )}
              </AnimationGsapText>
              <button
                onClick={() => navigate(ROUTES.findTalent)}
                className={clsx(
                  'text-dark-blue group flex items-center justify-center gap-4 rounded-[2.75rem] bg-white px-6 py-3 text-base !font-medium',
                  'mt-10 max-md:mt-4',
                )}
              >
                {t('Hire with Us')}
                <ARROW className="size-3 rotate-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-45" />
              </button>
            </div>
            <div className="col-span-4 grid grid-cols-7 gap-2 max-lg:col-span-1 max-md:grid-cols-1">
              <AnimationGsap className="col-span-4 max-md:col-span-1">
                <div className="rounded-2xl bg-white pb-10">
                  <div className="p-5">
                    <img loading="lazy" src={HANDSHAKE} alt="handshake" />
                    <p className="text-dark-blue mt-4 text-base !font-bold">
                      {t('Smart Partnerships')}
                    </p>
                    <p className="text-dark-blue mt-3 max-w-[15rem] text-sm">
                      {t('Flexible solutions that fit your company’s hiring needs')}
                    </p>
                  </div>
                  <img
                    loading="lazy"
                    src={HAND}
                    alt="handshake"
                    className="h-max w-full object-contain object-center"
                  />
                </div>
              </AnimationGsap>
              <div className="col-span-3 grid grid-cols-1 gap-2 max-md:col-span-1">
                <AnimationGsap className="flex flex-col items-start justify-between rounded-2xl bg-white/[12%] p-5">
                  <img loading="lazy" src={PEOPLE} alt="PEOPLE" />
                  <div className="mt-6">
                    <p className="text-base !font-bold text-white">{t('Qualified Candidates')}</p>
                    <p className="mt-3 max-w-[15rem] text-sm text-white">
                      {t('Flexible solutions that fit your company’s hiring needs')}
                    </p>
                  </div>
                </AnimationGsap>
                <AnimationGsap className="flex flex-col items-start justify-between rounded-2xl bg-white/[12%] p-5">
                  <img loading="lazy" src={LIGHTNING} alt="LIGHTNING" />
                  <div className="mt-6">
                    <p className="text-base !font-bold text-white">{t('Fast Hiring')}</p>
                    <p className="mt-3 max-w-[15rem] text-sm text-white">
                      {t('Speed up your recruitment process with ease')}
                    </p>
                  </div>
                </AnimationGsap>
              </div>
            </div>
          </div>
        </div>
        {apron && <div className="bg-blue absolute right-0 -bottom-5 z-[-1] h-5 w-full"></div>}
      </div>
    </>
  );
};
