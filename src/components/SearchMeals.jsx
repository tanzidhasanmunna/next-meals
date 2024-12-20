"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SearchMeals() {
    const [search, setSearch] = useState(null);
    const [meals, setMeals] = useState([]);
    const loadMeals = async () => {
        // Implement API call to fetch meals based on search query
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const data = await response.json()
        setMeals(data.meals)
    }
    const handler = e => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        loadMeals();
    },[search])

  return (
    <div>
        <div className="w-96 mx-auto">
        <label className="input input-bordered flex items-center gap-2">
        <input onChange={handler} type="text" className="grow" placeholder="Search Meals" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

        </div>
        <div className="grid grid-cols-3 gap-4 mx-auto max-w-6xl mt-6">
        {meals?.map(meal => (
            <div key={meal.idMeal} className="border-2 border-blue-600 w-96 rounded-lg">
                <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={500} height={500}/>
                <h2 className="font-bold uppercase">Name: {meal.strMeal}</h2>
                <p>Category: {meal.strCategory}</p>
            </div>
        ))}
      </div>
    </div>
  );
}
