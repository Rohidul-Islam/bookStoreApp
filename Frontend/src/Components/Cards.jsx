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
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img 
            src={getImagePath(daily.image)} 
            alt={daily.name}
            className="w-half h-48 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/default-book-cover.jpg'; // Add a default image in public folder
            }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {daily.name}
            
          </h2>
          <p>{daily.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">Rs.{daily.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;