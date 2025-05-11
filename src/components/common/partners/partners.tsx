/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { AnimationGsap, AnimationGsapText } from '@/components';
import { QUERY_KEY } from '@/constants';
import { useGet } from '@/hooks';
import { imgUrl } from '@/service';
import { getLangName } from '@/utils';

export const Partners = () => {
  const { t } = useTranslation();

  const { data } = useGet({
    url: 'partners?page=1&limit=9999',
    queryKey: [QUERY_KEY.partners],
  });
  return (
    <>
      <div className="border-border my-20 grid grid-cols-8 items-stretch gap-16 rounded-4xl border p-8 max-lg:grid-cols-1 max-md:my-10 max-md:gap-6 max-md:p-5">
        <div className="col-span-3 flex h-full flex-col items-start justify-between max-lg:col-span-1">
          <h4 className="text-dark-blue max-w-[22rem] text-2xl !font-extrabold uppercase">
            {
              getLangName([
                {
                  element: (
                    <>
                      Companies That Trust Us,
                      <span className="text-blue !font-extrabold">Grow</span> With Us
                    </>
                  ),
                  language: 'en',
                },
                {
                  element: (
                    <>
                      Bizga ishongan kompaniyalar,
                      <span className="text-blue !font-extrabold">biz bilan</span>
                      rivojlanadi
                    </>
                  ),
                  language: 'uz',
                },
                {
                  element: (
                    <>
                      Компании, которые нам доверяют,
                      <span className="text-blue !font-extrabold">растут</span> растут вместе с нами
                    </>
                  ),
                  language: 'ru',
                },
              ])?.element
            }
          </h4>
          <AnimationGsapText
            className={clsx('max-w-[30rem] text-base text-gray-400 max-md:text-sm')}
          >
            {t(
              'We collaborate with leading businesses across industries — from tech to construction — who believe in innovation, quality, and growth. These partnerships drive our mission forward and create real impact.',
            )}
          </AnimationGsapText>
        </div>
        <div className="bg-border/20 col-span-5 rounded-2xl py-12 max-lg:col-span-1 max-md:py-6">
          <AnimationGsap>
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              speed={1500}
              loop={true}
              pagination={false}
              modules={[Pagination, Autoplay]}
            >
              {data?.data?.map((item: any, index: number) => (
                <SwiperSlide key={index}>
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
          <div className="my-[0.625rem]"></div>
          <AnimationGsap>
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              speed={1500}
              loop={true}
              pagination={false}
              modules={[Pagination, Autoplay]}
            >
              {data?.data?.reverse()?.map((item: any, index: number) => (
                <SwiperSlide key={index}>
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
      </div>
    </>
  );
};
