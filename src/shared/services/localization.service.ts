import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLocale from '../../locales/enLocale.json';

class I18Service {
  init = (initialLanguage: string) => {
    i18n.use(initReactI18next).init({
      resources: {
        en: {
          translation: enLocale,
        },
      },
      lng: initialLanguage,
      fallbackLng: 'en-US',
      interpolation: {
        escapeValue: false,
      },
    });
    return i18n;
  };

  onChangeLocaleBundle = async (bundle: any, localeCode?: string | null) => {
    const locale = localeCode || 'en-US';
    i18n.addResourceBundle(locale, 'translation', bundle);
    await i18n.changeLanguage(locale);
  };

  setDefaultLocale = () => {
    i18n.changeLanguage('en-US');
  };
}

export const i18Service = new I18Service();
