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

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up your database (sample DB in `mysql-dump/animal-spotting-sample-db.sql`) and configure the connection in the `backend/src/database.js`.

3. Start the backend API server :

   ```bash
   npm run backend
   ```

4. Start the frontend vite development server :

   ```bash
   # In another terminal
   npm run frontend
   ```

**Disclaimer**: This source code is provided without any warranty, express or implied. Usage of the resources within this repository is at your own risk.