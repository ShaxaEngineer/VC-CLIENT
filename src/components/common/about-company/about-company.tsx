import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { DIVIDER } from '@/assets';
import { AnimationGsap, AnimationGsapText } from '@/components';

export const AboutCompany = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-md:gap-6">
        <div>
          <h4 className="text-dark-blue text-2xl !font-extrabold uppercase max-md:text-xl">
            {t('Work by professions')}
          </h4>
          <AnimationGsapText
            className={clsx('mt-6 text-base text-gray-400 max-md:mt-4 max-md:text-sm')}
          >
            {t(
              'We are not just a company that helps people find jobs — we are a catalyst for transformation.',
            )}
          </AnimationGsapText>
          <AnimationGsapText
            className={clsx('mt-6 text-base text-gray-400 max-md:mt-4 max-md:text-sm')}
          >
            {t(
              'In a world where finding the right talent or the right job can feel overwhelming, we step in as a trusted partner to make the journey easier, faster, and more human. Our approach is built on real understanding — of industries, of people, and of potential.',
            )}
          </AnimationGsapText>

          <AnimationGsapText
            className={clsx('mt-6 text-base text-gray-400 max-md:mt-4 max-md:text-sm')}
          >
            {t(
              'We believe that behind every successful business is the right team, and behind every thriving career is the right opportunity. That’s why we focus on creating meaningful connections — not just filling positions. Every profile, every resume, and every vacancy is a chance to create something greater.',
            )}
          </AnimationGsapText>
          <AnimationGsapText
            className={clsx('mt-6 text-base text-gray-400 max-md:mt-4 max-md:text-sm')}
          >
            {t(
              'With modern technology, deep market insight, and a human-centered philosophy, we bring together job seekers and employers in a way that creates real value.',
            )}
          </AnimationGsapText>
          <AnimationGsapText
            className={clsx('mt-6 text-base text-gray-400 max-md:mt-4 max-md:text-sm')}
          >
            {t(
              'Whether you’re an individual chasing your next big step or a business searching for your next key player — we’re here to help you grow, succeed, and move forward.',
            )}
          </AnimationGsapText>
        </div>
        <div className="grid grid-cols-2 items-stretch gap-6 max-sm:grid-cols-1 max-sm:gap-4">
          <AnimationGsap className="bg-border/40 col-span-2 grid grid-cols-2 gap-6 rounded-xl p-5 max-md:p-3 max-sm:col-span-1 max-sm:grid-cols-1">
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="flex flex-col items-start justify-start gap-3">
                <p className="text-blue text-4xl !font-extrabold max-md:text-2xl">25+</p>
                <p className="text-dark-blue text-sm !font-bold uppercase">
                  {t('Partner companies')}
                </p>
              </div>
              <p className="text-sm text-gray-400 max-md:text-sm">
                {t('Libero ante facilisis bibendum aliquet fames velit egestas eleifend sit')}
              </p>
            </div>
            <div className="h-[14rem] w-full overflow-hidden rounded-xl max-md:h-[10rem]">
              <img
                src={DIVIDER}
                className="h-full w-full object-cover object-center"
                alt="DIVIDER"
                loading="lazy"
              />
            </div>
          </AnimationGsap>
          <AnimationGsap className="bg-border/40 rounded-xl p-5 max-md:p-3">
            <div className="flex h-full flex-col justify-between gap-14 max-sm:gap-8">
              <div className="flex flex-col items-start justify-start gap-3">
                <p className="text-blue text-4xl !font-extrabold max-md:text-2xl">100+</p>
                <p className="text-dark-blue text-sm !font-bold uppercase">{t('Open vacansy')}</p>
              </div>
              <p className="text-sm text-gray-400 max-md:text-sm">
                {t('Libero ante facilisis bibendum aliquet fames velit egestas eleifend sit')}
              </p>
            </div>
          </AnimationGsap>
          <AnimationGsap className="bg-border/40 rounded-xl p-5 max-md:p-3">
            <div className="flex h-full flex-col justify-between gap-14 max-sm:gap-8">
              <div className="flex flex-col items-start justify-start gap-3">
                <p className="text-blue text-4xl !font-extrabold max-md:text-2xl">300+</p>
                <p className="text-dark-blue text-sm !font-bold uppercase">
                  {t('Regional attendees')}
                </p>
              </div>
              <p className="text-sm text-gray-400 max-md:text-sm">
                {t('Libero ante facilisis bibendum aliquet fames velit egestas eleifend sit')}
              </p>
            </div>
          </AnimationGsap>
        </div>
      </div>
    </>
  );
};
