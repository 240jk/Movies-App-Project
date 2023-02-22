import { useContext, useState } from "react"
import OrderContext from "../context/OrderContext";
import ResultContext from "../context/OrderContext";
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



export function Favorites(){
    const{order} = useContext(OrderContext);
    return (
        <div className= "Favorites">
            <ol>
               
                hq
            </ol>
           
        </div>
    )
    }