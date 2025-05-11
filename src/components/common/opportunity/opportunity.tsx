import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ARROW, BG, CAREAR, WORKER } from '@/assets';
import { ROUTES } from '@/constants';
import { getLangName } from '@/utils';

export const Opportunity = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div className="relative mt-10 mb-20 h-[51rem] p-10 max-xl:h-[34rem] max-lg:h-max max-lg:p-0 max-md:mt-5 max-md:mb-10">
        <div className="relative z-20 flex flex-col items-start justify-start gap-6 max-md:gap-4">
          <h4 className="text-dark-blue text-4xl/[3.8rem] !font-extrabold text-wrap uppercase max-md:text-2xl">
            {
              getLangName([
                {
                  element: (
                    <>
                      Where Talent🚀 <br /> Meets
                      <span className="from-blue to-dark-blue ml-2 rounded-tr-3xl rounded-bl-3xl bg-linear-to-r px-4 py-1 text-white">
                        Opportunity
                      </span>
                    </>
                  ),
                  language: 'en',
                },
                {
                  element: (
                    <>
                      Iste'dod imkoniyatlar🚀 <br /> bilan
                      <span className="from-blue to-dark-blue ml-2 rounded-tr-3xl rounded-bl-3xl bg-linear-to-r px-4 py-1 text-white">
                        uchrashadigan joy
                      </span>
                    </>
                  ),
                  language: 'uz',
                },
                {
                  element: (
                    <>
                      Где талант встречается🚀 <br /> с
                      <span className="from-blue to-dark-blue ml-2 rounded-tr-3xl rounded-bl-3xl bg-linear-to-r px-4 py-1 text-white">
                        возможностями
                      </span>
                    </>
                  ),
                  language: 'ru',
                },
              ])?.element
            }
          </h4>
          <p className="max-w-[413px] text-sm text-gray-400">
            {t(
              `Job seekers celebrate finding the right role, while employers rejoice in discovering skilled professionals. It’s all about mutual success and satisfaction.`,
            )}
          </p>
          <button
            onClick={() => navigate(ROUTES.vacansies)}
            className={clsx(
              'group bg-blue flex items-center justify-center gap-4 rounded-[2.75rem] px-6 py-3 text-base !font-medium text-white',
            )}
          >
            {t('Apply for a job')}
            <ARROW className="size-3 rotate-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-45" />
          </button>
        </div>
        <div className="max-lg:from-blue absolute top-0 left-0 z-10 h-full w-full overflow-hidden max-lg:relative max-lg:mt-8 max-lg:h-[32rem] max-lg:rounded-2xl max-lg:bg-linear-to-r max-lg:to-blue-500 max-md:h-[24rem]">
          <img
            src={BG}
            alt="bg img"
            loading="lazy"
            className="absolute right-0 bottom-0 z-[-3] h-full w-full object-contain object-center max-lg:hidden"
          />
          <img
            src={WORKER}
            alt="worker img"
            loading="lazy"
            className="absolute right-0 bottom-0 z-[-2] h-full w-full object-contain object-center max-lg:object-cover max-lg:object-right"
          />
          <img
            src={CAREAR}
            alt="carear img"
            loading="lazy"
            className="absolute bottom-32 left-12 z-[-1] h-max w-max object-contain object-center max-xl:bottom-12 max-xl:left-7 max-xl:w-[12rem] max-lg:hidden"
          />
        </div>
      </div>
    </>
  );
};
