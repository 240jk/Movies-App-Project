import axios from "axios";
import { Result, TopLevel } from "../models/MovieLookup";

const apiKey = "150f3884042cdae54324059aa7a59a66";

export async function GetMovieData(movieSearch: any) {
  let result = axios.get<TopLevel>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: { query: movieSearch, api_key: apiKey },
    }
  );
  console.log(result);
  return result;
}
