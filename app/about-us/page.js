'use client'
import {Box, Flex, Text} from "@chakra-ui/react";
import {ABOUT_US, WHY_WE} from "@/data/content";
import Offers from "@/components/offers";

function AboutUs() {
  return (
    <Flex direction={'column'}>
      <Box>
        <Flex>
          <Flex w={'70%'} flexDirection={'column'}>
            <Box w={'100%'} h={'250'} bg={"gray.200"}></Box>
            <Text>{ABOUT_US}</Text>
          </Flex>
          <Flex w={'30%'} flexDirection={'column'}>
            <h2>Warum wir</h2>
            <Text>{WHY_WE}</Text>
          </Flex>
        </Flex>
      </Box>
      <Offers />
    </Flex>

  )
}

export default AboutUs
