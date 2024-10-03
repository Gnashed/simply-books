'use client';

import React, { useEffect } from 'react';
import { getAuthors } from '../../api/authorData';
import { useAuth } from '../../utils/context/authContext';

export default function Authors() {
  const { user } = useAuth();

  useEffect(() => {
    getAuthors(user.uid);
  }, []);

  return <div>Authors Page</div>;
}
