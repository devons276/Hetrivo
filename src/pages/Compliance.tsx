import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Upload, User, Phone, MapPin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Compliance = () => {
  const [step, setStep] = useState(1);
  const [uniqueIdentifier, setUniqueIdentifier] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [documents, setDocuments] = useState({
    passportOrId: null as File | null,
    proofOfAddress: null as File | null
  });
  const [kycData, setKycData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    phoneNumber: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    occupation: '',
    sourceOfFunds: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleIdentifierSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uniqueIdentifier.trim()) return;

    setIsValidating(true);

    try {
      // Check if the unique identifier exists in the database
      const { data, error } = await supabase
        .from('clients')
        .select('unique_code')
        .eq('unique_code', uniqueIdentifier.trim())
        .single();

      if (error) {
        console.error('Error validating identifier:', error);
        toast({
          title: "Invalid Identifier",
          description: "The unique identifier you entered is not valid. Please check with your account manager.",
          variant: "destructive",
        });
      } else if (data) {
        // Valid identifier found, proceed to next step
        setStep(2);
        toast({
          title: "Valid Identifier",
          description: "Unique identifier verified successfully!",
        });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An error occurred while validating your identifier. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsValidating(false);
    }
  };

  const handleDocumentUpload = (type: 'passportOrId' | 'proofOfAddress', file: File | null) => {
    setDocuments(prev => ({ ...prev, [type]: file }));
  };

  const handleDocumentsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (documents.passportOrId && documents.proofOfAddress) {
      setStep(3);
    }
  };

  const uploadDocument = async (file: File, fileName: string): Promise<string | null> => {
    try {
      const { data, error } = await supabase.storage
        .from('kyc-documents')
        .upload(fileName, file);

      if (error) {
        console.error('Upload error:', error);
        return null;
      }

      return data.path;
    } catch (error) {
      console.error('Upload error:', error);
      return null;
    }
  };

  const handleKycSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let passportUrl = null;
      let proofOfAddressUrl = null;

      // Upload documents
      if (documents.passportOrId) {
        const passportFileName = `${uniqueIdentifier}-passport-${Date.now()}.${documents.passportOrId.name.split('.').pop()}`;
        passportUrl = await uploadDocument(documents.passportOrId, passportFileName);
      }

      if (documents.proofOfAddress) {
        const proofFileName = `${uniqueIdentifier}-proof-${Date.now()}.${documents.proofOfAddress.name.split('.').pop()}`;
        proofOfAddressUrl = await uploadDocument(documents.proofOfAddress, proofFileName);
      }

      // Submit KYC data
      const { error } = await supabase
        .from('kyc')
        .insert({
          unique_identifier: uniqueIdentifier,
          first_name: kycData.firstName,
          last_name: kycData.lastName,
          date_of_birth: kycData.dateOfBirth,
          nationality: kycData.nationality,
          phone_number: kycData.phoneNumber,
          address: kycData.address,
          city: kycData.city,
          postal_code: kycData.postalCode,
          country: kycData.country,
          occupation: kycData.occupation,
          source_of_funds: kycData.sourceOfFunds,
          passport_id_document_url: passportUrl,
          proof_of_address_document_url: proofOfAddressUrl
        });

      if (error) {
        console.error('Error submitting KYC:', error);
        toast({
          title: "Error",
          description: "There was a problem submitting your KYC information. Please try again.",
          variant: "destructive",
        });
      } else {
        console.log('KYC submitted successfully');
        toast({
          title: "Success!",
          description: "Your KYC information has been submitted successfully!",
        });
        setStep(4);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setKycData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-black mb-4">Compliance & KYC</h1>
            <p className="text-gray-600">
              We maintain the highest standards of compliance and security to protect our investors.
            </p>
          </div>

          {step === 1 && (
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6">Step 1: Identity Verification</h2>
              <form onSubmit={handleIdentifierSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="unique-identifier" className="text-black">Unique Identifier</Label>
                  <Input
                    id="unique-identifier"
                    type="text"
                    value={uniqueIdentifier}
                    onChange={(e) => setUniqueIdentifier(e.target.value)}
                    placeholder="Enter your 6-digit unique identifier"
                    className="mt-1"
                    required
                    disabled={isValidating}
                    maxLength={6}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Your account manager would have provided you with your 6-digit unique identifier
                  </p>
                </div>
                <Button type="submit" className="w-full" disabled={isValidating}>
                  {isValidating ? 'Validating...' : 'Continue to Document Upload'}
                </Button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6">Step 2: Document Upload</h2>
              <form onSubmit={handleDocumentsSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="passport-id" className="text-black">Passport or ID Document</Label>
                  <div className="mt-2 flex items-center justify-center w-full">
                    <label htmlFor="passport-id" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500">
                          {documents.passportOrId ? documents.passportOrId.name : 'Click to upload passport or ID'}
                        </p>
                      </div>
                      <input
                        id="passport-id"
                        type="file"
                        className="hidden"
                        accept="image/*,.pdf"
                        onChange={(e) => handleDocumentUpload('passportOrId', e.target.files?.[0] || null)}
                        required
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="proof-address" className="text-black">Proof of Address</Label>
                  <div className="mt-2 flex items-center justify-center w-full">
                    <label htmlFor="proof-address" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500">
                          {documents.proofOfAddress ? documents.proofOfAddress.name : 'Click to upload proof of address'}
                        </p>
                      </div>
                      <input
                        id="proof-address"
                        type="file"
                        className="hidden"
                        accept="image/*,.pdf"
                        onChange={(e) => handleDocumentUpload('proofOfAddress', e.target.files?.[0] || null)}
                        required
                      />
                    </label>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Utility bill, bank statement, or government correspondence dated within the last 3 months
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" className="flex-1">
                    Continue to KYC Process
                  </Button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6">Step 3: Know Your Customer (KYC)</h2>
              <form onSubmit={handleKycSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-black">First Name</Label>
                    <Input
                      id="firstName"
                      value={kycData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-black">Last Name</Label>
                    <Input
                      id="lastName"
                      value={kycData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dateOfBirth" className="text-black">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={kycData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Label htmlFor="nationality" className="text-black">Nationality</Label>
                    <Input
                      id="nationality"
                      value={kycData.nationality}
                      onChange={(e) => handleInputChange('nationality', e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phoneNumber" className="text-black">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={kycData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-black">Address</Label>
                  <Input
                    id="address"
                    value={kycData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city" className="text-black">City</Label>
                    <Input
                      id="city"
                      value={kycData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode" className="text-black">Postal Code</Label>
                    <Input
                      id="postalCode"
                      value={kycData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Label htmlFor="country" className="text-black">Country</Label>
                    <Input
                      id="country"
                      value={kycData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="occupation" className="text-black">Occupation</Label>
                  <Input
                    id="occupation"
                    value={kycData.occupation}
                    onChange={(e) => handleInputChange('occupation', e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="sourceOfFunds" className="text-black">Source of Funds</Label>
                  <Input
                    id="sourceOfFunds"
                    value={kycData.sourceOfFunds}
                    onChange={(e) => handleInputChange('sourceOfFunds', e.target.value)}
                    placeholder="e.g., Employment, Business Income, Investments"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1" disabled={isSubmitting}>
                    Back
                  </Button>
                  <Button type="submit" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit KYC Information'}
                  </Button>
                </div>
              </form>
            </div>
          )}

          {step === 4 && (
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-black mb-4">KYC Submitted Successfully</h2>
              <p className="text-gray-600 mb-6">
                Your KYC information has been submitted for review. We will contact you within 2-3 business days 
                with the next steps.
              </p>
              <Link to="/">
                <Button>Return to Home</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Compliance;
