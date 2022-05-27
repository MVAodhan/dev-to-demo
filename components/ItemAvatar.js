import { Avatar } from '@chakra-ui/react';
const ItemAvatar = ({ name, imageSrc }) => {
  return (
    <Avatar
      name={name}
      src={imageSrc}
      alignSelf="center"
      height={{ base: '50px', md: '70px' }}
      width={{ base: '50px', md: '70px' }}
    ></Avatar>
  );
};

export default ItemAvatar;
