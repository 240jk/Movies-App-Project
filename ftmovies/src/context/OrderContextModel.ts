import {Result} from "../models/MovieLookup"

export interface OrderContextModel {
    order:Result[],
    addResult: (result:Result) => void,
    removeResult: (id:number) => void
}