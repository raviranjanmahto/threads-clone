import {
  Avatar,
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

const UserHeader = () => {
  const toast = useToast();

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(() =>
      toast({
        title: "Copied to clipboard",
        status: "success",
        duration: 4000,
        isClosable: true,
      })
    );
  };

  return (
    <VStack gap={4} alignItems='start'>
      <Flex justifyContent='space-between' w='full'>
        <Box>
          <Text fontSize='2xl' fontWeight='bold'>
            Raviranjan Mahto
          </Text>
          <Flex gap={2} alignItems='center'>
            <Text fontSize='sm'>@raviranjanmahto</Text>
            <Text
              fontSize='xs'
              bg='gray.dark'
              color='gray.light'
              p={1}
              rounded='full'
            >
              threads.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar
            name='Raviranjan Mahto'
            // src='/zuck-avatar.png'
            size='lg'
            border='2px'
          />
        </Box>
      </Flex>
      <Text>Co-founder, executive chairman and CEO of Meta platform.</Text>
      <Flex w='full' justifyContent='space-between'>
        <Flex gap={2} alignItems='center'>
          <Text color='gray.light'>7.2M followers</Text>
          <Box w={1} h={1} mt={1} bg='gray.light' rounded='full'></Box>
          <Link color='gray.light' href='https://instagram.com' target='_blank'>
            instagram.com
          </Link>
        </Flex>
        <Flex>
          <Box className='icon'>
            <BsInstagram size={24} cursor='pointer' />
          </Box>
          <Box className='icon'>
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor='pointer' />
              </MenuButton>
              <Portal>
                <MenuList bg='gray.dark'>
                  <MenuItem bg='gray.dark' onClick={copyUrl}>
                    Copy link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Flex w='full'>
        <Flex
          flex={1}
          fontWeight='bold'
          borderBottom='1px solid white'
          pb={3}
          justifyContent='center'
          cursor='pointer'
        >
          <Text>Threads</Text>
        </Flex>
        <Flex
          flex={1}
          fontWeight='bold'
          borderBottom='1px solid gray'
          color='gray.light'
          pb={3}
          justifyContent='center'
          cursor='pointer'
        >
          <Text>Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
