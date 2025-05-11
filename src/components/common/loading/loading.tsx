import { useTranslation } from 'react-i18next';

import './index.css';

export const Loading = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="fixed top-0 left-0 z-[9999] flex h-full w-full items-center justify-center bg-white">
        <div id="wifi-loader">
          <svg className="circle-outer" viewBox="0 0 86 86">
            <circle className="back" cx="43" cy="43" r="40"></circle>
            <circle className="front" cx="43" cy="43" r="40"></circle>
            <circle className="new" cx="43" cy="43" r="40"></circle>
          </svg>
          <svg className="circle-middle" viewBox="0 0 60 60">
            <circle className="back" cx="30" cy="30" r="27"></circle>
            <circle className="front" cx="30" cy="30" r="27"></circle>
          </svg>
          <svg className="circle-inner" viewBox="0 0 34 34">
            <circle className="back" cx="17" cy="17" r="14"></circle>
            <circle className="front" cx="17" cy="17" r="14"></circle>
          </svg>
          <div className="text" data-text={t('Loading...')}></div>
        </div>
      </div>
    </>
  );
};
