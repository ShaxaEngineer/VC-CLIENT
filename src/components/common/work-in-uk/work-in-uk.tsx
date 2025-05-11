import { FC } from 'react';

import { CloseOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { useDataSortsAction } from '@/stores';
import { errorMasseg } from '@/utils/toastify';

interface IWorkInUk {
  setactiveComp: (comp: 1 | 2 | 3 | 4) => void;
}

export const WorkInUk: FC<IWorkInUk> = ({ setactiveComp }) => {
  const { t } = useTranslation();
  const { candinate_eligibl_uk, setcandinate_eligibl_uk } = useDataSortsAction();
  const sendData = () => {
    if (candinate_eligibl_uk) setactiveComp(3);
    else errorMasseg(t('Are you eligible to work in the UK?'));
  };
  const handleCancel = () => {
    setactiveComp(1);
  };
  return (
    <>
      <div className="flex items-center justify-between px-5 py-4 max-md:px-3 max-md:py-3">
        <p className="text-dark-blue text-2xl !font-bold">
          {t('Are you eligible to work in the UK?')}
        </p>
        <button
          onClick={handleCancel}
          className="border-border text-dark-blue flex size-9 cursor-pointer items-center justify-center rounded-sm border text-base"
        >
          <CloseOutlined />
        </button>
      </div>
      <div className="bg-border h-[0.0625rem] w-full max-md:hidden"></div>
      <div className="grid grid-cols-1 items-stretch gap-4 px-5 py-4 max-md:gap-2 max-md:px-3 max-md:py-3">
        <button
          onClick={() => setcandinate_eligibl_uk('yes')}
          className={clsx(
            'text-dark-blue border-border hover:border-blue flex items-center justify-center rounded-xl border px-2 py-4 text-base !font-bold transition-all duration-300 max-md:px-1 max-md:py-2',
            candinate_eligibl_uk == 'yes' && 'bg-blue border-blue text-white',
          )}
        >
          {t('Yes, I am')}
        </button>
        <button
          onClick={() => setcandinate_eligibl_uk('no')}
          className={clsx(
            'text-dark-blue border-border hover:border-blue flex items-center justify-center rounded-xl border px-2 py-4 text-base !font-bold transition-all duration-300 max-md:px-1 max-md:py-2',
            candinate_eligibl_uk == 'no' && 'bg-blue border-blue text-white',
          )}
        >
          {t('No, I am not')}
        </button>
      </div>
      <div className="bg-border h-[0.0625rem] w-full max-md:hidden"></div>
      <div className="grid grid-cols-2 gap-4 px-5 py-4 max-md:grid-cols-1 max-md:px-3 max-md:py-3">
        <button
          onClick={handleCancel}
          className="text-dark-blue border-border flex h-[3.125rem] w-full cursor-pointer items-center justify-center rounded-4xl border"
        >
          {t('Prev')}
        </button>
        <button
          onClick={sendData}
          className="bg-blue border-blue flex h-[3.125rem] w-full cursor-pointer items-center justify-center rounded-4xl border text-white"
        >
          {t('Next')}
        </button>
      </div>
    </>
  );
};
