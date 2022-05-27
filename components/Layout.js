import { Box } from '@chakra-ui/react';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <Box w="80vw" display="flex" flexDirection="column">
      <Nav />
      {children}
    </Box>
  );
};

export default Layout;
