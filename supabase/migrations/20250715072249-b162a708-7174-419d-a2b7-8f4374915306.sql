
-- Create a table for clients with auto-generated 6-digit codes
CREATE TABLE public.clients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  unique_code TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to the clients table
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

-- Create policy that allows public to read client codes (for validation)
CREATE POLICY "Allow public to read client codes" 
  ON public.clients 
  FOR SELECT 
  USING (true);

-- Create policy that allows public to insert new clients
CREATE POLICY "Allow public to insert clients" 
  ON public.clients 
  FOR INSERT 
  WITH CHECK (true);

-- Create a function to generate a unique 6-digit code
CREATE OR REPLACE FUNCTION generate_unique_client_code()
RETURNS TEXT AS $$
DECLARE
  new_code TEXT;
  code_exists BOOLEAN;
BEGIN
  LOOP
    -- Generate a random 6-digit code
    new_code := LPAD(FLOOR(RANDOM() * 1000000)::TEXT, 6, '0');
    
    -- Check if this code already exists
    SELECT EXISTS(SELECT 1 FROM public.clients WHERE unique_code = new_code) INTO code_exists;
    
    -- If code doesn't exist, we can use it
    IF NOT code_exists THEN
      RETURN new_code;
    END IF;
  END LOOP;
END;
$$ LANGUAGE plpgsql;
