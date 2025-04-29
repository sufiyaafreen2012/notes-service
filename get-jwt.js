const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://qidahepfqrixzetyuzwx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpZGFoZXBmcXJpeHpldHl1end4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NjI3NTQsImV4cCI6MjA2MTMzODc1NH0.zWtg-CvbRktZvW0x9_RjxH8O7BuLOWm1BPq8eH8jXWY';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function getJwtToken() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'sufiyaafreen12@gmail.com',
    password: '12345',
  });

  if (error) {
    console.error('Error signing in:', error.message);
    return;
  }

  console.log('JWT Token:', data.session.access_token);
}

getJwtToken();
