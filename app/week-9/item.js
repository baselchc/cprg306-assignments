"use client";
import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li className="cursor-pointer flex justify-between items-center p-4 bg-black shadow-md rounded-lg mb-4" onClick={onSelect}>
      <div>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-600">Category: {category}</p>
      </div>
      <span className="text-lg font-semibold text-blue-500">{quantity}</span>
    </li>
  );
};

export default Item;
