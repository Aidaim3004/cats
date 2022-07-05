import React, {useState} from 'react';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites";


const App = () => {
  const [favorites, setFavorites] = useState([])




  return (
    <div>
      <Header/>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Homepage setFavorites={setFavorites} favorites={favorites}/>}/>
          <Route path="/favorites" element={<Favorites favorites={favorites}/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;