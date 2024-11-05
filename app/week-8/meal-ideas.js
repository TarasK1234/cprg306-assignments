"use client";

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      if (ingredient) {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
          const data = await response.json();
          setMeals(data.meals || []);
        } catch (error) {
          console.error("Error fetching meal ideas:", error);
        }
      }
    };

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="ml-8 w-1/2">
      <h2 className="text-2xl mb-4 text-violet-500">Meal Ideas with {ingredient}</h2>
      
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="mb-2 flex items-center">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 mr-4 rounded" />
            <div className="font-bold text-lg text-violet-900">{meal.strMeal}</div>

          </li>
        ))}
      </ul>
    </div>
  );
}