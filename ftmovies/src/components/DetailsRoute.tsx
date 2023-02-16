import { useParams } from 'react-router-dom';
import movieList from '../data/movielist';


export function DetailsRoute () {
    let { Genre } = useParams();

    let movie = movieList.find((movie) => movie.Genre === Genre);
    
  return (
    <div>
    <h1>s</h1>
    
    </div>
  );
}