Notes Service
A lightweight Notes App built with Supabase, featuring a backend with Edge Functions for note management and a frontend for user interaction.

Overview
This project provides a serverless backend using Supabase (PostgreSQL + Edge Functions) to create and retrieve notes, paired with a frontend for a complete note-taking experience.

Features
1.Create and retrieve notes with timestamps.
2.Secure authentication via Supabase JWT tokens.
3.Serverless API endpoints with Edge Functions.
4.Responsive frontend UI for adding and viewing notes.

Prerequisites
Node.js (v14+)
Supabase CLI
Supabase project (ID: qidahepfqrixzetyuzwx)
VS Code with Live Server (for frontend)

Installation

Clone (if applicable): git clone https://github.com/your-username/notes-service.git
Install Supabase CLI: scoop install supabase (Windows) or download from releases.
Link project: supabase link --project-ref qidahepfqrixzetyuzwx
Apply schema: Copy schema.sql to supabase/migrations/ and run supabase db push.
Run frontend: Open index.html with Live Server (http://127.0.0.1:5500).
Add http://127.0.0.1:5500 to Supabase CORS settings (Settings > API > CORS).

Project Structure

notes-service/
├── functions/
│   ├── post_notes/index.js
│   └── get_notes/index.js
├── supabase/migrations/schema.sql
├── index.html
├── README.md

Database Schema
Table: notes
id (UUID, primary key)
user_id (UUID, references auth.users)
content (TEXT, not null)
created_at (TIMESTAMP, default NOW())

Edge Functions
post_notes: POST /functions/v1/post_notes - Creates a note.
get_notes: GET /functions/v1/get_notes - Retrieves notes.
Requires JWT in Authorization header.

Frontend
index.html: Built with HTML, JavaScript, and Bootstrap 5.
Features a form to add notes and a styled list to display them.
Uses a pre-generated JWT token for authentication.

Usage
Backend:
Start: supabase start

Test (curl):
Post: curl -X POST ... -H "Authorization: Bearer YOUR_JWT_TOKEN" -d '{"content":"Note"}'
Get: curl -X GET ... -H "Authorization: Bearer YOUR_JWT_TOKEN"
Stop: supabase stop

Frontend:
Open index.html with Live Server.
Add notes and refresh the list.

Deployment
Push schema: supabase db push
Deploy functions: supabase functions deploy post_notes and get_notes

Challenges
Fixed "Invalid API key" by updating the key from Supabase.
Resolved "404" by using /auth/v1/token?grant_type=password.
Configured CORS for frontend requests.