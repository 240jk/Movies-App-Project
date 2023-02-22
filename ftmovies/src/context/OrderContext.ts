import { createContext } from "react";
import { OrderContextModel } from "./OrderContextModel";

const defaultValue:OrderContextModel = {
    order: [],
    addResult: () => {},
    removeResult: () => {}
}

//factory pattern
const OrderContext = createContext(defaultValue);

export default OrderContext;