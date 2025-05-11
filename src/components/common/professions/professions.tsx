/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { WorkCard } from '@/components';
import { QUERY_KEY, ROUTES } from '@/constants';
import { useGet } from '@/hooks';
import { buildUrl } from '@/utils';

export const Professions = () => {
  const { t } = useTranslation();

  const { data } = useGet({
    url: buildUrl('vacancies', {
      page: 1,
      limit: 6,
    }),
    queryKey: [QUERY_KEY.vacancies, 1, 6],
  });

  return (
    <>
      <div className="my-20 max-md:my-10">
        <h3 className="text-dark-blue text-2xl !font-extrabold uppercase">
          {t('Work by professions')}
        </h3>
        <div className="my-6 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {data?.data?.map((item: any) => <WorkCard key={item?._id} {...item} />)}
        </div>
        <Link
          to={ROUTES.vacansies}
          className="bg-border/40 text-dark-blue block w-full rounded-4xl p-3 text-center text-base !font-medium"
        >
          {t('See all Vacancy')}
        </Link>
      </div>
    </>
  );
};
