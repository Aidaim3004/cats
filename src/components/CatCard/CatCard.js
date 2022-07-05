import React from 'react';
import FavoriteBtn from "../FavoriteBtn";

const CatCard = ({cat, action, isFavorites}) => {
  return (
    <div key={cat.id}
         className=" cat-card relative w-full h-48 bg-red-400 rounded-lg  flex flex-col justify-center items-center">
      <img className="object-center object-cover  h-full w-full"
           src={cat.url}
           alt="photo"/>
      <FavoriteBtn onClick={() => action(cat)} isFavorites={isFavorites}/>
    </div>
  );
};

export default CatCard;