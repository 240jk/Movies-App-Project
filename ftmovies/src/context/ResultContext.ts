import { createContext } from "react";
import { ResultContextModel } from "./ResultContextModel";

const defaultValue:ResultContextModel = {
    order: [],
    addResult: () => {},
    removeResult: () => {}
}

//factory pattern
const ResultContext = createContext(defaultValue);

export default ResultContext;