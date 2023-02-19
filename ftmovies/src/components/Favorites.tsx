import { useContext, useState } from "react"
import ResultContext from "../context/ResultContext";
// import OrderContext from "../context/ResultContext";


//Functionality for add delete button! Add to cards when ready

// import { Favorites } from "./Favorites";
// // import OrderContext from "../context/ResultContext";



// export interface IMovieSearchProps{
//   result:Result;
  
// }
// props:IMovieSearchProps
// let {result} = props;
// const { addResult, removeResult } = useContext(ResultContext);



export function Favorites({}){
    const{order} = useContext(ResultContext);
    return (
        <div>
            <ol>
                {order.map((result) => <li key = {result.id}></li>)}
            </ol>
        </div>
    )
    }