import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import CatCard from "../../components/CatCard";


const Homepage = ({setFavorites, favorites}) => {
  const dispatch = useDispatch()
  const [cats, setCats] = useState([])


  useEffect(() => {
    axios('https://api.thecatapi.com/v1/images/search?page=0&limit=20')
      .then(({data}) => setCats(data))
  }, [])

  const addToFavorites = (cat) => {
    dispatch({type: 'ADD_TO_FAVORITES', payload: cat})
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
        {cats.map (cat => <CatCard cat={cat}  action={addToFavorites} />)}
      </div>
    </div>
  );
};

export default Homepage;