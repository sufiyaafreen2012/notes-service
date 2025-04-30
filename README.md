📝 Notes Service

A lightweight Notes App built with Supabase, featuring a backend powered by Edge Functions and a responsive frontend for seamless note-taking.

1. Overview

This project provides a serverless backend using Supabase (PostgreSQL + Edge Functions) to create and retrieve notes, paired with a simple frontend UI for a complete note-taking experience.

2. Features

1. Create and retrieve notes with timestamps.  
2. Secure authentication via Supabase JWT tokens.  
3. Serverless API endpoints powered by Supabase Edge Functions.  
4. Responsive frontend built with Bootstrap 5.

3. Prerequisites

- Node.js (v14+)
- Supabase CLI
- Supabase Project (Project ID: qidahepfqrixzetyuzwx)
- Visual Studio Code (with Live Server extension)

4. Installation

1. Clone the repository  
   git clone https://github.com/your-username/notes-service.git
   cd notes-service

2. Install Supabase CLI  
   Windows (Scoop):  
   scoop install supabase  
   Or download from Supabase CLI Releases

3. Link to Supabase project  
   supabase link --project-ref qidahepfqrixzetyuzwx

4. Apply the database schema  
   - Copy schema.sql into supabase/migrations/
   - Run:
     supabase db push

5. Run the frontend  
   - Open index.html using VS Code Live Server:  
     http://127.0.0.1:5500

6. Configure CORS in Supabase  
   - Go to Settings > API > CORS  
   - Add: http://127.0.0.1:5500

5. Project Structure

notes-service/
├── functions/
│   ├── post_notes/index.js       - POST endpoint to create notes
│   └── get_notes/index.js        - GET endpoint to retrieve notes
├── supabase/
│   └── migrations/
│       └── schema.sql            - Database schema for 'notes' table
├── index.html                    - Frontend built with Bootstrap 5
├── README.md

6. Database Schema

Table: notes

Column       | Type      | Description                              
-------------|-----------|------------------------------------------
id           | UUID      | Primary key                              
user_id      | UUID      | References auth.users                    
content      | TEXT      | Note content (not null)                  
created_at   | TIMESTAMP | Default to current time (NOW())          

7. Edge Functions

post_notes  
- Route: POST /functions/v1/post_notes  
- Description: Creates a new note.  
- Authorization: Requires Supabase JWT token in the Authorization header.

get_notes  
- Route: GET /functions/v1/get_notes  
- Description: Retrieves all user notes.  
- Authorization: Requires Supabase JWT token.

8. Frontend

- File: index.html
- Tech Stack: HTML, JavaScript, Bootstrap 5  
- Features:
  - Input form to add notes
  - Styled list to display notes
  - Uses a pre-generated JWT token for authenticated requests

9. Usage

Backend

- Start Supabase local environment:  
  supabase start

- Test with curl:

  - POST a note:  
    curl -X POST http://localhost:54321/functions/v1/post_notes -H "Authorization: Bearer YOUR_JWT_TOKEN" -H "Content-Type: application/json" -d '{"content": "Sample note"}'

  - GET notes:  
    curl -X GET http://localhost:54321/functions/v1/get_notes -H "Authorization: Bearer YOUR_JWT_TOKEN"

- Stop Supabase:  
  supabase stop

Frontend

- Open index.html in browser via Live Server  
- Add notes and view them dynamically.

10. Deployment

1. Push database schema  
   supabase db push

2. Deploy Edge Functions  
   supabase functions deploy post_notes  
   supabase functions deploy get_notes

11. Challenges Faced

- Fixed "Invalid API Key" issue by refreshing Supabase keys.  
- Resolved "404 Not Found" by correctly routing to /auth/v1/token?grant_type=password.  
- Handled CORS errors by adding the local frontend origin to CORS settings.
