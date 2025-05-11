/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConfigProvider, theme } from 'antd';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { Routs } from '@/router';
import { useStoreSiteAction } from '@/stores';

export const App = () => {
  const { darkMode }: any = useStoreSiteAction();
  const { t } = useTranslation();

  const customMonths = [
    t('Yanvar'),
    t('Fevral'),
    t('Mart'),
    t('Aprel'),
    t('May'),
    t('Iyun'),
    t('Iyul'),
    t('Avgust'),
    t('Sentabr'),
    t('Oktabr'),
    t('Noyabr'),
    t('Dekabr'),
  ];
  const customWeekdays = [
    t('Yakshanba'),
    t('Dushanba'),
    t('Seshanba'),
    t('Chorshanba'),
    t('Payshanba'),
    t('Juma'),
    t('Shanba'),
  ];
  const customWeekdaysShort = [
    t('Yak'),
    t('Dush'),
    t('Sesh'),
    t('Chor'),
    t('Pay'),
    t('Jum'),
    t('Shan'),
  ];
  const customWeekdaysMin = [t('Ya'), t('Du'), t('Se'), t('Cho'), t('Pa'), t('Ju'), t('Sha')];
  const customLocale = {
    name: 'uz-custom',
    months: customMonths,
    monthsShort: customMonths,
    weekdays: customWeekdays,
    weekdaysShort: customWeekdaysShort,
    weekdaysMin: customWeekdaysMin,
    formats: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm',
    },
    ordinal: (n: any) => `${n}-`,
    relativeTime: {
      future: '%s keyin',
      past: '%s oldin',
      s: 'soniya',
      m: 'bir daqiqa',
      mm: '%d daqiqa',
      h: 'bir soat',
      hh: '%d soat',
      d: 'bir kun',
      dd: '%d kun',
      M: 'bir oy',
      MM: '%d oy',
      y: 'bir yil',
      yy: '%d yil',
    },
  };
  dayjs.locale(customLocale);

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: darkMode ? theme.defaultAlgorithm : theme.darkAlgorithm,
        }}
      >
        <Routs />
      </ConfigProvider>
    </>
  );
};
