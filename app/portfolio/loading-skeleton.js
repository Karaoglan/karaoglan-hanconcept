import {Box, Grid, Image, SimpleGrid} from "@chakra-ui/react";

export function LoadingSkeleton() {
  return (
    <SimpleGrid
      minChildWidth="150px"
      spacing="40px"zes
      maxW="xl"
      alignItems="center"
      justifyContent="center"
      margin="100px auto"
    >
      <Box>
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov"/>
      </Box>
      <Box>
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov"/>
      </Box>
      <Box>
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov"/>
      </Box>
      <Box>
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov"/>
      </Box>
      <Box>
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov"/>
      </Box>
      <Box>
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov"/>
      </Box>
    </SimpleGrid>
  )
}
