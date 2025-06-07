# Reflection – Practical 1: RESTful API with Express.js

## Documentation

### Concepts Applied:

* **RESTful API Design:** Defined consistent and logical URI patterns for multiple resources (users, posts, comments, likes, followers).
* **Express.js Framework:** Used to implement modular controllers, routes, and middleware.
* **Content Negotiation:** Added middleware to respond with different formats based on `Accept` headers.
* **Middleware Utilities:** Created reusable middleware for error handling (`errorHandler.js`) and async wrappers.
* **API Documentation:** Developed a simple `docs.html` page to document all endpoints.

## Reflection

### What I Learned:

* How to design clear, maintainable REST API endpoints with proper HTTP verbs and status codes.
* The importance of structuring a backend project with separation of concerns (routes, controllers, middleware).
* How to use Express.js to create scalable and testable APIs.
* Implementing content negotiation using MIME types to support multiple formats (like JSON and XML).
* Setting up reusable error-handling patterns to streamline debugging and improve consistency.

### Challenges Faced:

#### 1. Middleware Order and Response Consistency

Understanding how middleware flows in Express (especially with async handlers and content formatters) was tricky. Some early bugs included missing `next()` calls or sending multiple responses. Eventually, I solved this by carefully sequencing middleware and using a custom async wrapper.


#### 2. Structuring API Responses

Creating uniform success/error responses across endpoints required abstracting response formats. The `formatResponse.js` middleware helped centralize logic, reducing duplication and increasing consistency.

### Key Takeaways:

* A clean, modular folder and code structure is essential for scaling any backend project.
* Middleware is a powerful Express feature that enables functionality like logging, validation, content formatting, and error handling.
* Documenting endpoints, even with a basic HTML page, greatly improves usability and team collaboration.
* Starting with mock data is an effective way to build and test API logic independently from the database.

