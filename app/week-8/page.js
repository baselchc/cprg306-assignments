"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './itemsData.json';
import MealIdeas from './meal-ideas';
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleSelectItem = (item) => {
    const ingredient = item.name.split(',')[0].trim();
    setSelectedIngredient(ingredient);
  };

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main className="p-8 bg-black-100 min-h-screen">
      {user ? (
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <p className="text-lg">
              Welcome, {user.displayName} ({user.email})
            </p>
            <button 
              onClick={handleSignOut}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </button>
          </div>
          <div className="flex flex-row">
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
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <button 
            onClick={handleSignIn}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl"
          >
            Sign In with GitHub
          </button>
        </div>
      )}
    </main>
  );
};

export default Page;