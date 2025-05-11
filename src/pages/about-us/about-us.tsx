import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { GROWTH, PEOPLEI, SMART } from '@/assets';
import { AnimationGsap, AnimationGsapText, Breadcrumbs, Team } from '@/components';

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={clsx('container mx-auto')}>
        <Breadcrumbs menu={t('About us')} />
      </div>
      <div className="my-5 max-md:my-4">
        <div className={clsx('bg-blue container mx-auto rounded-[1.25rem] p-5')}>
          <div className="h-[28.75rem] w-full overflow-hidden rounded-2xl">
            <video
              controls
              src="https://cdn.pixabay.com/video/2025/04/27/275052_large.mp4"
              className="h-full w-full object-cover object-center"
            ></video>
          </div>
          <h3 className="mt-6 text-2xl !font-extrabold text-white uppercase max-md:mt-4 max-md:text-xl">
            {t('ABOUT OUR COMPANY')}
          </h3>
          <AnimationGsapText
            className={clsx('mt-6 text-base text-white max-md:mt-4 max-md:text-sm')}
          >
            {t(
              'Professional Workforce Resources provides flexible and reliable staffing solutions for companies across the UK.',
            )}
          </AnimationGsapText>
          <AnimationGsapText
            className={clsx('mt-6 text-base text-white max-md:mt-4 max-md:text-sm')}
          >
            {t(
              'We supply trained and vetted workers for construction sites, hotels, warehouses, events, and cleaning contracts — exactly when and where they’re needed.',
            )}
          </AnimationGsapText>
          <AnimationGsapText
            className={clsx('mt-6 text-base text-white max-md:mt-4 max-md:text-sm')}
          >
            {t(
              'Our job is simple: to help businesses stay fully staffed, compliant, and productive — whether it’s a one-day shift or a long-term team. And for workers, we offer legal job opportunities, and a clear path to career growth.',
            )}
          </AnimationGsapText>
          <AnimationGsapText
            className={clsx('mt-6 text-base text-white max-md:mt-4 max-md:text-sm')}
          >
            {t(
              'We believe the right people can change everything — that’s why we don’t just close vacancies.',
            )}
          </AnimationGsapText>
          <AnimationGsapText
            className={clsx('mt-6 text-base text-white max-md:mt-4 max-md:text-sm')}
          >
            {t(
              'We help build the teams behind great projects, smooth operations, and successful businesses.',
            )}
          </AnimationGsapText>
          <div className="mt-8 grid grid-cols-3 gap-5 max-md:grid-cols-1">
            <AnimationGsap className="rounded-xl border border-white/20 bg-white/15 p-5 backdrop-blur-xl max-md:p-3">
              <div className="flex h-full flex-col justify-between gap-14 max-sm:gap-8">
                <div className="flex flex-col items-start justify-start gap-3">
                  <p className="text-4xl !font-extrabold text-white max-md:text-2xl">100+</p>
                  <p className="text-sm !font-bold text-white uppercase">{t('Open vacancy')}</p>
                </div>
                <p className="text-sm text-white max-md:text-sm">
                  {t('Free from programming experience')}
                </p>
              </div>
            </AnimationGsap>
            <AnimationGsap className="rounded-xl border border-white/20 bg-white/15 p-5 backdrop-blur-xl max-md:p-3">
              <div className="flex h-full flex-col justify-between gap-14 max-sm:gap-8">
                <div className="flex flex-col items-start justify-start gap-3">
                  <p className="text-4xl !font-extrabold text-white max-md:text-2xl">300+</p>
                  <p className="text-sm !font-bold text-white uppercase">
                    {t('Regional attendees')}
                  </p>
                </div>
                <p className="text-sm text-white max-md:text-sm">
                  {t('Free from programming experience')}
                </p>
              </div>
            </AnimationGsap>
            <AnimationGsap className="rounded-xl border border-white/20 bg-white/15 p-5 backdrop-blur-xl max-md:p-3">
              <div className="flex h-full flex-col justify-between gap-14 max-sm:gap-8">
                <div className="flex flex-col items-start justify-start gap-3">
                  <p className="text-4xl !font-extrabold text-white max-md:text-2xl">100+</p>
                  <p className="text-sm !font-bold text-white uppercase">{t('Open vacancy')}</p>
                </div>
                <p className="text-sm text-white max-md:text-sm">
                  {t('Free from programming experience')}
                </p>
              </div>
            </AnimationGsap>
          </div>
        </div>
      </div>
      <div className="my-20 max-md:my-10">
        <div className={clsx('container mx-auto')}>
          <h3 className="text-dark-blue text-2xl !font-extrabold uppercase max-md:text-xl">
            {t('Our mission')}
          </h3>
          <AnimationGsapText
            className={clsx('text-dark-gray mt-6 text-base max-md:mt-4 max-md:text-sm')}
          >
            {t(
              'At the heart of our mission lies a simple but powerful belief: meaningful work can change lives, and the right people can transform businesses. We are committed to creating a space where individuals feel empowered to discover opportunities that align with their skills, passions, and goals — while also enabling companies to find talent that drives real progress.',
            )}
          </AnimationGsapText>
          <AnimationGsapText
            className={clsx('text-dark-gray mt-6 text-base max-md:mt-4 max-md:text-sm')}
          >
            {t(
              "Our goal is to remove the barriers that often slow down or complicate hiring. We believe in making the process human-centered, efficient, and effective. Whether you're a job seeker aiming to grow your career or a business looking to scale with the right team — we're here to connect you in ways that matter.",
            )}
          </AnimationGsapText>
          <div className="mt-8 grid grid-cols-3 gap-5 max-md:grid-cols-1">
            <AnimationGsap className="bg-border/40 rounded-xl p-5 max-md:p-3">
              <div className="flex h-full flex-col justify-between gap-6 max-sm:gap-4">
                <p className="text-blue">
                  <PEOPLEI className="size-8 object-contain object-center max-md:size-6" />
                </p>
                <div className="flex flex-col items-start justify-start gap-3">
                  <p className="text-dark-blue text-sm !font-bold uppercase">
                    {t('People-Centered')}
                  </p>
                  <p className="text-dark-gray text-sm max-md:text-sm">
                    {t(
                      'We focus on building real human connections between job seekers and employers.',
                    )}
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
                    {t('Smart Matching')}
                  </p>
                  <p className="text-dark-gray text-sm max-md:text-sm">
                    {t(
                      'Our system intelligently connects the right talent with the right opportunity.',
                    )}
                  </p>
                </div>
              </div>
            </AnimationGsap>
            <AnimationGsap className="bg-border/40 rounded-xl p-5 max-md:p-3">
              <div className="flex h-full flex-col justify-between gap-6 max-sm:gap-4">
                <p className="text-blue">
                  <GROWTH className="size-8 object-contain object-center max-md:size-6" />
                </p>
                <div className="flex flex-col items-start justify-start gap-3">
                  <p className="text-dark-blue text-sm !font-bold uppercase">
                    {t('Business Growth')}
                  </p>
                  <p className="text-dark-gray text-sm max-md:text-sm">
                    {t(
                      'We help companies grow by simplifying recruitment and reducing hiring time.',
                    )}
                  </p>
                </div>
              </div>
            </AnimationGsap>
          </div>
        </div>
      </div>
      <Team apron />
    </>
  );
};
