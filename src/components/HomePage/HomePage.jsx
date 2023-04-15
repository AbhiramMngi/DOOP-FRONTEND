import { Box, Grid, Heading, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import BlogCard from "./components/BlogCard";

const blogs = [
  {
    id: 1,
    title: "My First Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "My Second Blog",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    image:
      "https://images.unsplash.com/photo-1542729429-9f9f0c24b2f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  // Add more blogs here
];

function HomePage() {
  return (
    <Box p={5} mt="2vh">
      <Box bg="gray.100" p={5} borderRadius="md" mb={5}>
        <Heading as="h1" size="xl" mb={3}>
          Welcome to your blog page!
        </Heading>
        <Button leftIcon={<AddIcon />} colorScheme="teal" size="md">
          Create new
        </Button>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </Grid>
    </Box>
  );
}

export default HomePage;
