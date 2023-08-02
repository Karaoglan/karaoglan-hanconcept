'use client'

import {CacheProvider} from '@chakra-ui/next-js'
import {ChakraProvider} from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'
import {I18nextProvider} from "react-i18next";
import i18next from 'i18next';
import translationTR from '/public/locales/tr/translation.json';
import translationEN from '/public/locales/en/translation.json';
import detector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

i18next.use(detector).init({
  fallbackLng: 'en', // use en if detected lng is not available
  keySeparator: false, // we do not use keys in form messages.welcome
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources,
});

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

export const theme = extendTheme({ colors })

export function Providers({children}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <I18nextProvider i18n={i18next}>
          {children}
        </I18nextProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}
