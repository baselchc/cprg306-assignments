import React from 'react';
import NewItem from './new-item';

const Page = () => {
  return (
    <main className="p-8 bg-black-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <NewItem/>
    </main>
  );
};

export default Page;