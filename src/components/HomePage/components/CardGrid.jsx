import React from 'react';
import BlogCard from './BlogCard';

const CardGrid = () => {
  const blogCards = new Array(16);
  blogCards.map((value, index) => {
    return <BlogCard />;
  });
  return <div className="grid">{blogCards}</div>;
};
