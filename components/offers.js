import {Box, Flex, Text} from "@chakra-ui/react";

function Offers() {
  return (
    <Flex flexDirection={'column'} gap={5}>
      <h2>Erleben Sie mit uns das Außergewöhnliche</h2>
      <Flex gap={2}>
        <Box>
          <Text>KUNDENZUFRIEDENHE
            Unser Ziel ist Ihre Zufriedenheit</Text>
        </Box>
        <Box>
          <Text>LÖSUNGSORIENTIERT
            Mit unserem lösungsorientierten Ansatz verwandeln wir Probleme in Chancen</Text>
        </Box>
        <Box>
          <Text>FAIRE ANGEBOTE
            Fair angebotene Preise schaffen Vertrauen</Text>
        </Box>
        <Box>
          <Text>Qualifikation
            Qualifikation ist der Schlüssel zum Erfolg</Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Offers
