# Quera Clone Server

A server-side implementation of a Quera clone using Node.js and Express.js.

## Features
- Create Post
- Edit Post
- View Post Details
- Delete Post

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/quera-clone-server.git
    cd quera-clone-server
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables in a `.env` file:
    ```
    PORT=3000
    DB_URI=your_database_uri
    ```

4. Start the server:
    ```sh
    npm start
    ```

## API Endpoints

- **Create Post:** `POST /posts`
- **Edit Post:** `PUT /posts/:id`
- **View Post:** `GET /posts/:id`
- **Delete Post:** `DELETE /posts/:id`

