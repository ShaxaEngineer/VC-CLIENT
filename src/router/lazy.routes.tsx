import { lazy } from 'react';

export const Home = lazy(() => import('@/pages').then((module) => ({ default: module.Home })));
export const Vacansies = lazy(() =>
  import('@/pages').then((module) => ({ default: module.Vacansies })),
);
export const Contacts = lazy(() =>
  import('@/pages').then((module) => ({ default: module.Contacts })),
);
export const AboutUs = lazy(() =>
  import('@/pages').then((module) => ({ default: module.AboutUs })),
);
export const FindTalent = lazy(() =>
  import('@/pages').then((module) => ({ default: module.FindTalent })),
);
export const JobApplication = lazy(() =>
  import('@/pages').then((module) => ({ default: module.JobApplication })),
);
export const PageNoteFound = lazy(() =>
  import('@/pages').then((module) => ({ default: module.PageNoteFound })),
);
