import { FC } from 'react';

import { CloseOutlined, LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { QUERY_KEY, ROUTES } from '@/constants';
import { useGet } from '@/hooks';
import { useDataSortsAction } from '@/stores';
import { errorMasseg } from '@/utils/toastify';

interface IYourPosition {
  setactiveComp: (comp: 1 | 2 | 3 | 4) => void;
}

export const YourPosition: FC<IYourPosition> = ({ setactiveComp }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { candinate_position, setcandinate_position } = useDataSortsAction();
  const { data, isLoading } = useGet({
    url: `vacancies/${id}`,
    queryKey: [QUERY_KEY.vacanciesId, id],
    enabled: !!id,
  });
  const handleCancel = () => {
    navigate(ROUTES.vacansies);
  };
  const sendData = () => {
    if (candinate_position) setactiveComp(2);
    else errorMasseg(t('Please select your position'));
  };

  return (
    <>
      <div className="flex items-center justify-between px-5 py-4 max-md:px-3 max-md:py-3">
        <p className="text-dark-blue text-2xl !font-bold">{t('Select your position')}</p>
        <button
          onClick={handleCancel}
          className="border-border text-dark-blue flex size-9 cursor-pointer items-center justify-center rounded-sm border text-base"
        >
          <CloseOutlined />
        </button>
      </div>
      <div className="bg-border h-[0.0625rem] w-full max-md:hidden"></div>
      <div className="grid grid-cols-2 items-stretch gap-4 px-5 py-4 max-md:grid-cols-1 max-md:gap-2 max-md:px-3 max-md:py-3">
        {isLoading && (
          <div className="text-blue col-span-2 flex h-20 w-full items-center justify-center text-3xl max-md:col-span-1">
            <LoadingOutlined />
          </div>
        )}
        {data?.data?.vacancy_positions?.map((item: string) => (
          <button
            onClick={() => setcandinate_position(item)}
            key={item}
            className={clsx(
              'text-dark-blue border-border hover:border-blue flex items-center justify-center rounded-xl border px-2 py-4 text-base !font-bold transition-all duration-300 max-md:px-1 max-md:py-2',
              candinate_position === item && 'bg-blue border-blue text-white',
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="bg-border h-[0.0625rem] w-full max-md:hidden"></div>
      <div className="grid grid-cols-2 gap-4 px-5 py-4 max-md:grid-cols-1 max-md:px-3 max-md:py-3">
        <button
          onClick={handleCancel}
          className="text-dark-blue border-border flex h-[3.125rem] w-full cursor-pointer items-center justify-center rounded-4xl border"
        >
          {t('Cancel')}
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
