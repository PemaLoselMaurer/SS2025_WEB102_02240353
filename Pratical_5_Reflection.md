# Reflection – Practical 5: Implementing Cloud Storage with Supabase

## Documentation

### Concepts Applied:

* **Cloud Buckets:** Used Supabase Storage buckets to manage and serve uploaded files.
* **Supabase Integration:** Set up both frontend and backend clients with project credentials.
* **Access Control:** Defined fine-grained policies for public access and authenticated uploads.
* **Direct Upload Flow:** Enabled frontend-to-cloud file uploading using the Supabase client.
* **Prisma + Supabase:** Linked file metadata to PostgreSQL for easy access and queries.

## Reflection

### What I Learned:

* The importance of migrating from local storage to cloud for scalability and reliability.
* How to configure and secure Supabase buckets using access policies.
* Creating a unified upload flow that connects frontend and backend with cloud storage.
* Linking Supabase file URLs with database entries through Prisma.
* Understanding CDN benefits, public vs private access, and secure upload practices.

### Challenges Faced:

#### 1. Supabase Policy Configuration

Initially, my uploads failed because access policies were too strict. Reading the Supabase docs helped me understand how to allow specific operations (`INSERT`, `SELECT`) for certain roles (`authenticated`, `anon`).


#### 2. Migrating Local Files

Migrating old video files required custom scripts. Handling edge cases like missing thumbnails and duplicate names was tricky but resolved using unique paths and conditional uploads.

### Key Takeaways:

* Supabase offers powerful cloud features without vendor lock-in.
* Direct-to-cloud uploads improve performance and reduce server load.
* Setting up access policies correctly is crucial to avoid failed uploads/downloads.
* Storing file metadata (path, URL) in the database provides easy querying and analytics.
* Cloud storage and CDN integration significantly improve scalability and global access speed.

