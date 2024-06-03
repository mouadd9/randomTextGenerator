# Random Message Web App

## Overview

This web application is designed to provide users with random positive messages after they input their name and surname. It's a simple, interactive way to bring a bit of joy and surprise into someone's day.

## Technical Description

The application is built using HTML, CSS, and JavaScript, emphasizing modular JavaScript with ES6 modules. The main components of the application are:

- **HTML**: The single-page application front-end with input forms and display areas for messages.
- **CSS**: Styling is managed using direct imports from Google Fonts and custom styles defined in `style.css`. The application uses media queries to ensure responsiveness across various devices.
- **JavaScript**: The logic is split across three modules:
  - `main.js`: Handles form submission and conditional display of error messages.
  - `stringsDataModule.js`: Manages the generation and display of random messages.
  - `userController.js`: Contains the `user` class that constructs user objects from form data.

### Why These Technologies?

- **HTML and CSS**: Basic web technologies provide the structure and style of the application, making it accessible on any web browser.
- **JavaScript ES6 Modules**: By organizing the code into modules, the application becomes more maintainable and scalable. It also encapsulates functionality, leading to a cleaner global scope and a more structured codebase.
- **CSS Media Queries**: To ensure the application is usable on both desktop and mobile devices, responsive design practices are employed.
- **Google Fonts**: Enhances the UI aesthetics and user experience.

## Project Structure

- `/modules`: Contains all JavaScript modules that handle various functionalities.
- `index.html`: The entry point of the application.
- `package.json`: Manages project metadata and dependencies.
- `README.md`: Provides information about the application and its setup.
- `style.css`: Contains all custom styles for the application.

## Usage

To run the application, simply open the `index.html` file in a web browser. Input your name and surname, and press the button to receive a random message.

## Future Enhancements

- **Connectivity with a backend**: To store user data and possibly return more personalized messages.
- **Expansion of message variety**: Enrich the application by adding more diverse and dynamic messages.
