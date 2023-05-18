import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className=' text-4xl text-center text-gray-500'>Question and Answer</h1><br />
            <h2 className='font-bold text-2xl'>1)What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2><br />
            <p> An Access token is a credential that is issued to a client (e.g., a user or an application) by an authentication server.And It grants permission to access protected resources or APIs on behalf of the client.Furthermore,Access tokens are short-lived and have an expiration time.On the other hand,A refresh token is a long-lived token used to obtain new access tokens.It is issued alongside the access token during the authentication process.Moreover,it is securely stored on the client-side.The working and storing part discussed below.Access tokens should be stored in a secure manner, such as in memory or a secure storage mechanism (e.g., HTTP-only cookie).And Storing access tokens in vulnerable locations like local storage or client-side JavaScript variables can expose them to security risks.Moreover,Refresh tokens should be stored securely, typically using mechanisms like HTTP-only cookies to prevent unauthorized access.And Storing tokens securely helps protect against token theft and unauthorized access to user accounts. </p><br />
            <h2 className='font-bold text-2xl'>2)Compare SQL and NoSQL databases?</h2><br />
            <p>The comparison of QL and NoSQL databases are discussed below.SQL (Structured Query Language) and NoSQL (Not Only SQL) databases differ in their data models, query languages, and scalability approaches.In case of Data Model,SQL databases have a structured data model based on tables with predefined schemas. Data is organized in rows and columns, and relationships between tables are established using keys.And NoSQL databases have flexible data models, including key-value, document, columnar, and graph. They allow storing unstructured or semi-structured data without predefined schemas.And in Query Language, SQL databases use the SQL query language for data manipulation and retrieval. It provides a standardized syntax for performing CRUD operations and complex queries.On the other hand,NoSQL databases have varying query languages depending on the database type. Some use key-value access patterns, while others support JSON-based queries or graph traversals.Moreover, in Scalability,SQL databases are vertically scalable, scaling by adding more resources to a single server. Horizontal scaling across multiple servers can be challenging.NoSQL databases are designed for horizontal scalability. They distribute data across multiple servers or clusters, allowing for easy scaling to handle large workloads.And in Schema Flexibility,SQL databases enforce rigid schemas, requiring predefined structure and data types. Modifying schemas can be complex and may impact existing data.NoSQL databases offer flexible schemas, allowing dynamic changes to data structure without affecting the entire database. They can accommodate evolving data needs.Furthermore, in Use Cases,SQL databases are well-suited for applications with structured data, complex relationships, and ACID transactions. They are commonly used for financial systems, e-commerce, and data-intensive applications.On the other hand,NoSQL databases excel in handling large amounts of unstructured or rapidly changing data. They are often used in web applications, real-time analytics, IoT, and content management systems.</p><br />
            <h2 className='font-bold text-2xl'>3)What is express js? What is Nest JS (google it)?</h2><br />
            <p>Express.js is a minimal and flexible web application framework for Node.js. It provides a simple and intuitive way to build web applications and APIs. Express.js offers various features and middleware that help handle routing, request handling, and response management. It follows the model-view-controller (MVC) architectural pattern, allowing developers to structure their applications efficiently. Express.js is known for its lightweight nature, extensibility, and vast ecosystem of plugins and middleware, making it a popular choice for building server-side applications with Node.js.Moreover,NestJS is an advanced standalone Node.js framework built on Express.js. Designed to build scalable and maintainable server-side applications. NestJS leverages the latest JavaScript features, object-oriented programming (OOP) principles, and dependency injection to provide a structured and modular approach to building applications. It integrates his Angular concepts such as decorators and modules to provide a familiar development experience for developers with a front-end background. NestJS encourages the use of TypeScript to build robust typed applications, providing features like routing, dependency injection, middleware, and more. It focuses on scalability, testability, and maintainability, making it suitable for complex enterprise applications.</p><br />
            <h2 className='font-bold text-2xl'>4)What is MongoDB aggregate and how does it work (google it)?</h2><br />
            <p>Aggregates in MongoDB are powerful features that enable advanced data processing and aggregation within the database. It works with MongoDB collections and uses the concept of pipelines to perform various operations on the data.

Aggregate functions in MongoDB take as input an array of stages where each stage represents a specific operation. These stages are processed sequentially, and the output of one stage becomes the input of the next stage. This pipeline approach enables complex data transformations and computations. Some of the most common stages used in aggregation pipelines include:


$match:
Filters documents based on specified criteria.
$Group:
Group documents by specific fields and perform aggregations such as counts and sums.
$sort:
Sorts the documents by the specified field.
$ project:
Specifies which fields to include or exclude from the output.
$lookup:
Performs a left outer join with another collection. $Relax:
Split an array field into multiple documents.

By chaining these stages, developers can perform complex operations such as filtering, grouping, sorting, joining, and transforming data directly within the database.

Aggregate functions provide a flexible and efficient way to process large amounts of data and perform sophisticated calculations without requiring additional client-side processing. Leverage MongoDB's document model and indexing capabilities to optimize performance.</p><br />
        </div>
    );
};

export default Blogs;