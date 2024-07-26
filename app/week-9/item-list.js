"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect, onItemDelete }) => {
  const [sortBy, setSortBy] = useState('name');
  const [groupByCategory, setGroupByCategory] = useState(false);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = sortedItems.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const renderItems = () => {
    if (groupByCategory) {
      return Object.keys(groupedItems).sort().map((category) => (
        <div key={category}>
          <h3 className="capitalize font-bold">{category}</h3>
          <ul>
            {groupedItems[category].map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  onSelect={() => onItemSelect(item)}
                />
                <button 
                  onClick={() => onItemDelete(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ));
    }
    return (
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item)}
            />
            <button 
              onClick={() => onItemDelete(item.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="p-4 bg-black-100 rounded-lg">
      <div className="mb-4 flex justify-left">
        <button
          onClick={() => { setSortBy('name'); setGroupByCategory(false); }}
          className={`mr-2 px-4 py-2 ${sortBy === 'name' && !groupByCategory ? 'bg-blue-500 text-black' : 'bg-blue-200'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => { setSortBy('category'); setGroupByCategory(false); }}
          className={`mr-2 px-4 py-2 ${sortBy === 'category' && !groupByCategory ? 'bg-blue-500 text-black' : 'bg-blue-200'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setGroupByCategory(true)}
          className={`px-4 py-2 ${groupByCategory ? 'bg-blue-500 text' : 'bg-blue-200'}`}
        >
          Group by Category
        </button>
      </div>
      {renderItems()}
    </div>
  );
};

export default ItemList;
