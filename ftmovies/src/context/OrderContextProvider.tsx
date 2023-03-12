import { ReactNode, useState } from "react";
import {Result} from "../models/MovieLookup";
import OrderContext from "./OrderContext";


import ResultContext from "./OrderContext";

interface IOrderContextProviderProps{
    children: ReactNode
}

const OrderContextProvider = ({children}:IOrderContextProviderProps) =>{
    const [order, setOrder] = useState<Result[]>([]);

    const addResult = (result:Result) => {
        setOrder([...order, result]);
    }

  
    const removeResult = (id:number) => {
        setOrder(order.filter((x) => x.id !== id));
    }
    return(<OrderContext.Provider value={{ 
        order: order, 
        addResult: addResult,
        removeResult: removeResult
    }}>{children}</OrderContext.Provider>);
}
export default OrderContextProvider;