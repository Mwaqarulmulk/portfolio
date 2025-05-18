/*
  # Create contact messages table
  
  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `subject` (text, not null)
      - `message` (text, not null)
      - `created_at` (timestamp with time zone, default: now())
      - `read` (boolean, default: false)
  
  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for authenticated users to insert their own contact messages
    - Add policy for admin users to read all contact messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert messages
CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only admins can select/update
CREATE POLICY "Only admins can read messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ? 'admin');

CREATE POLICY "Only admins can update messages"
  ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (auth.jwt() ? 'admin');