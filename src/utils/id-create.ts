/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { getLocalStorage } from './local-storage.utils';

// bu yerda id yaratilmoqda
export function idCreate(): string {
  return 'id' + Math.random().toString(16).slice(2);
}

export const getLangName = (arr: any[], lang?: string) => {
  const nowlang = lang ? lang : getLocalStorage('i18nextLng');
  if (!nowlang) return arr?.filter((e) => e?.language?.toLowerCase() == 'uz')?.[0];
  return arr?.filter((e) => e?.language?.toLowerCase() == nowlang)?.[0];
};

export const getLangNameObject = (obj: any, lang?: string) => {
  const nowlang = lang ? lang : getLocalStorage('i18nextLng');
  if (nowlang == 'en') return obj?.nameEn ? obj?.nameEn : obj?.name;
  else if (nowlang == 'ru') return obj?.nameRu ? obj?.nameRu : obj?.name;
  else return obj?.name;
};

// Plaginlarni ulaymiz
dayjs.extend(utc);
dayjs.extend(timezone);
export function dayjsFormat(date: any, format: string = 'DD.MM.YYYY | HH:mm:ss') {
  if (!date) return '-';
  return dayjs(date)?.tz('Asia/Tashkent')?.format(format);
}

export const getDateForm = (e: any, format: any = 'YYYY-MM-DD') => {
  if (e && format) return dayjs(e)?.format(format);
  else if (e && !format) return dayjs(e);
  else return '';
};

export function buildUrl(base: string, params: any): string {
  const queryParts = Object.keys(params)
    .filter((key) => params[key] !== undefined && params[key] !== null && params[key]) // Faqat aniqlangan va null bo'lmagan qiymatlarni qabul qiladi
    .map((key, index) => `${index === 0 ? '?' : '&'}${key}=${params[key]}`); // Birinchi parametrga ? va qolganlariga &

  return base + queryParts.join('');
}
