'use client'

import {Flex, SimpleGrid, Text} from "@chakra-ui/react";
import Link from "next/link";
import LanguageSwitch from "@/components/languageSwitch";

function Header() {
  return (
    <>
      <Link href={'/'}><Text color={'pink'}>LOGO</Text></Link>
      <Flex gap={2}>
        <Link href={'/about-us'}>About US</Link>
        <Link href={'/portfolio'}>Portfolio</Link>
        <Link href={'/services'}>Services</Link>
        <Link href={'/contact'}>Contact</Link>
      </Flex>
      <LanguageSwitch />
    </>
    )
}

export default Header
