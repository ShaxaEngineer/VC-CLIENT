/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { Breadcrumbs, Paginations, WorkCard } from '@/components';
import { QUERY_KEY } from '@/constants';
import { useGet } from '@/hooks';
import { buildUrl } from '@/utils';

export const Vacansies = () => {
  const { t } = useTranslation();

  // pagination
  const location = useLocation();
  const query: any = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get('page')) || 1;
  const pageSize = parseInt(query.get('size')) || 6;

  const { data } = useGet({
    url: buildUrl('vacancies', {
      page: currentPage,
      limit: pageSize,
    }),
    queryKey: [QUERY_KEY.vacancies, currentPage, pageSize],
  });

  return (
    <>
      <div className={clsx('container mx-auto')}>
        <Breadcrumbs menu={t('Vacansies')} />
        <div className="my-10 max-md:my-5">
          <h3 className="text-dark-blue text-2xl !font-extrabold uppercase">
            {t('Work by professions')}
          </h3>
          <div className="my-6 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {data?.data?.map((item: any) => <WorkCard key={item?._id} {...item} />)}
          </div>
          <Paginations data={data?.meta} currentPage={currentPage} pageSize={pageSize} />
        </div>
      </div>
    </>
  );
};
