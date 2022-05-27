import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Box w="80vw" display="flex" flexDirection="column">
      {children}
    </Box>
  );
};

export default Layout;
