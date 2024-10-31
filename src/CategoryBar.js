import React from 'react';

function CategoryBar({ setCategory }) {
  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <div className="flex justify-between bg-gray-100 md:px-44">  
    <div className="flex space-x-4 p-4 bg-gray-100">
      <button onClick={() => handleCategoryClick('movie')} className="text-gray-700 font-medium">Movies</button>
      <button onClick={() => handleCategoryClick('series')} className="text-gray-700 font-medium">Stream</button>
      <button onClick={() => handleCategoryClick('event')} className="text-gray-700 font-medium">Events</button>
      <span className="text-gray-500 font-medium">Plays</span>
      <span className="text-gray-500 font-medium">Sports</span>
      <span className="text-gray-500 font-medium">Activities</span>
    </div>
    <div className="lg:flex justify-between space-x-4 p-4 w-96 hidden">
    <span className="text-gray-500 font-medium">ListYourShow</span>
      <span className="text-gray-500 font-medium">Corporates</span>
      <span className="text-gray-500 font-medium">Offers</span>
      <span className="text-gray-500 font-medium">Gift Cards</span>
    </div>
    </div>
  );
}

export default CategoryBar;
