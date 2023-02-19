import { useContext, useState } from "react"
import ResultContext from "../context/ResultContext";
import OrderContext from "../context/ResultContext";



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