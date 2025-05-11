import { Suspense } from 'react';

import { Loading } from '@/components';
import { ROUTES } from '@/constants';
import { idCreate } from '@/utils';

import {
  AboutUs,
  Contacts,
  FindTalent,
  Home,
  JobApplication,
  PageNoteFound,
  Vacansies,
} from './lazy.routes';

export const routsData = [
  // Main page
  {
    id: idCreate(),
    title: 'Main page',
    index: true,
    path: ROUTES.home,
    page: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  // About us
  {
    id: idCreate(),
    title: 'About us',
    index: true,
    path: ROUTES.aboutUs,
    page: (
      <Suspense fallback={<Loading />}>
        <AboutUs />
      </Suspense>
    ),
  },
  // Find talent
  {
    id: idCreate(),
    title: 'Find talent',
    index: true,
    path: ROUTES.findTalent,
    page: (
      <Suspense fallback={<Loading />}>
        <FindTalent />
      </Suspense>
    ),
  },
  // Vacansies
  {
    id: idCreate(),
    title: 'Vacansies',
    index: true,
    path: ROUTES.vacansies,
    page: (
      <Suspense fallback={<Loading />}>
        <Vacansies />
      </Suspense>
    ),
  },
  // Job application
  {
    id: idCreate(),
    title: 'Job application',
    index: false,
    path: ROUTES.jobApplication + '/:id',
    page: (
      <Suspense fallback={<Loading />}>
        <JobApplication />
      </Suspense>
    ),
  },
  // Contacts
  {
    id: idCreate(),
    title: 'Contacts',
    index: true,
    path: ROUTES.contacts,
    page: (
      <Suspense fallback={<Loading />}>
        <Contacts />
      </Suspense>
    ),
  },
  // 404
  {
    id: idCreate(),
    title: '404',
    index: false,
    path: '*',
    page: (
      <Suspense fallback={<Loading />}>
        <PageNoteFound />
      </Suspense>
    ),
  },
] as const;
