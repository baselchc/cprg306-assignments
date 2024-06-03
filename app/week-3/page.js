import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="p-8 bg-black-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;

//https://github.com/baselchc/cprg306-assignments/tree/main/app/week-3
