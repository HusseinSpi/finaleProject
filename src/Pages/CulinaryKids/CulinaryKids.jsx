import { useState } from "react";
import culinaryKidsData from "./culinarykids-data";
import { useTranslation } from "react-i18next";

import "./CulinaryKids.css";
import "./CulinaryKidsLaptop.css"; //  1498 w
import "./CulinaryKidsIpad.css"; //    768 w
import "./CulinaryKidsPhone.css"; //   412 w

const CulinaryKids = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const getRecipeData = (recipe) => {
    switch (i18n.language) {
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
        <h1 className="culinary-title text-center">Culinary Kids Recipes</h1>
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
                      {recipe[`recipeTitle${i18n.language.toUpperCase()}`]}
                    </h2>
                    <h3 className="h3-title">
                      {i18n.language === "en"
                        ? "Ingredients"
                        : i18n.language === "he"
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
                      {i18n.language === "en"
                        ? "Preparation Method"
                        : i18n.language === "he"
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
