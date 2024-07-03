"use client";

import React, { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [mealIdeas, setMeals] = useState([]);

  async function loadMealIdeas() {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4"> Meals that can be made with: {ingredient}</h2>
      <div>
        {mealIdeas.map((meal, index) => (
          <h3 key={index} className="text-lg mb-2">{meal.strMeal}</h3>
        ))}
      </div>
    </div>
  );
}

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.log('Error fetching data:', error);
    return [];
  }
}
