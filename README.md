<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bike Library API</title>
</head>
<body>

<h1>Bike Library API</h1>

<h2>Description</h2>
<p>This is a simple Bike Library API built with <strong>Nest.js</strong>. The API allows users to manage a library of bikes, providing functionalities for basic CRUD (Create, Read, Update, Delete) operations. The project follows a modular structure to enhance organization and maintainability.</p>

<h2>Folder Structure</h2>
<pre>
src/
  bikes/
    bikes.module.ts       # Contains the BikeModule, registering all bike-related components
  controllers/
    bikes.controller.ts    # Handles incoming requests and routes for bike operations
  services/
    bikes.service.ts       # Contains business logic for managing bike data
  dto/
    bike.dto.ts           # Data Transfer Object for validating bike input data
  entities/
    bike.entity.ts        # Defines the Bike entity model for database interaction
app.module.ts              # Root module, combines all feature modules
main.ts                    # Entry point of the application
</pre>

<h3>Explanation of Folders:</h3>
<ul>
    <li><strong>bikes/</strong>: Contains the module definition for the bike feature.</li>
    <li><strong>controllers/</strong>: Holds the controller responsible for handling API requests related to bikes.</li>
    <li><strong>services/</strong>: Includes the service that contains the business logic for the bike operations.</li>
    <li><strong>dto/</strong>: Defines the Data Transfer Object used for validating and transferring bike data.</li>
    <li><strong>entities/</strong>: Contains the entity model that represents the structure of the bike data in the database.</li>
</ul>

<h2>Setup Instructions</h2>
<ol>
    <li><strong>Clone the repository</strong>:
        <pre>
        git clone https://github.com/Viveeeeeekkkk/bikesbackend.git
        cd bikesbackend
        </pre>
    </li>
    <li><strong>Install dependencies</strong>:
        <pre>
        npm install
        </pre>
    </li>
    <li><strong>Run the application</strong>:
        <pre>
        npm run start
        </pre>
    </li>
    <li><strong>Access the API</strong>: The API will be running at <code>http://localhost:3000</code>.</li>
    <li><strong>Swagger Documentation</strong>: You can test the API using Swagger UI by navigating to:
        <pre>
        http://localhost:3000/backend
        </pre>
    </li>
</ol>

<h2>API Endpoints</h2>
<ul>
    <li><strong>GET /bikes</strong>: Fetch a list of all bikes.</li>
    <li><strong>POST /bikes</strong>: Add a new bike.</li>
    <li><strong>PUT /bikes/:id</strong>: Update an existing bike.</li>
    <li><strong>DELETE /bikes/:id</strong>: Delete a bike.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li><strong>Nest.js</strong>: A progressive Node.js framework for building efficient, scalable server-side applications.</li>
    <li><strong>SQLite</strong>: A lightweight, serverless database for data storage.</li>
    <li><strong>Swagger</strong>: Provides an interactive API documentation interface.</li>
</ul>

</body>
</html>
