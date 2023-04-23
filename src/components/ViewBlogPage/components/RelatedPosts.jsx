import React from "react";

const posts = [
    {
      id: 1,
      title: "Post 1",
      author: "John Doe",
      date: "April 20, 2022",
      image: "https://source.unsplash.com/random/300x200",
    },
    {
      id: 2,
      title: "Post 2",
      author: "Jane Smith",
      date: "May 1, 2022",
      image: "https://source.unsplash.com/random/300x200",
    },
    {
      id: 3,
      title: "Post 3",
      author: "Bob Johnson",
      date: "June 5, 2022",
      image: "https://source.unsplash.com/random/300x200",
    },
  ];

const RelatedPosts = () => {
  return (
    <div className="bg-white p-6  shadow">
      <h2 className="text-lg font-medium mb-4">Related Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="flex items-center mb-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-16 h-16 object-cover rounded-lg mr-4"
          />
          <div>
            <h3 className="text-base font-medium">{post.title}</h3>
            <p className="text-gray-500">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedPosts;
