import React from "react";

function Cards({ daily }) {
  // Function to get the correct image path
  const getImagePath = (image) => {
    try {
      return new URL(`../../public/${image}`, import.meta.url).href;
    } catch (error) {
      console.error('Error loading image:', error);
      return ''; // Return empty string or a default image path
    }
  };

  return (
    <div className="mt-4 my-1 mx-1 p-3">
      <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border h-[420px]">
        <figure className="h-[300px] w-full">
          <img 
            src={getImagePath(daily.image)} 
            alt={daily.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/default-book-cover.jpg';
            }}
          />
        </figure>
        <div className="card-body p-3 h-[120px]">
          <h2 className="card-title text-base font-bold line-clamp-1 mb-1">
            {daily.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-2">{daily.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline text-sm">Rs.{daily.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer text-sm">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;