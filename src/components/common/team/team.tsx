/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties, FC } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { EMPTY, LOGOBG } from '@/assets';
import { AnimationGsap, AnimationGsapText } from '@/components';
import { QUERY_KEY } from '@/constants';
import { useGet } from '@/hooks';
import { imgUrl } from '@/service';
import { getLangName } from '@/utils';

interface TeamProps {
  apron?: boolean;
}

interface CustomCSSProperties extends CSSProperties {
  '--image-logobg'?: string;
}

const divStyle: CustomCSSProperties = {
  '--image-logobg': `url(${LOGOBG})`,
};

export const Team: FC<TeamProps> = ({ apron }) => {
  const { t } = useTranslation();
  const { data } = useGet({
    url: `employers`,
    queryKey: [QUERY_KEY.employers],
  });

  return (
    <>
      <div
        style={divStyle}
        className="relative rounded-t-[1.25rem] bg-[#F1F2F6] bg-[image:var(--image-logobg)] bg-left bg-no-repeat py-[4rem] max-md:py-[2rem]"
      >
        <div className={clsx('container mx-auto')}>
          <div className="grid grid-cols-3 items-stretch gap-10 max-lg:grid-cols-1 max-md:gap-6">
            <div className="flex flex-col items-start justify-center gap-4 max-md:gap-3">
              <h5 className="text-dark-blue max-w-[18rem] text-2xl !font-extrabold uppercase max-md:text-xl">
                {
                  getLangName([
                    {
                      element: (
                        <>
                          Meet the <span className="text-blue !font-extrabold">Team</span> Behind
                          the Vision
                        </>
                      ),
                      language: 'en',
                    },
                    {
                      element: (
                        <>
                          Vizyon ortidagi <span className="text-blue !font-extrabold">jamoa</span>
                          bilan tanishing
                        </>
                      ),
                      language: 'uz',
                    },
                    {
                      element: (
                        <>
                          Познакомьтесь с{' '}
                          <span className="text-blue !font-extrabold">командой</span>, стоящей за
                          видением
                        </>
                      ),
                      language: 'ru',
                    },
                  ])?.element
                }
              </h5>
              <AnimationGsapText className="max-w-[22rem] text-base text-[#717276]">
                {t(
                  'A dedicated team united by one goal — helping people and businesses grow together',
                )}
              </AnimationGsapText>
            </div>
            <AnimationGsap className="col-span-2">
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                speed={900}
                navigation={true}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1.3,
                  },
                  640: {
                    slidesPerView: 2.3,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Autoplay, Navigation]}
                className="teamSwiper"
              >
                {data?.data?.data?.map((item: any) => (
                  <SwiperSlide key={item?._id}>
                    <div className="w-full">
                      <img
                        className="h-[20rem] w-full rounded-xl object-cover object-center max-md:h-[18.5rem]"
                        src={item?.employer_image ? imgUrl + item?.employer_image : EMPTY}
                        alt="team people"
                      />
                      <p className="text-dark-blue mt-3 mb-1 text-start text-lg !font-bold">
                        {item?.employer_last_name} {item?.employer_first_name}
                      </p>
                      <p className="text-dark-gray text-start text-sm !font-medium">
                        {item?.employer_position}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </AnimationGsap>
          </div>
        </div>
        {apron && <div className="bg-gray absolute right-0 -bottom-5 z-[-1] h-5 w-full"></div>}
      </div>
    </>
  );
};
