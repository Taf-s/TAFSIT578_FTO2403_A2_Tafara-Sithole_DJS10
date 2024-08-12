import React from "react";
import useFetchPosts from "./FetchPosts";

/**
 * A React component that fetches and displays a list of blog posts.
 *
 * @return {JSX.Element} A JSX element representing the blog posts list.
 */
const BlogPosts = () => {
  // Fetch the blog posts and error state using the custom hook.
  const { posts, error } = useFetchPosts();

  // If there is an error, display the error message.
  if (error) {
    return <div>{error}</div>;
  }

  // If there are no posts, display a loading message.
  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  // Render the list of blog posts.
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {/* Map over the posts array and render each post. */}
        {posts.map((post) => (
          <li key={post.id}>
            {/* Display the post title. */}
            <h2>{post.title}</h2>
            {/* Display the post body. */}
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
