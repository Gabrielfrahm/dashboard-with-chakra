import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gabriel Marques Frahm</Text>
        <Text color="gray.300" fontSize="small">
          gabriel_frahm@hotmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Gabriel"
        src="https://github.com/gabrielFrahm.png"
      />
    </Flex>
  );
}
