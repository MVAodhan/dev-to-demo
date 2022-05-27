import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#201D29',
  },
  breakpoints: {
    sm: '499px',
    md: '696px',
    lg: '945px',
  },
});

export default theme;
