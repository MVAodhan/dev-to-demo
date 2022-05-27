import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Details = ({ name, title, link }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      pl={{ base: '10px', sm: '25px', lg: '15px' }}
      fontSize={{ base: '12px', sm: '14px', md: '16px', lg: '14px' }}
    >
      <Text fontSize="20px"> {name} </Text>
      <Text as="i">{title}</Text>
      <Text color="#03fcfc" as="i">
        <Link href={link}>{link}</Link>
      </Text>
    </Box>
  );
};

export default Details;
