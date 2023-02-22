import axios from "axios";
import { TopLevel } from "../models/CastLookup";

const apiKey = "150f3884042cdae54324059aa7a59a66";

export async function GetCastData(idsearch: number) {
  let result = axios.get<TopLevel>(
    "https://api.themoviedb.org/3/movie" && {
        params: { movie_id: idsearch, api_key: apiKey },
      } &&
      "/credits"
  );
  console.log(result);
  return result;
}
