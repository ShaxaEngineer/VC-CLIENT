import { FC } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { ARROW, EMPTY } from '@/assets';
import { ROUTES } from '@/constants';
import { imgUrl } from '@/service';

interface IWorkCard {
  _id: string;
  vacancy_name: string;
  vacancy_category: string;
  vacancy_image: string;
  vacancy_positions: string[];
}

export const WorkCard: FC<IWorkCard> = ({
  _id,
  vacancy_image,
  vacancy_name,
  // vacancy_category,
  // vacancy_positions,
}) => {
  return (
    <div className="group relative flex h-[22rem] w-full items-end justify-center overflow-hidden rounded-[1.25rem] p-4">
      <img
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        src={vacancy_image ? imgUrl + vacancy_image : EMPTY}
        alt="Work by profession"
        loading="lazy"
      />
      <Link
        to={`${ROUTES.jobApplication}/${_id}`}
        className={clsx(
          'text-dark-blue group flex w-full items-center justify-between gap-4 rounded-xl bg-white px-6 py-3 text-xl !font-bold max-md:text-base',
        )}
      >
        {vacancy_name}
        <span className="bg-blue flex h-[3rem] w-[3rem] items-center justify-center rounded-full text-white max-md:h-[2.625rem] max-md:w-[2.625rem]">
          <ARROW className="size-4 rotate-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-45" />
        </span>
      </Link>
    </div>
  );
};
