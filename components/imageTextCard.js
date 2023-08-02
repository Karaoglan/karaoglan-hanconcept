'use client'
import {Box, Flex, Text} from "@chakra-ui/react";

function ImageTextCard({header, text, isImageRight}) {
  return (
    <Flex flexDirection={isImageRight ? 'row' : 'row-reverse'}>
      <Flex w='50%' flexDirection={'column'}>
        <h2>{header}</h2>
        <Text>{text}</Text>
      </Flex>
      <Box h={400} w={'50%'} bg={'pink.200'}/>
    </Flex>
  )
}

export default ImageTextCard
