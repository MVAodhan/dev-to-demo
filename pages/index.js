import { useRef, useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import MyGrid from '../components/MyGrid';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import { useDimensions } from '@chakra-ui/react';

const Home = () => {
  const mainRef = useRef();
  const dimensions = useDimensions(mainRef, true);

  const [size, setSize] = useState('');

  useEffect(() => {
    if (dimensions) {
      let width = dimensions.borderBox.width;
      switch (true) {
        case width < 499:
          setSize('base');
          break;
        case width >= 499 && width < 696:
          setSize('sm');
          break;
        case width >= 696 && width < 945:
          setSize('md');
          break;
        case width >= 945:
          setSize('lg');
          break;
      }
    }
  }, [dimensions]);

  return (
    <>
      <Nav />
      <Box
        w="100vw"
        h="100vh"
        display="flex"
        justifyContent="center"
        ref={mainRef}
        alignItems="flex-start"
        as="main"
      >
        <Layout>
          <MyGrid />
          <Box fontSize={{ base: '20px', sm: '24px' }} mt="30px">
            <Text display="flex" justifyContent="center">
              Width: {dimensions && dimensions.borderBox.width}px
            </Text>
            <Text display="flex" justifyContent="center">
              Custom breakpoint size: {size}
            </Text>
          </Box>
        </Layout>
      </Box>
    </>
  );
};
export default Home;
