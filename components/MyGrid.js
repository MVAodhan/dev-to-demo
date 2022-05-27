import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import ItemAvatar from './ItemAvatar';
import Details from './Details';

import profiles from '../profiles.json';

const MyGrid = () => {
  return (
    <>
      {' '}
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
        h="100%"
        gap="10px"
        overflow="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'primary',
            borderRadius: '24px',
          },
        }}
      >
        {' '}
        {profiles.map((profile) => (
          <GridItem
            key={profile.id}
            h="150px"
            bg="primary"
            borderRadius="10"
            color="white"
            display="flex"
            pl={{ base: '10px', sm: '25px', lg: '15px' }}
            alignItems="center"
          >
            <Box display="flex" alignItems="center">
              <ItemAvatar imageSrc={profile.imageSrc} name={profile.name} />
            </Box>
            <Details
              name={profile.name}
              title={profile.title}
              link={profile.linkSrc}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default MyGrid;
