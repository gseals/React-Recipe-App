import React, { useEffect, useState } from 'react';
import './App.css';
import apiStuff from './helpers/apiFish.json';

const App = () => {
  const APP_ID = apiStuff.apiID;
  const APP_KEY = apiStuff.apiK;

  useEffect(() => {
    
  }, []);

  const GetRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
