import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { NEXT } from '@/assets';
import { ROUTES } from '@/constants';

interface BreadcrumbsProps {
  menu: string;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ menu }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="my-2 max-md:my-1">
        <div className="flex items-center justify-start gap-2">
          <Link to={ROUTES.home} className="text-sm !font-semibold text-[#525A77]">
            {t('Main page')}
          </Link>
          <p className="text-xs text-[#525A77]">
            <NEXT className="size-2.5" />
          </p>
          <p className="text-blue text-sm">{menu}</p>
        </div>
      </div>
    </>
  );
};
