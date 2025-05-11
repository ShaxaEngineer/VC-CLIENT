import { useState } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { ARROW, FIND, HANDSHAKE2, LIGHTNING2, SMART } from '@/assets';
import {
  AnimationGsap,
  AnimationGsapText,
  Breadcrumbs,
  LetsTalk,
  TalentEmployee,
} from '@/components';

export const FindTalent = () => {
  const { t } = useTranslation();
  // modal
  const [parentModal, setParentModal] = useState(false);

  return (
    <>
      <div className={clsx('container mx-auto')}>
        <Breadcrumbs menu={'About us'} />
      </div>
      <div className="my-5 max-md:my-4">
        <div className={clsx('container mx-auto')}>
          <div className="grid grid-cols-2 items-center gap-4 max-lg:grid-cols-1">
            <div className="flex flex-col items-start justify-start gap-6 max-lg:order-2 max-md:gap-4">
              <h4 className="text-dark-blue max-w-[29rem] text-2xl !font-extrabold uppercase max-md:text-xl">
                {t('Looking for Great Employees? Let’s Work Together')}
              </h4>
              <AnimationGsapText className="max-w-[32rem] text-sm text-gray-400">
                {t(
                  'We have talented candidates ready to join your team. Post your job with us and reach the right people faster. It’s simple, smart, and effective.',
                )}
              </AnimationGsapText>
              <button
                onClick={() => setParentModal(true)}
                className={clsx(
                  'group bg-blue flex items-center justify-center gap-4 rounded-[2.75rem] px-6 py-3 text-base !font-medium text-white',
                )}
              >
                {t('Hire with Us')}
                <ARROW className="size-3 rotate-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-45" />
              </button>
            </div>
            <div className="h-[24rem] w-full overflow-hidden rounded-2xl max-lg:order-1 max-md:h-[14rem]">
              <img
                src={FIND}
                alt="find worker"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 max-md:my-10">
        <div className={clsx('container mx-auto')}>
          <h3 className="text-dark-blue text-2xl !font-extrabold uppercase max-md:text-xl">
            {t('Why Choose Us?')}
          </h3>
          <AnimationGsapText
            className={clsx('text-dark-gray mt-6 text-base max-md:mt-4 max-md:text-sm')}
          >
            {t(
              'Hiring the right people can make or break a business — and we’re here to make sure you get it right. We go beyond simply collecting resumes. Our team works closely with employers to understand their specific needs and company culture. We then match the with carefully vetted, skilled, and motivated candidates who are ready to contribute from day one.',
            )}
          </AnimationGsapText>
          <AnimationGsapText
            className={clsx('text-dark-gray mt-6 text-base max-md:mt-4 max-md:text-sm')}
          >
            {t(
              'Whether you’re a startup looking to scale quickly or an established business in search of top-tier talent, our personalized and streamlined recruitment process helps you save time, reduce hiring costs, and find the right people faster. We don’t just fill positions — we help build strong teams that drive success.',
            )}
          </AnimationGsapText>
          <AnimationGsapText
            className={clsx('text-dark-gray mt-6 text-base max-md:mt-4 max-md:text-sm')}
          >
            {t('Let us be your trusted hiring partner.')}
          </AnimationGsapText>
          <div className="mt-8 grid grid-cols-3 gap-5 max-md:grid-cols-1">
            <AnimationGsap className="bg-border/40 rounded-xl p-5 max-md:p-3">
              <div className="flex h-full flex-col justify-between gap-6 max-sm:gap-4">
                <p className="text-blue">
                  <HANDSHAKE2 className="size-8 object-contain object-center max-md:size-6" />
                </p>
                <div className="flex flex-col items-start justify-start gap-3">
                  <p className="text-dark-blue text-sm !font-bold uppercase">
                    {t('Smart Partnerships')}
                  </p>
                  <p className="text-dark-gray text-sm max-md:text-sm">
                    {t('Flexible solutions that fit your company’s hiring needs')}
                  </p>
                </div>
              </div>
            </AnimationGsap>
            <AnimationGsap className="bg-border/40 rounded-xl p-5 max-md:p-3">
              <div className="flex h-full flex-col justify-between gap-6 max-sm:gap-4">
                <p className="text-blue">
                  <SMART className="size-8 object-contain object-center max-md:size-6" />
                </p>
                <div className="flex flex-col items-start justify-start gap-3">
                  <p className="text-dark-blue text-sm !font-bold uppercase">
                    {t('Qualified Candidates')}
                  </p>
                  <p className="text-dark-gray text-sm max-md:text-sm">
                    {t('You get access to ready-to-hire professionals')}
                  </p>
                </div>
              </div>
            </AnimationGsap>
            <AnimationGsap className="bg-border/40 rounded-xl p-5 max-md:p-3">
              <div className="flex h-full flex-col justify-between gap-6 max-sm:gap-4">
                <p className="text-blue">
                  <LIGHTNING2 className="size-8 object-contain object-center max-md:size-6" />
                </p>
                <div className="flex flex-col items-start justify-start gap-3">
                  <p className="text-dark-blue text-sm !font-bold uppercase">{t('Fast Hiring')}</p>
                  <p className="text-dark-gray text-sm max-md:text-sm">
                    {t('Speed up your recruitment process with ease')}
                  </p>
                </div>
              </div>
            </AnimationGsap>
          </div>
        </div>
      </div>
      <TalentEmployee />
      <LetsTalk openModal={parentModal} setOpenModal={setParentModal} />
    </>
  );
};
