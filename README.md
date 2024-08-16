## Project Brief: DJS10 - Asynchrony

# Loom Video Link:

https://www.loom.com/share/d8dd56987bc847b08bfb2953dfb4ab9e?sid=571a1810-04ec-4d2a-bc00-d64e84c1a67a

# React Blog Posts Fetcher

This project is a simple React application that fetches and displays blog posts from a public API. The application demonstrates best practices in React development, including the separation of concerns, error handling, and the use of custom hooks.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Custom Hook: useFetchPosts](#custom-hook-usefetchposts)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetches blog posts asynchronously from a public API (`https://jsonplaceholder.typicode.com/posts`).
- Handles errors gracefully, displaying a user-friendly message if the API call fails.
- Separates data fetching logic from UI rendering using a custom hook.
- Clean and modular code structure for easy maintenance and scalability.

## Installation

### Clone the repository:

git clone https://github.com/your-username/react-blog-posts-fetcher.git
cd react-blog-posts-fetcher

### Install the dependecies

using npm:

npm install

using yarn:

yarn insall

## Usage

### Start the development server:

using npm:

npm start

using yarn:

yarn start

### Open the application:

Open your web browser and go to http://localhost:3000. You should see a list of blog posts fetched from the API.

## Custom Hook: `useFetchPosts`

The `useFetchPosts` custom hook is responsible for fetching blog posts and managing the application's state. By separating this logic from the UI, we achieve a more modular and maintainable codebase.

### Implementation

The hook handles:

- **Fetching:** Asynchronously fetches blog posts from the API.
- **Error Handling:** If an error occurs, it stores the error message in the state.
- **State Management:** Manages the state for posts and errors.

You can find the implementation in `src/hooks/useFetchPosts.js`.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

```
