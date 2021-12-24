import { useState } from "react";
import * as React from 'react';

export function AddMovies({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  return (
    <div className="add-movie">
      <input
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Movie Name" />
      <input
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Enter Img Url" />
      <input
        onChange={(event) => setRating(event.target.value)}
        placeholder="Enter Movie Ratings" />
      <br />
      <button
        className="add-btn"
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating
          };
          setMovieList([...movieList, newMovie]);
        }}
      >
        Add-Movie
      </button>
    </div>
  );

}
