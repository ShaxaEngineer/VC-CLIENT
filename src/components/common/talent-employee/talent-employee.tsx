/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { AnimationGsap, AnimationGsapText } from '@/components';
import { QUERY_KEY } from '@/constants';
import { useGet } from '@/hooks';
import { imgUrl } from '@/service';

interface TalentEmployeeProps {
  apron?: boolean;
}

export const TalentEmployee: FC<TalentEmployeeProps> = ({ apron }) => {
  const { data } = useGet({
    url: 'partners?page=1&limit=9999',
    queryKey: [QUERY_KEY.partners],
  });

  const { t } = useTranslation();
  return (
    <>
      <div className="bg-gray relative rounded-t-[1.25rem] py-[4rem] max-md:py-[2rem]">
        <div className={clsx('container mx-auto')}>
          <div className="flex items-center justify-between gap-4 max-md:flex-col max-md:items-start max-md:justify-start max-md:gap-3">
            <h5 className="text-dark-blue max-w-[29rem] text-2xl !font-extrabold uppercase max-md:text-xl">
              {t('Looking for Great Employees? Let’s Work Together')}
            </h5>
            <AnimationGsapText className="text-dark-gray max-w-[25rem] text-base">
              {t(
                'We have talented candidates ready to join your team. Post your job with us and reach the right people faster. It’s simple, smart, and effective.',
              )}
            </AnimationGsapText>
          </div>
          <AnimationGsap className="mt-10 max-md:mt-5">
            <Swiper
              slidesPerView={7}
              spaceBetween={10}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              speed={900}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 4,
                },
                640: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 7,
                },
              }}
              modules={[Autoplay]}
            >
              {data?.data?.map((item: any) => (
                <SwiperSlide key={item?._id}>
                  <div className="border-border h-[10rem] w-full rounded-2xl border bg-white p-5 max-md:h-[8rem] max-sm:h-[5rem]">
                    <img
                      loading="lazy"
                      src={imgUrl + item?.partner_image}
                      alt="bank"
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimationGsap>
        </div>
        {apron && <div className="bg-gray absolute right-0 -bottom-5 z-[-1] h-5 w-full"></div>}
      </div>
    </>
  );
};
