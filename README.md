# ModelView14 Blog Platform

-ModelView14 is a streamlined blogging platform designed to allow users to easily share their thoughts through blog posts and interact with each other. Built with Express.js and Sequelize, it offers a user-friendly environment for blog creation, management, and user interactions.

## Features

- **User Authentication:** Secure sign-up, login, and logout functionalities.
- **Blog Posts Management:** Users can effortlessly create, read, update, and delete their blog posts.
- **Simplified User Interface:** A clean and intuitive interface enhances the user experience, making blog interactions straightforward.

## Technologies

- **Backend:** Node.js with Express.js
- **ORM:** Sequelize for MySQL database management
- **Frontend:** Handlebars.js for dynamic page rendering
- **Session Management:** express-session with connect-session-sequelize for secure user sessions
- **Password Hashing:** bcrypt for secure password storage

## Structure

- **`config/`**: Contains Sequelize configuration and connection setup.
- **`controllers/`**: Holds controller files for routing logic.
- **`migrations/`**: Sequelize migrations for database schema.
- **`models/`**: Sequelize models defining the schema for User and Post entities.
- **`public/`**: Static files like stylesheets.
- **`routes/`**: Express routes for handling user, blog post, and authentication routes.
- **`seeders/`**: Sequelize seeders for populating the database with initial data.
- **`views/`**: Handlebars templates for rendering HTML.

## Usage
![Screenshot (1)](https://github.com/Fablecain/modelview14/assets/139589280/699c85c0-419e-497b-92c1-98a87b42568b)

Heroku deployment link- https://modelview14-c33df2a5791c.herokuapp.com/

## Contribution
Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
Distributed under the MIT License. See LICENSE for more information.
