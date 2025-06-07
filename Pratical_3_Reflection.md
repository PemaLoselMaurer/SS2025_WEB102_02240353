# Reflection – Practical 3: File Upload with Express.js

## Documentation

### Concepts Applied:

* **Multer Integration:** Used Multer middleware to handle `multipart/form-data` for uploading files securely.
* **Express Server Configuration:** Created endpoints to handle file processing, validation, and response formatting.
* **CORS Configuration:** Enabled cross-origin requests between the Next.js frontend and Express backend.
* **Validation & Limits:** Implemented file type filters and file size limits for secure uploads.
* **Progress Tracking:** Added frontend feedback using Axios `onUploadProgress`.

## Reflection

### What I Learned:

* How to configure and use Multer for handling file uploads on the server.
* Writing custom middleware for file type filtering and error handling.
* Securely storing uploaded files and returning metadata in a consistent API response.
* How to connect a React/Next.js frontend to an external Express backend.
* Improving UX by tracking upload progress in real-time with Axios.

### Challenges Faced:

#### 1. Handling CORS & File Permissions

Initially, requests from the frontend were blocked due to CORS policy. After configuring `cors` middleware and setting headers manually, the connection stabilized.


#### 2. Multer Errors & File Filtering

Multer would silently fail if file validation was not handled correctly. This was resolved by implementing `fileFilter` and catching errors in custom error middleware.


### Key Takeaways:

* **Multer** provides powerful yet flexible handling for file uploads in Express apps.
* Secure file uploads require careful validation of both **file type** and **size**.
* Real-time **progress tracking** improves user experience significantly.
* Proper **CORS setup** is crucial for communication between frontend and backend in full-stack apps.