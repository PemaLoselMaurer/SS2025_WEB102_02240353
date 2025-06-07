# Practical 3 – File Upload with Express.js

This project demonstrates a complete server-side file upload flow using **Node.js**, **Express.js**, and **Multer**, integrated with a React/Next.js frontend. It includes validation, error handling, and CORS configuration for secure and seamless file uploads.

### 1. Install Dependencies

```bash
npm install express cors multer morgan dotenv
```

### 2. Run the Development Server

```bash
node server.js
```

## Project Setup

### Initial Setup

```bash
mkdir file-upload-server
cd file-upload-server
npm init -y
```

### Folder Structure

```
file-upload-server/
├── server.js
├── .env
├── uploads/ (created automatically by Multer)
```

## Features Implemented

### 1. Multer Middleware

* Parses `multipart/form-data` requests.
* Saves uploaded files to `uploads/` folder.
* Configured with:

  * `storage`: for file destination and naming.
  * `fileFilter`: to accept only PDF files.
  * `limits`: to restrict file size.

### 2. Upload Endpoint

```http
POST /api/upload
```

* Accepts a single file.
* Validates file type and size.
* Returns file metadata on success.

### 3. CORS Configuration

Configured to allow requests from frontend (e.g., `http://localhost:3000`).

### 4. Frontend Integration

* Updated Axios `onSubmit` call to send file to Express backend.
* Used `FormData` to attach file and send multipart data.
* Used `onUploadProgress` to track upload status.

## Testing the Application

1. **Start Backend**

   ```bash
   node server.js
   ```

2. **Start Frontend**

   ```bash
   npm run dev
   ```

3. **In Browser**

   * Navigate to the upload page.
   * Drag and drop or select a PDF file.
   * Watch the progress bar update.
   * Check backend's `/uploads/` folder.

