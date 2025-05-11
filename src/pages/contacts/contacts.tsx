/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { INSTAGRAM, LINKEDIN, TELEGRAM } from '@/assets';
import { Breadcrumbs, InputFilter } from '@/components';
import { usePost } from '@/hooks';
import { errorMasseg, successMasseg } from '@/utils/toastify';

export const Contacts = () => {
  const { t } = useTranslation();

  const [contact_fullname, setcontact_fullname] = useState<null | string>(null);
  const [contact_email, setcontact_email] = useState<null | string>(null);
  const [contact_message, setcontact_message] = useState<null | string>(null);

  const { mutate, isLoading: loadingData } = usePost();

  const sendMessages = () => {
    if (contact_fullname && contact_email && contact_message) {
      const userData = {
        contact_fullname: contact_fullname,
        contact_email: contact_email,
        contact_message: contact_message,
      };
      mutate({
        url: 'contacts/create',
        method: 'POST',
        data: userData,
        onSuccess: () => {
          setcontact_fullname(null);
          setcontact_email(null);
          setcontact_message(null);
          successMasseg(t('Your application has been sent.'));
        },
        onError: (err: any) => {
          errorMasseg(err?.response?.data?.message);
        },
      });
    } else {
      errorMasseg(t('Please fill out all fields'));
    }
  };

  return (
    <>
      <div className={clsx('container mx-auto')}>
        <Breadcrumbs menu={t('Contacts')} />
        <h4 className="text-dark-blue mt-5 mb-3 text-2xl !font-bold">{t('Contacts')}</h4>
        <div className="grid grid-cols-5 items-stretch gap-3 max-lg:grid-cols-1">
          <div className="border-border col-span-2 flex flex-col items-start justify-start gap-4 rounded-[1.25rem] border bg-[#FDFDFD] p-5 max-lg:col-span-1">
            <div className="flex flex-col items-start justify-start gap-1">
              <p className="text-sm text-gray-500">{t('Contact Center 24/7')}</p>
              <a href="tel: +44 020 3370 6657" className="text-dark-blue text-base !font-bold">
                +44 020 3370 6657
              </a>
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <p className="text-sm text-gray-500">{t('Email')}</p>
              <a
                href="mailto: info@thepwragency.co.uk"
                className="text-dark-blue text-base !font-bold"
              >
                info@thepwragency.co.uk
              </a>
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <p className="text-sm text-gray-500">{t('Our Address')}</p>
              <p className="text-dark-blue text-base !font-bold">
                {t('67 Marsh Wall, Harcourt Tower. E14 9GS (Visits by appointment only)')}
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <p className="text-sm text-gray-500">{t('Working Hours:')}</p>
              <p className="text-dark-blue text-base !font-bold">
                {t('Mon - Sat | 9:00 AM - 6:00 PM')}
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <p className="text-sm text-gray-500">{t('We are on social media')}</p>
              <div className="flex w-max items-center gap-2.5">
                {/* <a
                  target="_blank"
                  href="#"
                  className="text-dark-blue border-border flex size-12 items-center justify-center rounded-lg border"
                >
                  <FACEBOOK className="size-6" />
                </a> */}
                <a
                  target="_blank"
                  href="https://www.instagram.com/thepwr.agency?igsh=MTBndHc2cjRsY3JjcA%3D%3D&utm_source=qr"
                  className="text-dark-blue border-border flex size-12 items-center justify-center rounded-lg border"
                >
                  <INSTAGRAM className="size-6" />
                </a>
                <a
                  target="_blank"
                  href="https://t.me/thepwr_agency"
                  className="text-dark-blue border-border flex size-12 items-center justify-center rounded-lg border"
                >
                  <TELEGRAM className="size-6" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/thepwragency/"
                  className="text-dark-blue border-border flex size-12 items-center justify-center rounded-lg border"
                >
                  <LINKEDIN className="size-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-border col-span-3 rounded-[1.25rem] border bg-[#FDFDFD] p-5 max-lg:col-span-1">
            <p className="text-dark-blue text-2xl !font-bold">{t('Submit an Application')}</p>
            <p className="mt-2 text-sm text-gray-400">
              {t(
                'Fill out the form, and our specialist will contact you for a detailed consultation',
              )}
            </p>
            <div className="bg-border my-4 h-[1px] w-full"></div>
            <div className="grid grid-cols-2 gap-4">
              <InputFilter
                value={contact_fullname}
                onChange={setcontact_fullname}
                title={t('First and last name')}
                placeholder={t('First and last name')}
              />
              <InputFilter
                value={contact_email}
                onChange={setcontact_email}
                title={t('Email')}
                placeholder={t('Your email')}
              />
              <div className="col-span-2">
                <InputFilter
                  value={contact_message}
                  onChange={setcontact_message}
                  InputComponent={Input.TextArea}
                  title={t('Messages')}
                  placeholder={t('Messages')}
                  rows={3}
                />
              </div>
              <div className="col-span-2">
                <button
                  disabled={loadingData}
                  onClick={sendMessages}
                  className="bg-blue flex h-[3.125rem] w-[9.375rem] cursor-pointer items-center justify-center rounded-4xl text-white"
                >
                  {loadingData ? <LoadingOutlined /> : t('Send')}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 mb-20 h-[15rem] overflow-hidden rounded-[1.25rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.696842114582!2d-0.01973765789862849!3d51.500430475652635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603c29b007673%3A0xf236a9bd4a06d35c!2sHarcourt%20Tower%2C%20South%20Quay%20Plaza!5e0!3m2!1sru!2s!4v1746799273754!5m2!1sru!2s"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};
