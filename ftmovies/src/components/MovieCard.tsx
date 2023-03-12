import { Result } from "../models/MovieLookup";
import "../css/MovieCard.css";
import { useContext, useState } from "react";
import ResultContext from "../context/OrderContext";
import OrderContext from "../context/OrderContext";


//Functionality for add delete button! Add to cards when ready

// import { Favorites } from "./Favorites";
// // import OrderContext from "../context/ResultContext";



// export interface IMovieSearchProps{
//   result:Result;
  
// }
// props:IMovieSearchProps
// let {result} = props;
// const { addResult, removeResult } = useContext(ResultContext);



interface IMovieCardProps {
  MovieResult: Result;
}

export function MovieCard(props: IMovieCardProps) {
  const{MovieResult} = props;
  const { addResult, removeResult } = useContext(OrderContext);

  return (
  
    <div className="MovieCards">
      <div className="MovieCard">
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.MovieResult.poster_path}`}
          alt={props.MovieResult.title}
        />
        <div className="Card-Info">
          <h2>{props.MovieResult.title}</h2>
          <div className="Vote-Average">{props.MovieResult.vote_average.toFixed(1)}</div>
          <div>{props.MovieResult.overview}</div>
         
          <div><button onClick={() => addResult(MovieResult)}>Add</button></div>
          <div><button onClick={() => removeResult(MovieResult.id)}>Remove</button></div>
          
          {/* <button onClick={() => removeResult(MovieResult)}>Remove</button> */}
          
        </div>
        
      </div>
    </div>
  );
}
