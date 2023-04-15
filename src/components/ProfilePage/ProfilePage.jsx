import { Avatar, Box, Center, Heading, Text, VStack } from '@chakra-ui/react';
import { FiEdit, FiTrash } from 'react-icons/fi';

// Mock data for blogs
const blogs = [
  {
    id: 1,
    title: 'Blog post title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Another blog post',
    content:
      'Praesent tincidunt, neque vel commodo vulputate, arcu magna pellentesque enim, ac bibendum est sapien eu odio.',
  },
  {
    id: 3,
    title: 'Another blog post',
    content:
      'Praesent tincidunt, neque vel commodo vulputate, arcu magna pellentesque enim, ac bibendum est sapien eu odio.',
  },
  {
    id: 4,
    title: 'Another blog post',
    content:
      'Praesent tincidunt, neque vel commodo vulputate, arcu magna pellentesque enim, ac bibendum est sapien eu odio.',
  },
  {
    id: 5,
    title: 'Another blog post',
    content:
      'Praesent tincidunt, neque vel commodo vulputate, arcu magna pellentesque enim, ac bibendum est sapien eu odio.',
  },
  {
    id: 6,
    title: 'Another blog post',
    content:
      'Praesent tincidunt, neque vel commodo vulputate, arcu magna pellentesque enim, ac bibendum est sapien eu odio.',
  },
  {
    id: 7,
    title: 'Another blog post',
    content:
      'Praesent tincidunt, neque vel commodo vulputate, arcu magna pellentesque enim, ac bibendum est sapien eu odio.',
  },
];

const ProfilePage = () => {
  return (
    <Box w="full" h="full" bg="#FFFFFF" p="10">
      <VStack spacing="10">
        <Box w="full" display="flex" alignItems="center">
          <Avatar size="2xl" name="John Doe" src={null} bg="#1F2937" />
          <Box ml="5">
            <Heading size="lg" color="#1F2937">
              John Doe
            </Heading>
            <Text color="#1F2937" mt="2">
              john.doe@example.com
            </Text>
          </Box>
        </Box>
        <Box w="full">
          <Heading size="md" color="#1F2937" mb="5">
            Your blogs
          </Heading>
          {blogs.map((blog) => (
            <Box
              key={blog.id}
              w="full"
              border="1px"
              borderColor="#1F2937"
              borderRadius="md"
              p="5"
              mb="5"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Heading size="sm" color="#1F2937" mb="2">
                  {blog.title}
                </Heading>
                <Text color="#1F2937">{blog.content}</Text>
              </Box>
              <Box>
                <FiEdit color="#1F2937" size="1.5em" cursor="pointer" />
                <FiTrash color="#1F2937" size="1.5em" ml="3" cursor="pointer" />
              </Box>
            </Box>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default ProfilePage;
