import { Counter } from "./Counter";
import * as React from 'react';
import HoverRating from "./labels";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


export function Movie({ deletButton, name, poster, rating, summary }) {
  const styles = { color: rating >= 8.5 ? "green" : "Red" };
  const card = (
    <React.Fragment>
      <CardContent>
      <img src={poster} alt="RRR" className="movie-poster" />
      <h3 className="movie-name">{name}</h3>
      <div className="movie-specs">
        <p className="rating">
          <span>⭐</span>{rating}
        </p>
        <Counter />
        {deletButton}
      </div>
      <p className="movie-rating" style={styles}>
          <HoverRating/> 
        </p>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <br/>
        {/* <p className="movie-summary">{summary}</p> */}
      </CardActions>
    </React.Fragment>
  );
  
  return (
    <div className="movie-container">
       <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    </div>
  );
}
