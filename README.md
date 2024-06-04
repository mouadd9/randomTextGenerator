# Dynamic Message Generator Web Application

## Project Overview

This web application allows users to input their name and surname to receive a custom, randomly generated message based on predefined templates. The application is structured to demonstrate the use of ES6 modules in a modern JavaScript application, encapsulating different functionalities like user management and message generation into separate modules.

## Technologies Used

### JavaScript (ES6+)

- **Classes and Modules**: Utilizes modern JavaScript classes and module system (ES6 modules) to organize the codebase into manageable parts.
- **DOM Manipulation**: Interacts with the HTML document using standard DOM API to dynamically update the content based on user input.

### HTML5

- **Semantic Structure**: Uses HTML5 elements to structure the application UI clearly and semantically.
- **Responsive Design**: Ensures the application is usable on both desktop and mobile devices using responsive design techniques.

### CSS3

- **Flexbox**: Employs Flexbox to layout components in a flexible and efficient manner across different screen sizes.
- **Media Queries**: Enhances the responsiveness of the application with CSS media queries, adjusting the layout for different device and viewport sizes.
- **Google Fonts**: Integrates custom fonts from Google Fonts to enhance UI aesthetics.

### Google Fonts

- **DM Serif Display and Roboto Slab**: These fonts are imported to improve the visual design and user experience of the application.

## Key Components

### userClass.js

- Manages user data creation with methods to retrieve user information safely.

### messageClass.js

- Generates random messages using arrays of greetings, advice, and closings, which are combined dynamically.

### messageController.js

- Handles the interaction between the user input from the web interface and the message generation logic.

### main.js

- Initializes the application, sets up event listeners, and integrates the user input handling with message output.

## Usage

To use the application:
1. Open `index.html` in a web browser.
2. Enter your name and surname in the provided form fields.
3. Click the button to generate and view a personalized message.

## Setup

No additional setup is required beyond opening the project in a web browser that supports modern JavaScript features like modules.
