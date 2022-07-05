import React from 'react';

const FavoriteBtn = ({onClick, isFavorites = false}) => {
  return (
      <svg onClick={onClick} className="favorite-svg" width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z" fill="#F24E1E"/>
        <path d="M19.5 34C4 19 2 12.5 2 9.5C2.71082 5.59047 4.92166 3.49676 4.3535 3.4293L4 3.5C4.16721 3.44426 4.28223 3.42084 4.3535 3.4293L11.5 2L19.5 6.5L27 2H33.5L38 9.5L35.5 18.5L29 25.5L19.5 34Z" fill={isFavorites ? 'rgb(240,78,30)' :  'transparent'} />
      </svg>

  );
};

export default FavoriteBtn;