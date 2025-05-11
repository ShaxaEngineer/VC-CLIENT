import { FC } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { ARROW, SMS } from '@/assets';
import { AnimationGsap, AnimationGsapText, QuestionsCard } from '@/components';

interface FrequentlyProps {
  apron?: boolean;
}

export const Frequently: FC<FrequentlyProps> = ({ apron }) => {
  const { t } = useTranslation();

  const Faq = [
    {
      question: t('What kind of jobs can I find here?'),
      answer: t(
        'We offer jobs in construction, hotels, cleaning, events, and logistics.You can find both full-time and part-time roles, like general labourers, waiters, kitchen porters, and more.',
      ),
    },
    {
      question: t('How can I apply for a job?'),
      answer: t(
        `It’s easy! Just click “Apply for a job”, fill out the form, and tell us what kind of work you’re looking for. We’ll contact you soon with matching opportunities.`,
      ),
    },
    {
      question: t('Is it free to use this service?'),
      answer: t(
        `Yes — applying for a job through our website is 100% free. We work directly with employers, so you don’t pay anything.`,
      ),
    },
    {
      question: t('Can I upload my resume?'),
      answer: t(
        `Yes! You can upload your CV directly on our website when you apply. No CV? No problem — just tell us your experience in the form and we’ll help from there.`,
      ),
    },
    {
      question: t('Can businesses find workers here?'),
      answer: t(
        `Yes, Just send us an email at info@thepwragency.co.uk or call +44 020 3370 6657 and let us know what kind of workers you need. We’ll quickly match you with reliable, verified candidates.`,
      ),
    },
    {
      question: t('Is my personal data secure?'),
      answer: t(
        `Yes, your information is safe. Our company is registered with the ICO and follows all data protection rules (UK GDPR). We only use your data to help you get the right job.`,
      ),
    },
  ];
  return (
    <>
      <div className="bg-dark-blue relative rounded-t-[1.25rem] py-[5rem] max-md:py-[2rem]">
        <div className={clsx('container mx-auto')}>
          {/* card */}
          <AnimationGsap className="bg-blue relative overflow-hidden rounded-3xl px-[3rem] py-[2rem] max-md:px-[1.2rem] max-md:py-[1rem] max-md:pb-[16rem]">
            <h3 className="relative z-[1] max-w-[19rem] text-3xl !font-bold text-white max-md:text-xl">
              {t("Got a Question? We've Got You.")}
            </h3>
            <AnimationGsapText
              className={clsx(
                'relative z-[1] w-[27rem] text-base text-white/50 max-md:text-sm',
                'mt-6 max-md:mt-4',
              )}
            >
              {t(
                'Have questions or need assistance finding the right job? We’re here to support you every step of the way.',
              )}
            </AnimationGsapText>
            <a
              href="tel: +44 020 3370 6657"
              className={clsx(
                'text-dark-blue group relative z-[1] flex w-max items-center justify-center gap-4 rounded-[2.75rem] bg-white px-6 py-3 text-base !font-medium',
                'mt-10 max-md:mt-4',
              )}
            >
              {t('Let’s talk')}
              <ARROW className="size-3 rotate-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-45" />
            </a>
            {/* bg img */}
            <div className="absolute top-[1rem] right-[4rem] h-[30rem] w-[30rem] rounded-full bg-white/10 max-md:top-[18rem] max-md:right-[-4rem]">
              <img
                className="absolute -top-[5rem] h-full w-full object-contain object-center"
                src={SMS}
                alt="this is sms picture"
                loading="lazy"
              />
            </div>
          </AnimationGsap>
          {/* Frequently Asked Questions */}
          <h3 className="mt-[5rem] text-2xl !font-semibold text-white uppercase max-md:mt-[2rem]">
            {t('Frequently Asked Questions')}
          </h3>
          <div className="mt-4 flex flex-col gap-2">
            {Faq?.map((item, index) => <QuestionsCard key={index} {...item} />)}
          </div>
        </div>
        {apron && <div className="bg-dark-blue absolute right-0 -bottom-5 z-[-1] h-5 w-full"></div>}
      </div>
    </>
  );
};
