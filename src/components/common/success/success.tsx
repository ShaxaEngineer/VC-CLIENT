import { FC } from 'react';

import { CloseOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { SUCCESS } from '@/assets';

interface ISuccess {
  back: () => void;
}

export const Success: FC<ISuccess> = ({ back }) => {
  const { t } = useTranslation();
  const handleCancel = () => {
    back();
  };

  return (
    <>
      <div className="flex items-center justify-between px-5 py-4 max-md:px-3 max-md:py-3">
        <p className="text-dark-blue text-2xl !font-bold">{t('Success')}</p>
        <button
          onClick={handleCancel}
          className="border-border text-dark-blue flex size-9 cursor-pointer items-center justify-center rounded-sm border text-base"
        >
          <CloseOutlined />
        </button>
      </div>
      <div className="bg-border h-[0.0625rem] w-full max-md:hidden"></div>
      <div className="flex w-full flex-col items-center justify-center gap-4 px-5 py-4 max-md:gap-2 max-md:px-3 max-md:py-3">
        <img src={SUCCESS} alt="SUCCESS" className="size-20 object-contain object-center" />
        <p className="text-dark-blue max-w-[24.375rem] text-center text-2xl !font-bold">
          {t('Your application has been successfully submitted!')}
        </p>
        <p className="text-dark-gray max-w-[24.375rem] text-center text-base">
          {t(
            'Our administrator will contact you within 24 hours. Thank you for your interest and for submitting your application!',
          )}
        </p>
      </div>
      <div className="bg-border h-[0.0625rem] w-full max-md:hidden"></div>
      <div className="grid grid-cols-1 gap-4 px-5 py-4 max-md:px-3 max-md:py-3">
        <button
          onClick={handleCancel}
          className="bg-blue border-blue flex h-[3.125rem] w-full cursor-pointer items-center justify-center rounded-4xl border text-white"
        >
          {t('Back to home')}
        </button>
      </div>
    </>
  );
};
