import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client (these would be environment variables in production)
const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);