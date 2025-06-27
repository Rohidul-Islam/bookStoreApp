import React from "react";

function Cards({ daily, onAddToCart }) {
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
    <div className="mt-4 my-1 mx-1 p-3 fade-in-up">
      <div className="card glass shadow-glass hover:scale-105 hover:shadow-glow duration-300 h-[420px] rounded-2xl border border-primary/10">
        <figure className="h-[260px] w-full rounded-xl overflow-hidden">
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
        <div className="card-body p-4 h-[160px] flex flex-col justify-between">
          <div>
            <h2 className="card-title text-lg font-bold line-clamp-1 mb-1 text-primary drop-shadow-glow">
              {daily.name}
            </h2>
            <p className="text-sm line-clamp-2 mb-2">{daily.title}</p>
          </div>
          <div className="card-actions flex justify-between items-center mt-2">
            <div className="text-accent font-bold text-base">Rs.{daily.price}</div>
            <div className="flex gap-2">
              
              <button className="btn btn-accent px-4 py-1 text-sm" style={{minWidth:'80px'}} onClick={() => onAddToCart && onAddToCart(daily)}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;