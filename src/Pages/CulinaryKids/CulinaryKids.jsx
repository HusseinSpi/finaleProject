import React, { useState } from "react";
import culinaryKidsData from "./culinarykids-data";

import "./CulinaryKids.css";

const CulinaryKids = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const getRecipeData = (recipe) => {
    switch (language) {
      case "he":
        return {
          img: recipe.imgHe,
          title: recipe.recipeTitleHe,
          ingredients: recipe.ingredientsHe,
          preparationMethod: recipe.preparationMethodHe,
        };
      case "ar":
        return {
          img: recipe.imgAr,
          title: recipe.recipeTitleAr,
          ingredients: recipe.ingredientsAr,
          preparationMethod: recipe.preparationMethodAr,
        };
      default:
        return {
          img: recipe.imgEn,
          title: recipe.recipeTitleEn,
          ingredients: recipe.ingredientsEn,
          preparationMethod: recipe.preparationMethodEn,
        };
    }
  };

  return (
    <div className="culinary-main-container">
      <div className="culinary-sub-container">
        <h1 className="culinary-title">Culinary Kids Recipes</h1>
        <select onChange={handleLanguageChange} value={language}>
          <option value="en">English</option>
          <option value="he">Hebrew</option>
          <option value="ar">Arabic</option>
        </select>
        <div className="card-grid">
          {culinaryKidsData.map((recipe) => {
            const { img, title, ingredients, preparationMethod } =
              getRecipeData(recipe);
            return (
              <div key={recipe.id} className="flip-card">
                <div className="flip-card-inner">
                  <div
                    className="flip-card-front"
                    style={{
                      backgroundImage: `url(${img})`,
                      ...recipe.imgStyle,
                    }}
                  >
                    {/* Recipe title is removed from the front */}
                  </div>
                  <div className="flip-card-back">
                    <h2 className="h2-title">
                      {recipe[`recipeTitle${language.toUpperCase()}`]}
                    </h2>
                    <h3 className="h3-title">
                      {language === "en"
                        ? "Ingredients"
                        : language === "he"
                        ? "מרכיבים"
                        : "المكونات"}
                    </h3>
                    <ul className="ul-class-meal-page">
                      {ingredients.map((ingredient, index) => (
                        <li className="li-class-meal-page" key={index}>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                    <h3 className="h3-title">
                      {language === "en"
                        ? "Preparation Method"
                        : language === "he"
                        ? "אופן הכנה"
                        : "طريقة التحضير"}
                    </h3>
                    <ol className="ol-class-meal-page">
                      {preparationMethod.map((step, index) => (
                        <li className="li-class-meal-page" key={index}>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CulinaryKids;
