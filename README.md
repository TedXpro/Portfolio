# My Portfolio - A 3D Interactive Experience

This portfolio website showcases my skills and projects through an interactive 3D environment built with React and Three.js.  Explore my work, learn more about me, and get in touch!

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## Introduction

This project is a personal portfolio website designed to be more than just a static page. It leverages the power of Three.js to create an engaging 3D experience, allowing visitors to explore my projects in a unique and interactive way.  The front-end is built with React, providing a smooth and responsive user interface.

## Features

* **Interactive 3D Environment:** Explore a custom-designed 3D world showcasing my projects.
* **Project Showcases:**  Clickable elements within the 3D environment provide detailed information about each project, including descriptions, technologies used, and links to live demos or repositories.
* **Responsive Design:**  The portfolio adapts seamlessly to different screen sizes, ensuring a consistent experience across devices.
* **Smooth Animations:**  Engaging animations enhance the user experience and create a polished feel.
* **Modern UI/UX:**  A clean and intuitive user interface makes navigating the portfolio effortless.
* **Contact Form:**  An integrated contact form allows visitors to easily reach out to me.

## Technologies Used

* **React:**  A JavaScript library for building user interfaces.
* **Three.js:**  A JavaScript 3D library used for creating and rendering 3D graphics in a web browser.
* **GLTF Loader:** Used for loading 3D models.
* **React Three Fiber:** A React renderer for Three.js.
* **EmailJS:** For handling contact form submissions. *If used, ensure you have configured your EmailJS account and integrated it correctly.*

## Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/TedXpro/Portfolio.git](https://www.google.com/search?q=https://github.com/TedXpro/Portfolio.git)
2. **Navigate to the project repository**
  ```bash
   cd portfolio
3. **Install dependencies**
  ```bash
   npm install
4. **Configure enviroment variables**
  ### Inside .env file at root of the folder(DO NOT COMMIT THIS)

  REACT_APP_EMAILJS_USER_ID=your_emailjs_user_id
  REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
  REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id

## Usage

npm run build
npm run dev

## Project structure

your-portfolio-repo/
├── public/                # Static assets (index.html, favicon, etc.)
│   └── index.html
├── src/                   # Source code
│   ├── components/        # Reusable React components
│   │   ├── ...
│   ├── assets/            # Images and files used
│   │   ├── ...
│   ├── Constants/         # All variables that are used
│   │   ├── ...
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Entry point
│   ├── styles/            # CSS or other styling files
│   │   ├── ...
│   ├── context/           # React Context for state management (if used)
│   ├── utils/             # Utility functions
│   ├── ...
├── .env                  # Environment variables (DO NOT COMMIT)
├── .gitignore            # Files to exclude from version control
├── package.json          # Project dependencies and scripts
├── README.md             # This file
└── ...