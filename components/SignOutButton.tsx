// components/SignOutButton.tsx
'use client';

import { Button } from '@/components/ui/button';
import { signOutAction } from '@/lib/actions/auth.action';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const SignOutButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOutAction();
      // Client-side redirect fallback
      router.push('/sign-in');
      router.refresh(); // Ensure client state updates
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleSignOut}
      disabled={loading}
      className="ml-auto"
      variant="ghost"
    >
      {loading ? 'Signing out...' : 'Sign Out'}
    </Button>
  );
};