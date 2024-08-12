import { useState, useEffect } from "react";

/**
 * A custom React hook to fetch and manage blog posts from an API.
 *
 * @return {Object} An object containing the fetched posts and any error that occurred during the fetching process.
 */
const useFetchPosts = () => {
  // Define the state variables
  const [posts, setPosts] = useState([]); // The fetched posts
  const [error, setError] = useState(null); // Any error that occurred during the fetching process

  // Fetch the blog posts when the component mounts
  useEffect(() => {
    /**
     * Fetches blog posts from the JSONPlaceholder API and updates the application state accordingly.
     *
     * @return {void}
     */
    const fetchPosts = async () => {
      try {
        // Fetch the posts from the JSONPlaceholder API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // Check if the response was successful
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        // Parse the response data as JSON
        const data = await response.json();

        // Update the posts state with the fetched data
        setPosts(data);
      } catch (error) {
        // If an error occurs, update the error state with an error message
        setError("Failed to fetch posts");
      }
    };

    // Call the fetchPosts function when the component mounts
    fetchPosts();
  }, []);

  // Return the posts and error states
  return { posts, error };
};

export default useFetchPosts;
