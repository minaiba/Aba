import React, { useEffect, useState } from "react";
import { translations } from "../Notice/Translations";
import { CiHeart } from "react-icons/ci";

export default function Recipe({ lang }) {
  const t = translations[lang];

  const [areas, setAreas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Загрузка списка стран (Area)
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => setAreas(data.meals));
  }, []);

  // Загрузка списка категорий
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => setCategories(data.meals));
  }, []);

  // Загрузка блюд по выбранным фильтрам
  useEffect(() => {
    if (selectedArea && selectedCategory) {
      // Фильтруем по Area и Category - чтобы получить пересечение, нужно загрузить по одному и пересечь вручную
      Promise.all([
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`).then((res) => res.json()),
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`).then((res) => res.json()),
      ]).then(([areaData, categoryData]) => {
        if (!areaData.meals || !categoryData.meals) {
          setMeals([]);
          return;
        }
        // Найдем пересечение по idMeal
        const areaMealsIds = new Set(areaData.meals.map((m) => m.idMeal));
        const intersection = categoryData.meals.filter((m) => areaMealsIds.has(m.idMeal));
        setMeals(intersection);
      });
    } else if (selectedArea) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`)
        .then((res) => res.json())
        .then((data) => setMeals(data.meals || []));
    } else if (selectedCategory) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => setMeals(data.meals || []));
    } else {
      setMeals([]);
    }
  }, [selectedArea, selectedCategory]);

  // Загрузка подробностей о рецепте
  const fetchMealDetails = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedMeal(data.meals[0]);
        setModalOpen(true);
      });
  };

  return (
    <div className="container w-[1300px] italic mx-auto p-4 text-blue-950">
      <h1 className="text-4xl font-bold italic mb-6 text-center text-white">{t.recipes}</h1>

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <div>
          <label className="block mb-1 font-semibold text-white">{t.kitchen}</label>
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="rounded px-3 py-2 bg-white shadow border border-gray-300"
          >
            <option value="">{t.allCountries || "Все страны"}</option>
            {areas.map((area) => (
              <option key={area.strArea} value={area.strArea}>
                {area.strArea}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold text-white">{t.dishes}</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded px-3 py-2 bg-white shadow border border-gray-300"
          >
            <option value="">{t.allCategories || "Все категории"}</option>
            {categories.map((cat) => (
              <option key={cat.strCategory} value={cat.strCategory}>
                {cat.strCategory}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals.length === 0 && <p className="text-white text-center col-span-full">{t.noRecipes || "Рецептов не найдено"}</p>}
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="rounded shadow p-2 cursor-pointer bg-white/10 backdrop-blur-md"
            onClick={() => fetchMealDetails(meal.idMeal)}
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-58 mt-2 object-cover rounded" />
            <div className="flex my-5">
            <h2 className="text-xl text-white font-semibold ml-6">{meal.strMeal}</h2>
            <CiHeart className="text-white text-3xl ml-[50%] hover:text-red-600"/>              
            </div>
          </div>
        ))}
      </div>

      {modalOpen && selectedMeal && (
        <div className="fixed inset-0 backdrop-blur-md bg-blue/5 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded p-6 w-full max-w-3xl max-h-[80vh] overflow-y-auto relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedMeal.strMeal}</h2>
            <img
              src={selectedMeal.strMealThumb}
              alt={selectedMeal.strMeal}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{t.ingredients || "Ингредиенты:"}</h3>
            <ul className="list-disc list-inside mb-4 max-h-40 overflow-auto">
              {Array.from({ length: 20 }, (_, i) => {
                const ingredient = selectedMeal[`strIngredient${i + 1}`];
                const measure = selectedMeal[`strMeasure${i + 1}`];
                return (
                  ingredient &&
                  ingredient.trim() !== "" && (
                    <li key={i}>
                      {ingredient} - {measure}
                    </li>
                  )
                );
              })}
            </ul>
            <h3 className="text-xl font-semibold mb-2">{t.instructions || "Инструкции:"}</h3>
            <p>{selectedMeal.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}






