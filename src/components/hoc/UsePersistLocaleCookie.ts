import { useRouter } from 'next/router';
import { useEffect } from 'react';
import setLanguage from 'next-translate/setLanguage';

export const usePersistLocaleCookie = () => {
  const { locale, defaultLocale } = useRouter();

  useEffect(() => {
    if (document.cookie.indexOf('NEXT_LOCALE=') < 0) {
      setLocaleCookie(defaultLocale || 'fa');
      setLanguage(defaultLocale || 'fa');
    }
  }, [defaultLocale]);

  useEffect(() => {
    if (locale) {
      setLocaleCookie(locale);
    }
  }, [locale]);

  const setLocaleCookie = (l: string) => {
    const date = new Date();
    const expireMs = 100 * 24 * 60 * 60 * 1000; // 100 days
    date.setTime(date.getTime() + expireMs);
    document.cookie = `NEXT_LOCALE=${l};expires=${date.toUTCString()};path=/`;
  };
};
