
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { User, Plus } from 'lucide-react';

const Customers = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Generate unique code using the database function
      const { data: codeData, error: codeError } = await supabase.rpc('generate_unique_client_code');
      
      if (codeError) {
        console.error('Error generating code:', codeError);
        toast({
          title: "Error",
          description: "Failed to generate unique code. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Insert the new client with the generated code
      const { error: insertError } = await supabase
        .from('clients')
        .insert({
          first_name: firstName,
          last_name: lastName,
          unique_code: codeData
        });

      if (insertError) {
        console.error('Error inserting client:', insertError);
        toast({
          title: "Error",
          description: "Failed to add client. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success!",
          description: `Client added successfully! Unique code: ${codeData}`,
        });
        // Reset form
        setFirstName('');
        setLastName('');
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <User className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-black mb-4">Customer Management</h1>
            <p className="text-gray-600">
              Add new clients to the system and generate unique identifiers.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
              <Plus className="h-6 w-6" />
              Add Client
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="firstName" className="text-black">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter first name"
                  className="mt-1"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="lastName" className="text-black">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter last name"
                  className="mt-1"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Adding Client...' : 'Add Client'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
