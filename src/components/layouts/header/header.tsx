/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';

import { CloseOutlined, DownOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import clsx from 'clsx';
import { gsap } from 'gsap';
import AnimateHeight from 'react-animate-height';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';

import { ARROW, EN, LOGO, MENU, RU, UZ } from '@/assets';
import { LetsTalk } from '@/components';
import { useLang } from '@/hooks';
import i18n from '@/i18n';
import { routsData } from '@/router';

export const Header = () => {
  const { t } = useTranslation();
  const { nowlang } = useLang();
  const navigate = useNavigate();
  const [activeLang, setactiveLang] = useState<any>({ code: 'uz', name: "O'zbek", img: UZ });
  const [height, setHeight] = useState<'auto' | number>(0);
  // modal
  const [parentModal, setParentModal] = useState(false);

  const languageList = [
    { code: 'uz', name: "O'zbek", img: UZ },
    { code: 'en', name: 'English', img: EN },
    { code: 'ru', name: 'Русский', img: RU },
  ] as const;

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // tilni activ bulgandagi holati
  useEffect(() => {
    if (nowlang) {
      const activedata = languageList?.filter((item) => item.code == nowlang)?.[0];
      setactiveLang(activedata);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowlang]);

  // GSAP uchun referenslar - HTMLLIElement yoki null bo'lishi mumkin
  const menuRefs = useRef<(HTMLLIElement | null)[]>([]);
  const closeButton = useRef<HTMLLIElement | null>(null);

  const isOpenMenu = () => {
    setHeight('auto');
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    // Har bir menu elementi uchun animatsiya
    menuRefs.current.forEach((menu, index) => {
      tl.fromTo(
        menu,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, delay: index * 0 }, // Har bir element 0.2s kechikish bilan
        '-=0.3', // Har bir elementni animatsiya qilish uchun vaqtni belgilash
      );
    });
    // Close button animatsiyasi
    tl.fromTo(
      closeButton.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7 },
      '-=0.3',
    );
  };

  return (
    <>
      {/* medium section */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white">
        <div className="container mx-auto flex items-center justify-between py-5 max-md:py-3">
          <div className="h-[2rem] w-[6.25rem]">
            <img
              loading="lazy"
              src={LOGO}
              onClick={() => navigate('/')}
              alt="this is logo"
              className="block h-full w-full cursor-pointer object-contain object-center"
            />
          </div>
          <ul className="flex items-center justify-center gap-3 max-lg:hidden">
            {routsData?.map((item) => {
              if (item?.index)
                return (
                  <li key={item?.id}>
                    <NavLink
                      to={item?.path}
                      className={({ isActive }) =>
                        clsx(
                          'rounded-lg px-3 py-1 text-sm !font-semibold text-nowrap transition-all duration-300',
                          isActive ? 'bg-blue text-white' : 'bg-transparent text-neutral-600',
                          'hover:bg-blue hover:text-white',
                        )
                      }
                    >
                      {t(`${item?.title}`)}
                    </NavLink>
                  </li>
                );
            })}
          </ul>
          <div className="flex items-center justify-end gap-6 max-md:gap-4">
            <Popover
              placement="bottomRight"
              title={t('Tilni tanlang')}
              content={
                <div className="flex w-full flex-col items-center justify-center gap-0.5">
                  {languageList.map((item) => {
                    return (
                      <button
                        key={item.code}
                        type="button"
                        className={clsx(
                          nowlang == item.code && 'bg-blue/5',
                          'hover:bg-gray hover:dark:bg-gray-dark flex w-full cursor-pointer items-center justify-start gap-3 rounded-md px-3 py-1 transition-all',
                        )}
                        onClick={() => changeLang(item.code)}
                      >
                        <img
                          loading="lazy"
                          src={item?.img}
                          alt="flag"
                          className="size-6 rounded-full object-cover object-center"
                        />
                        <span className="text-lg font-medium text-black dark:text-white">
                          {item.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              }
            >
              <button
                type="button"
                className={clsx(
                  'border-border flex w-[4.875rem] cursor-pointer items-end justify-center gap-2 rounded-lg border px-4 py-2',
                )}
              >
                <span className="text-sm !font-semibold text-black dark:text-white">
                  {activeLang?.code == 'uz'
                    ? activeLang?.name?.slice(0, 4)
                    : activeLang?.name?.slice(0, 3)}
                </span>
                <span className="text-xs !font-semibold text-black dark:text-white">
                  <DownOutlined />
                </span>
              </button>
            </Popover>
            <button
              onClick={() => setParentModal(true)}
              className={clsx(
                'group bg-blue flex items-center justify-center gap-4 rounded-[2.75rem] px-5 py-2 text-sm !font-medium text-white max-lg:hidden',
              )}
            >
              {t('Let’s talk')}
              <ARROW className="size-[0.625rem] rotate-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-45" />
            </button>
            <button
              onClick={isOpenMenu}
              className={clsx(
                'group bg-blue hidden size-10 items-center justify-center rounded-full text-base !font-medium text-white max-lg:flex',
              )}
            >
              <MENU className="h-[0.625rem] w-[0.9375rem]" />
            </button>
          </div>
        </div>
      </header>
      {/* mobile section */}
      <div className="fixed top-0 left-0 z-[51] w-full overflow-hidden">
        <AnimateHeight duration={500} height={height}>
          <div className="flex h-[100vh] min-h-max w-full items-center justify-center bg-white">
            <ul className="flex flex-col items-center justify-center gap-4">
              {routsData?.map((item, index: number) => {
                if (item?.index)
                  return (
                    <li ref={(el: any) => (menuRefs.current[index] = el)} key={item?.id}>
                      <NavLink
                        onClick={() => setHeight(0)}
                        to={item?.path}
                        className={({ isActive }) =>
                          clsx(
                            'group text-3xl !font-semibold text-nowrap transition-all duration-300',
                            isActive ? 'text-blue gap-5' : 'text-dark-blue gap-3',
                            'flex items-center justify-center',
                          )
                        }
                      >
                        {t(`${item?.title}`)}
                        <ARROW className="size-5 rotate-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-45" />
                      </NavLink>
                    </li>
                  );
              })}
              <li ref={closeButton} className="mt-5">
                <button
                  onClick={() => setHeight(0)}
                  className={clsx(
                    'group text-3xl !font-semibold text-nowrap transition-all duration-300',
                    'text-dark-blue gap-3',
                    'flex items-center justify-center',
                  )}
                >
                  {t('Close')}
                  <CloseOutlined />
                </button>
              </li>
            </ul>
          </div>
        </AnimateHeight>
      </div>
      <div className="h-[4.875rem] w-full"></div>
      <LetsTalk openModal={parentModal} setOpenModal={setParentModal} />
    </>
  );
};
