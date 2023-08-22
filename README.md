# Basic Blog Web App With Dummy REST API json-server

A simple blog web application created for practicing CRUD operations using `json-server`, which simulates a RESTful API.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)

## Features

- **CRUD Operations**: Easily create, read, update, and delete blog posts.
- **Dummy Backend**: Uses `json-server` to simulate a backend server and RESTful API.
- **Intuitive UI**: Clean and simple user interface for better user experience.

## Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)

## Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Sabbir1039/Blog-web-app-with-json-server-dummy-rest-api.git

2. **Install Dependencies**
    ```bash
    npm install

3. **Setup json-server**
    Next, create a db.json file at the root of your project with your initial data, e.g.
    {
        "blogs": []
    }

4. **Start the Application**
    ```bash 
    json-server --watch db.json & npm start

