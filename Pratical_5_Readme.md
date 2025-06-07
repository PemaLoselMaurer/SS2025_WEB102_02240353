# Practical 5 – Supabase Cloud Storage Integration

This practical enhances the TikTok web app by integrating **Supabase Storage** to replace local file storage with scalable cloud-based storage for video and thumbnail files.

### 1. Install Supabase Dependencies

#### Backend

```bash
cd server
npm install @supabase/supabase-js
```

#### Frontend

```bash
cd tiktok_frontend
npm install @supabase/supabase-js
```
## Supabase Configuration

### Buckets

* `videos` – stores uploaded video files
* `thumbnails` – stores video thumbnails

### Storage Policies

* **Upload (Authenticated users)**
* **Read (Anonymous + Authenticated users)**

## Backend Setup

### Environment Variables (`.env`)

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_KEY=your-service-key
SUPABASE_PUBLIC_KEY=your-public-key
SUPABASE_STORAGE_URL=https://your-project-id.supabase.co/storage/v1
```

### Files & Updates

* `src/lib/supabase.js` – Supabase client
* `src/services/storageService.js` – Upload logic
* `videoController.js` – Save files to Supabase, not disk
* `schema.prisma` – Add fields for cloud paths

### Prisma Updates

```prisma
model Video {
  ...
  videoUrl            String
  thumbnailUrl        String?
  videoStoragePath    String?
  thumbnailStoragePath String?
}
```

## Frontend Setup

### Environment Variables (`.env.local`)

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLIC_KEY=your-public-key
```

### Files & Updates

* `src/lib/supabase.js` – Frontend Supabase client
* `uploadService.js` – Direct upload to Supabase
* `upload/page.jsx` – New upload flow
* `VideoCard.jsx` – Load Supabase URLs properly

## Migration Script

If switching from local storage:

```bash
cd server
node scripts/migrateVideosToSupabase.js
```

## Testing & Cleanup

1. Test uploading and playback from Supabase
2. Remove `uploads/` folder after successful migration
3. Confirm all public access policies work as intended

## Resources

* [Supabase Docs](https://supabase.com/docs)
* [Secure File Upload](https://web.dev/articles/secure-file-upload)
* [CDN Benefits](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)

