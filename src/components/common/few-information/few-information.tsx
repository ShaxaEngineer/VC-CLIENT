/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';

import { CloseOutlined, LoadingOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { InputFilter, UploadMoreFile } from '@/components';
import { usePost } from '@/hooks';
import { useDataSortsAction } from '@/stores';
import { errorMasseg, successMasseg } from '@/utils/toastify';

interface IFewInformation {
  setactiveComp: (comp: 1 | 2 | 3 | 4) => void;
}

export const FewInformation: FC<IFewInformation> = ({ setactiveComp }) => {
  const { t } = useTranslation();
  const { id } = useParams();

  const {
    candinate_position,
    candinate_eligibl_uk,
    candinate_name,
    setcandinate_name,
    candinate_email,
    setcandinate_email,
    candinate_number,
    setcandinate_number,
    candinate_message,
    setcandinate_message,
    files,
    setfiles,
    clearAllData,
  } = useDataSortsAction();

  const { mutate, isLoading: loadingData } = usePost();

  const sendMessages = () => {
    if (
      candinate_position &&
      candinate_eligibl_uk &&
      candinate_name &&
      candinate_email &&
      candinate_number &&
      candinate_message
    ) {
      const userData = {
        candinate_name: candinate_name,
        candinate_position: candinate_position,
        candinate_number: candinate_number,
        candinate_email: candinate_email,
        candinate_eligibl_uk: candinate_eligibl_uk == 'yes' ? true : false,
        candinate_resume: files?.file,
        candinate_message: candinate_message,
        applied_vacancy_id: id,
      };
      mutate({
        url: 'candinates/create',
        method: 'POST',
        data: userData,
        onSuccess: () => {
          setactiveComp(4);
          clearAllData();
          successMasseg(t('Your application has been sent.'));
        },
        onError: (err: any) => {
          errorMasseg(err?.response?.data?.message);
        },
      });
    } else errorMasseg(t('Please fill in all fields'));
  };

  const handleCancel = () => {
    setactiveComp(2);
  };

  return (
    <>
      <div className="flex items-center justify-between px-5 py-4 max-md:px-3 max-md:py-3">
        <p className="text-dark-blue text-2xl !font-bold">{t('Give us a few information')}</p>
        <button
          onClick={handleCancel}
          className="border-border text-dark-blue flex size-9 cursor-pointer items-center justify-center rounded-sm border text-base"
        >
          <CloseOutlined />
        </button>
      </div>
      <div className="bg-border h-[0.0625rem] w-full max-md:hidden"></div>
      <div className="grid grid-cols-1 items-stretch gap-4 px-5 py-4 max-md:gap-2 max-md:px-3 max-md:py-3">
        <InputFilter
          value={candinate_name}
          onChange={setcandinate_name}
          labelClassName={'!font-bold'}
          title={t('First and last name')}
          placeholder={t('First and last name')}
        />
        <InputFilter
          value={candinate_email}
          onChange={setcandinate_email}
          labelClassName={'!font-bold'}
          title={t('Email')}
          placeholder={t('Your email')}
        />
        <InputFilter
          value={candinate_number}
          onChange={setcandinate_number}
          labelClassName={'!font-bold'}
          title={t('Phone number')}
          placeholder={t('Phone number')}
        />
        <InputFilter
          value={candinate_message}
          onChange={setcandinate_message}
          labelClassName={'!font-bold'}
          InputComponent={Input.TextArea}
          title={t('Messages')}
          placeholder={t('Messages')}
          rows={3}
        />
        <UploadMoreFile text={t('Upload your resume')} setfiles={setfiles} files={files} />
      </div>
      <div className="bg-border h-[0.0625rem] w-full max-md:hidden"></div>
      <div className="grid grid-cols-2 gap-4 px-5 py-4 max-md:grid-cols-1 max-md:px-3 max-md:py-3">
        <button
          disabled={loadingData}
          onClick={() => handleCancel()}
          className={clsx(
            'text-dark-blue border-border flex h-[3.125rem] w-full cursor-pointer items-center justify-center rounded-4xl border',
            loadingData && 'cursor-none',
          )}
        >
          {loadingData ? <LoadingOutlined /> : t('Cancel')}
        </button>
        <button
          disabled={loadingData}
          onClick={() => sendMessages()}
          className={clsx(
            'bg-blue border-blue flex h-[3.125rem] w-full cursor-pointer items-center justify-center rounded-4xl border text-white',
            loadingData && 'cursor-none',
          )}
        >
          {loadingData ? <LoadingOutlined /> : t('Next')}
        </button>
      </div>
    </>
  );
};
