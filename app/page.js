'use client'
import Slogan from "@/components/slogan";
import {Box, Button, Flex, Text} from "@chakra-ui/react";
import {ABOUT_US, OUR_MISSION, WHY_WE} from "@/data/content";
import ImageTextCard from "@/components/imageTextCard";
import Offers from "@/components/offers";
import Slider from "@/components/slider";
import References from "@/components/references";
import Link from "next/link";
import {useTranslation} from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <main>
      <Flex flexDirection={'column'} gap={5}>
        <h1>{t('home')}</h1>
        <Slogan/>
        <ImageTextCard header='About US' text={ABOUT_US} isImageRight={true} />
        <ImageTextCard header='Unsere Mission' text={OUR_MISSION} isImageRight={false} />
        <ImageTextCard header='Warum wir' text={WHY_WE} isImageRight={true} />
        <Offers />
        <Flex flexDirection={'column'}>
          <h4>
            ARCHITEKTUR
            VISUALISIRUNGEN
          </h4>
          <h2>
            ENTDECKEN SIE UNSERE WUNDERWELT MIT EINEM BLICK
          </h2>
        </Flex>
        <Slider images={['img/han1.jpeg', 'img/han2.jpeg']} buttonLink={'/portfolio'} buttonText={'MEHR'} />
        <References />
        <Flex flexDirection={'column'}>
          <h3>
            Eine großartige Erfahrung erwartet Sie!
          </h3>
          <Text>
            Treten Sie mit unserem lösungsorientierten Team in Kontakt – Wir freuen uns darauf, Ihre Fragen zu beantworten!
          </Text>
          <Link href={'/contact'}>
            <Button>Kontaktieren Sie uns</Button>
          </Link>
        </Flex>
      </Flex>
    </main>
  )
}
