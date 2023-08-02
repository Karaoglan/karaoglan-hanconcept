import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

function LanguageSwitch() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Button
      variant={'ghost'}
      onClick={() => changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
    >
      {i18n.language === 'tr' ? (
        <Image
          width="32"
          height="32"
          src={'/svg/flag-turkey.svg'}
          alt="turkish language"
        />
      ) : (
        <Image
          width="32"
          height="32"
          src={'/svg/flag-england.svg'}
          alt="english language"
        />
      )}
    </Button>
  );
}

export default LanguageSwitch;
