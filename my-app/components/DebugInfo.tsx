'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

const DebugInfo = () => {
  const { user, isLoaded } = useUser();
  const [apiKey, setApiKey] = useState<string | undefined>();

  useEffect(() => {
    setApiKey(process.env.NEXT_PUBLIC_STREAM_API_KEY);
  }, []);

  // Remove this component in production
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-xs z-50">
      <h3 className="font-bold mb-2">Debug Info:</h3>
      <div className="space-y-1">
        <p>Clerk Loaded: {isLoaded ? '✅' : '❌'}</p>
        <p>User: {user ? '✅ ' + user.id : '❌ Not logged in'}</p>
        <p>Stream API Key: {apiKey ? '✅ Set' : '❌ Missing'}</p>
      </div>
    </div>
  );
};

export default DebugInfo;
