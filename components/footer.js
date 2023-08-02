'use client'

import {Flex, SimpleGrid, Text} from "@chakra-ui/react";
import Link from "next/link";

function Footer() {
  return (
    <Flex>
      <Link href={'/'}><Text color={'pink'}>LOGO</Text></Link>
      <Flex gap={2} flexDirection={'column'}>
        <Text>office@hanconcept.eu</Text>
        <Text>+43 665 652 54 280</Text>
        <Text>Reithofferplatz 12 , 1150 Wien, Österreich</Text>
        <Text>Mo-Fr 9:00 - 17.00</Text>
        <Link href={'https://facebook.com/burak.karaoglan3'}>Facebook</Link>
        <Link href={'https://instagram.com/burak_karaoglann/'}>Instagram</Link>
        <Link href={'https://twitter.com/burakkaraoglan'}>Twitter</Link>
      </Flex>
    </Flex>
    )
}

export default Footer
