# Animal Spotting Web Application

**Animal Spotting Web Application** is a comprehensive project comprising both frontend and backend components that work together to provide a seamless user experience for managing and tracking animal sightings and trails. This project allows users to interact with animal data, create sightings, and explore various trails. Below, you will find an overview of the project, its purpose, technologies used, and instructions on getting started.

## Project Overview and Purpose

The **Animal Spotting Web Application** is a full-stack web application developed to demonstrate the concepts and tools used to build frontends with React and backends with Node.js and Express. 

Please be aware that this project is intended for educational purposes and will require additional enhancements to be in a production-ready state. It serves primarily as a reference for students looking to learn about fundamental web development techniques and technologies, including React, Node.js, Express, and API integration.

## Technologies Used

This project relies on various technologies and libraries used in both the frontend and backend components.

### Frontend (animals-frontend-react)

- [React](https://www.npmjs.com/package/react): A JavaScript library for building component based user interfaces.

- [React Router DOM](https://www.npmjs.com/package/react-router-dom): A library for adding routing functionality to React applications.

- [DaisyUI](https://www.npmjs.com/package/daisyui): A UI component library for tailwindcss.

- [vite](https://www.npmjs.com/package/vite): A build tool that serves your code via native ES modules with dynamic imports.

- [tailwindcss](https://www.npmjs.com/package/tailwindcss): A utility-first CSS framework for rapidly building custom designs.

### Backend (animals-backend-api)

- [Express](https://www.npmjs.com/package/express): A fast and minimalist web framework for Node.js, used for handling routing, middleware, and HTTP request/response management.

- [bcryptjs](https://www.npmjs.com/package/bcryptjs): A library for secure password hashing.

- [cors](https://www.npmjs.com/package/cors): Middleware for enabling cross-origin resource sharing.

- [express-fileupload](https://www.npmjs.com/package/express-fileupload): Middleware for handling file uploads.

- [mysql2](https://www.npmjs.com/package/mysql2): A Node.js-based MySQL client library.

- [uuid](https://www.npmjs.com/package/uuid): A library for generating UUIDs.

- [xml2js](https://www.npmjs.com/package/xml2js): A library for parsing XML data.

## Getting Started

To get started with the **Animal Spotting Web Application**, follow these steps:

### Frontend (animals-frontend-react)

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   This will launch the frontend application on a development server, typically at `http://localhost:5173`.

### Backend (animals-backend-api)

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Set up your database and configure the connection in the `.env` file based on the example provided in `example.env`.

4. Start the backend server:

   ```bash
   npm start
   ```

   This will start the backend API server, which is typically available at `http://localhost:8080`.

**Disclaimer**: This source code is provided without any warranty, express or implied. Usage of the resources within this repository is at your own risk.