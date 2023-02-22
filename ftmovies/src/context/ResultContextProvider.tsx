import { ReactNode, useState } from "react";
import {Result} from "../models/MovieLookup";


import ResultContext from "./ResultContext";

interface IResultContextProviderProps{
    children: ReactNode
}

const ResultContextProvider = ({children}:IResultContextProviderProps) =>{
    const [order, setOrder] = useState<Result[]>([]);

    const addResult = (result:Result) => {
        setOrder([...order, result]);
    }

  
    const removeResult = (id:number) => {
        setOrder(order.filter((x) => x.id !== id));
    }
    return(<ResultContext.Provider value={{ 
        order: order, 
        addResult: addResult,
        removeResult: removeResult
    }}>{children}</ResultContext.Provider>);
}
export default ResultContextProvider;