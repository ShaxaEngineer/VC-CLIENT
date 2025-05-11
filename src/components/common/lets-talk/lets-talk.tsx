/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react';

import { CloseOutlined } from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';
import { Input, Modal } from 'antd';
import AnimateHeight from 'react-animate-height';
import { useTranslation } from 'react-i18next';

import { InputFilter, Success } from '@/components';
import { usePost } from '@/hooks';
import { errorMasseg, successMasseg } from '@/utils/toastify';

interface ILetsTalkProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

export const LetsTalk: FC<ILetsTalkProps> = ({ openModal = false, setOpenModal }) => {
  const { t } = useTranslation();

  const { mutate, isLoading: loadingData } = usePost();
  const [dataSend, setdataSend] = useState(false);

  const [letstalk_fullname, setletstalk_fullname] = useState<null | string>(null);
  const [letstalk_email, setletstalk_email] = useState<null | string>(null);
  const [letstalk_message, setletstalk_message] = useState<null | string>(null);
  const [letstalk_number, setletstalk_number] = useState<null | string>(null);

  const sendMessages = () => {
    if (letstalk_fullname && letstalk_email && letstalk_message && letstalk_number) {
      const userData = {
        letstalk_fullname: letstalk_fullname,
        letstalk_email: letstalk_email,
        letstalk_message: letstalk_message,
        letstalk_number: letstalk_number,
      };
      mutate({
        url: 'letstalk/create',
        method: 'POST',
        data: userData,
        onSuccess: () => {
          setletstalk_fullname(null);
          setletstalk_email(null);
          setletstalk_message(null);
          setletstalk_number(null);
          setdataSend(true);
          successMasseg(t('Your application has been sent.'));
        },
        onError: (err: any) => {
          errorMasseg(err?.response?.data?.message);
        },
      });
    } else errorMasseg(t('Please fill out all fields'));
  };

  // modalni ochish
  const showModal = (): void => {
    setOpenModal(true);
  };
  // modalni yopish
  const handleCancel = (): void => {
    setOpenModal(false);
    setdataSend(false);
  };

  const isReturnActiveComp = (comp: boolean) => {
    return dataSend == comp ? 'auto' : 0;
  };

  return (
    <>
      <Modal
        open={openModal}
        onOk={showModal}
        onCancel={handleCancel}
        zIndex={1050}
        width={480}
        maskClosable={false}
        footer={''}
        closable={false}
      >
        <AnimateHeight duration={500} height={isReturnActiveComp(false)}>
          <div className="flex items-center justify-between px-5 py-4">
            <p className="text-dark-blue text-2xl !font-bold">{t('Let’s talk')}</p>
            <button
              onClick={handleCancel}
              className="border-border text-dark-blue flex size-9 cursor-pointer items-center justify-center rounded-sm border text-base"
            >
              <CloseOutlined />
            </button>
          </div>
          <div className="bg-border h-[0.0625rem] w-full"></div>
          <div className="flex flex-col gap-4 px-5 py-4">
            <InputFilter
              value={letstalk_fullname}
              onChange={setletstalk_fullname}
              labelClassName={'!font-bold'}
              title={t('First and last name')}
              placeholder={t('First and last name')}
            />
            <InputFilter
              value={letstalk_email}
              onChange={setletstalk_email}
              labelClassName={'!font-bold'}
              title={t('Email')}
              placeholder={t('Your email')}
            />
            <InputFilter
              value={letstalk_number}
              onChange={setletstalk_number}
              labelClassName={'!font-bold'}
              title={t('Phone number')}
              placeholder={t('Phone number')}
            />
            <InputFilter
              value={letstalk_message}
              onChange={setletstalk_message}
              labelClassName={'!font-bold'}
              InputComponent={Input.TextArea}
              title={t('Messages')}
              placeholder={t('Messages')}
              rows={3}
            />
          </div>
          <div className="bg-border h-[0.0625rem] w-full"></div>
          <div className="grid grid-cols-2 gap-4 px-5 py-4">
            <button
              disabled={loadingData}
              onClick={handleCancel}
              className="text-dark-blue border-border flex h-[3.125rem] w-full cursor-pointer items-center justify-center rounded-4xl border"
            >
              {loadingData ? <LoadingOutlined /> : t('Cancel')}
            </button>
            <button
              disabled={loadingData}
              onClick={sendMessages}
              className="bg-blue border-blue flex h-[3.125rem] w-full cursor-pointer items-center justify-center rounded-4xl border text-white"
            >
              {loadingData ? <LoadingOutlined /> : t('Send')}
            </button>
          </div>
        </AnimateHeight>
        <AnimateHeight duration={500} height={isReturnActiveComp(true)}>
          <Success back={handleCancel} />
        </AnimateHeight>
      </Modal>
    </>
  );
};
