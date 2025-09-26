
-- Create a table for sales enquiries
CREATE TABLE public.sales_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  investment_range TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to protect the data
ALTER TABLE public.sales_enquiries ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserting sales enquiries (public form)
CREATE POLICY "Allow public to insert sales enquiries" 
  ON public.sales_enquiries 
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy for reading sales enquiries (restrict to authenticated admin users if needed)
-- For now, we'll make it restrictive - only service role can read
CREATE POLICY "Restrict reading sales enquiries" 
  ON public.sales_enquiries 
  FOR SELECT 
  USING (false);
