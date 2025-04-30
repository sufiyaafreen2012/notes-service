1. 📝 Notes Service

A lightweight Notes App built with Supabase, featuring a backend powered by Edge Functions and a responsive frontend for seamless note-taking.

2. Overview

This project provides a serverless backend using Supabase (PostgreSQL + Edge Functions) to create and retrieve notes, paired with a simple frontend UI for a complete note-taking experience.

3. Features

- Create and retrieve notes with timestamps.
- Secure authentication via Supabase JWT tokens.
- Serverless API endpoints powered by Supabase Edge Functions.
- Responsive frontend built with Bootstrap 5.

4. Prerequisites

- Node.js (v14+)
- Supabase CLI
- Supabase Project (Project ID: qidahepfqrixzetyuzwx)
- Visual Studio Code (with Live Server extension)

5. Installation

5.1 Clone the repository:
    git clone https://github.com/your-username/notes-service.git
    cd notes-service

5.2 Install Supabase CLI:
    - Windows (Scoop): scoop install supabase
    - Or download from Supabase CLI Releases

5.3 Link to Supabase project:
    supabase link --project-ref qidahepfqrixzetyuzwx

5.4 Apply the database schema:
    - Copy schema.sql into supabase/migrations/
    - Run: supabase db push

5.5 Run the frontend:
    - Open index.html using VS Code Live Server: http://127.0.0.1:5500

5.6 Configure CORS in Supabase:
    - Go to Settings > API > CORS
    - Add: http://127.0.0.1:5500

6. Project Structure

notes-service/
├── functions/
│   ├── post_notes/index.js - POST endpoint to create notes
│   └── get_notes/index.js - GET endpoint to retrieve notes
├── supabase/
│   └── migrations/
│       └── schema.sql - Database schema for 'notes' table
├── index.html - Frontend built with Bootstrap 5
├── README.md

7. Database Schema

Table: notes

| Column     | Type      | Description                          |
|------------|-----------|--------------------------------------|
| id         | UUID      | Primary key                          |
| user_id    | UUID      | References auth.users                |
| content    | TEXT      | Note content (not null)              |
| created_at | TIMESTAMP | Default to current time (NOW())      |

8. Edge Functions

8.1 post_notes
- Route: POST /functions/v1/post_notes
- Description: Creates a new note.
- Authorization: Requires Supabase JWT token in the Authorization header.

8.2 get_notes
- Route: GET /functions/v1/get_notes
- Description: Retrieves all user notes.
- Authorization: Requires Supabase JWT token.

9. Frontend

- File: index.html
- Tech Stack: HTML, JavaScript, Bootstrap 5
- Features:
  - Input form to add notes
  - Styled list to display notes
  - Uses a pre-generated JWT token for authenticated requests

10. Usage

10.1 Backend

- Start Supabase local environment:
  supabase start

- Test with curl:

  POST a note:
  curl -X POST http://localhost:54321/functions/v1/post_notes -H "Authorization: Bearer YOUR_JWT_TOKEN" -H "Content-Type: application/json" -d '{"content": "Sample note"}'

  GET notes:
  curl -X GET http://localhost:54321/functions/v1/get_notes -H "Authorization: Bearer YOUR_JWT_TOKEN"

- Stop Supabase:
  supabase stop

10.2 Frontend

- Open index.html in browser via Live Server
- Add notes and view them dynamically.

11. Deployment

11.1 Push database schema:
  supabase db push

11.2 Deploy Edge Functions:
  supabase functions deploy post_notes
  supabase functions deploy get_notes

12. Challenges Faced

- Fixed "Invalid API Key" issue by refreshing Supabase keys.
- Resolved "404 Not Found" by correctly routing to /auth/v1/token?grant_type=password.
- Handled CORS errors by adding the local frontend origin to CORS settings.
