import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showFullProfile?: boolean;
}

export function Profile({ showFullProfile = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showFullProfile && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Marques Frahm</Text>
          <Text color="gray.300" fontSize="small">
            gabriel_frahm@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Gabriel"
        src="https://github.com/gabrielFrahm.png"
      />
    </Flex>
  );
}
