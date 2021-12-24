import { useState } from "react";
import "./index"; // instead of styles.css
import Button from '@mui/material/Button';
import { Navbar } from "./Navbar";
import { Movie } from "./Movie";
import * as React from 'react';




// Definition of App
export function App({movieList, setMovieList }) {
 
  return (
    <div className="App">
      <div className="movie-list">
        {movieList.map(({ name, poster, rating,summary },index) => (
          <Movie 
          deletButton={
            <Button
            onClick={()=>{
                const deleteIndex=index;
                const remainingMovies=movieList.filter((mv,idx)=>deleteIndex!== idx);
                setMovieList(remainingMovies);}}>Delete</Button>
          // <button onClick={()=>{
          //   const deleteIndex=index;
          //   const remainingMovies=movieList.filter((mv,idx)=>deleteIndex!== idx);
          //   setMovieList(remainingMovies);
          // }} className="dlt-btn">Delete</button>
        }
          name={name} poster={poster} rating={rating} summary={summary} />
        ))}
        {/* {for (movie in movies){
           <Movie name={movie.name} poster={movie.poster} rating={movie.rating} />
        }} */}
      </div>
    </div>
  );
}

