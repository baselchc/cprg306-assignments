"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './itemsData.json';
import MealIdeas from './meal-ideas';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleSelectItem = (item) => {
    const ingredient = item.name.split(',')[0].trim();
    setSelectedIngredient(ingredient);
  };

  return (
    <main className="p-8 bg-black-50 min-h-screen flex flex-row items-start">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleSelectItem} />
      </div>
      {selectedIngredient && (
        <div className="ml-8 w-1/3">
          <MealIdeas ingredient={selectedIngredient} />
        </div>
      )}
    </main>
  );
};

export default Page;
