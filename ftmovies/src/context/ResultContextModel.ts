import {Result} from "../models/MovieLookup"

export interface ResultContextModel {
    order:Result[],
    addResult: (result:Result) => void,
    removeResult: (id:number) => void
}