import React from "react";

function Categories() {
  const [activIndex, setActivIndex] = React.useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Ввегеторианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickCategories = (index) => {
    setActivIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => onClickCategories(i)}
            className={activIndex === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
