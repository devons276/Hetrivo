
-- Create a table for contact form questions
CREATE TABLE public.questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to questions table
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

-- Create policy that allows public to insert questions
CREATE POLICY "Allow public to insert questions" 
  ON public.questions 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that restricts reading questions (only admin access)
CREATE POLICY "Restrict reading questions" 
  ON public.questions 
  FOR SELECT 
  USING (false);

-- Create a table for KYC submissions
CREATE TABLE public.kyc (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  unique_identifier TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  nationality TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  country TEXT NOT NULL,
  occupation TEXT NOT NULL,
  source_of_funds TEXT NOT NULL,
  passport_id_document_url TEXT,
  proof_of_address_document_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to kyc table
ALTER TABLE public.kyc ENABLE ROW LEVEL SECURITY;

-- Create policy that allows public to insert KYC submissions
CREATE POLICY "Allow public to insert kyc submissions" 
  ON public.kyc 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that restricts reading KYC submissions (only admin access)
CREATE POLICY "Restrict reading kyc submissions" 
  ON public.kyc 
  FOR SELECT 
  USING (false);

-- Create storage bucket for KYC documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('kyc-documents', 'kyc-documents', false);

-- Create policy for KYC document uploads
CREATE POLICY "Allow public to upload KYC documents"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'kyc-documents');

-- Create policy for KYC document access (restricted)
CREATE POLICY "Restrict KYC document access"
ON storage.objects FOR SELECT
USING (bucket_id = 'kyc-documents' AND false);
