import React from "react";
import useFetchPosts from "./FetchPosts";

const BlogPosts = () => {
  const { posts, error } = useFetchPosts();

  if (error) {
    return <div>{error}</div>;
  }

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
