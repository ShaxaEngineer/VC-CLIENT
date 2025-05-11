import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { INSTAGRAM, LINKEDIN, LOGOWHITE, TELEGRAM } from '@/assets';
import { ROUTES } from '@/constants';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-extra-blue rounded-t-[1.25rem] py-6">
        <div className="container mx-auto">
          {/* top footer */}
          <div className="flex items-center justify-between">
            <div className="h-max w-[7rem]">
              <img
                loading="lazy"
                src={LOGOWHITE}
                alt="This is logo"
                className="h-full w-full object-contain object-center"
              />
            </div>
            <div className="flex w-max items-center gap-2.5">
              {/* <a
                target="_blank"
                href="#"
                className="flex size-9 items-center justify-center rounded-lg border border-white/[12%] text-white"
              >
                <FACEBOOK className="size-5" />
              </a> */}
              <a
                target="_blank"
                href="https://www.instagram.com/thepwr.agency?igsh=MTBndHc2cjRsY3JjcA%3D%3D&utm_source=qr"
                className="flex size-9 items-center justify-center rounded-lg border border-white/[12%] text-white"
              >
                <INSTAGRAM className="size-5" />
              </a>
              <a
                target="_blank"
                href="https://t.me/thepwr_agency"
                className="flex size-9 items-center justify-center rounded-lg border border-white/[12%] text-white"
              >
                <TELEGRAM className="size-5" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/thepwragency/"
                className="flex size-9 items-center justify-center rounded-lg border border-white/[12%] text-white"
              >
                <LINKEDIN className="size-5" />
              </a>
            </div>
          </div>
          <div className="my-6 h-[0.0625rem] w-full bg-white/[12%]"></div>
          {/* body footer */}
          <div className="grid grid-cols-5 items-start gap-16 max-lg:grid-cols-2 max-lg:gap-10 max-sm:gap-6">
            {/* contacts */}
            <div className="flex flex-col items-center justify-center gap-4 max-lg:col-span-2">
              <div className="flex w-full flex-col items-start justify-start gap-1 rounded-sm bg-white/[4%] px-3 py-2">
                <a href="tel: +44 020 3370 6657" className="text-base text-white">
                  +44 020 3370 6657
                </a>
                <p className="text-sm text-white/50">{t('Contact Center 24/7')}</p>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-1 rounded-sm bg-white/[4%] px-3 py-2">
                <a href="mailto: info@thepwragency.co.uk" className="text-base text-white">
                  info@thepwragency.co.uk
                </a>
                <p className="text-sm text-white/50">{t('Email')}</p>
              </div>
            </div>
            {/* menus */}
            <div className="flex flex-col items-start justify-start gap-3">
              <Link to={ROUTES.home} className="text-base text-white">
                {t('Main page')}
              </Link>
              <Link to={ROUTES.aboutUs} className="text-sm text-white/60">
                {t('About us')}
              </Link>
              <Link to={ROUTES.contacts} className="text-sm text-white/60">
                {t('Contacts')}
              </Link>
            </div>
            {/* menus */}
            <div className="flex flex-col items-start justify-start gap-3">
              <Link to={ROUTES.findTalent} className="text-base text-white">
                {t('Find talent')}
              </Link>
              <Link to={ROUTES.vacansies} className="text-sm text-white/60">
                {t('Vacansies')}
              </Link>
            </div>
            {/* menus */}
            {/* <div className="flex flex-col items-start justify-start gap-3"></div> */}
            {/* menus */}
            {/* <div className="flex flex-col items-start justify-start gap-3"></div> */}
          </div>
          {/* bottom footer */}
          <div className="mt-20 flex items-center justify-between gap-4 rounded-md bg-white/[4%] px-6 py-3 max-md:mt-10 max-sm:flex-col">
            <p className="text-xs text-white/50">© PWR {new Date().getFullYear()}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to={'/'} className="text-xs text-white/50">
                Privacy Policy
              </Link>
              <Link to={'/'} className="text-xs text-white/50">
                Terms & Conditions
              </Link>
              <Link to={'/'} className="text-xs text-white/50">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
