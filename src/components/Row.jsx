import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  getPopularMovies, 
  getPopularTV, 
  getTrending,
  getNowPlayingMovies,
  getTopRatedMovies,
  getTopRatedTV,
  getOnTheAirTV,
  getActionMovies,
  getComedyMovies,
  getHorrorMovies,
  getRomanceMovies
} from '../api/tmdb';
import './Row.css';

function Row({ title, fetchType }) {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = [];
      switch (fetchType) {
        case 'movie':
          data = await getPopularMovies();
          break;
        case 'tv':
          data = await getPopularTV();
          break;
        case 'trending':
          data = await getTrending('all', 'day');
          break;
        case 'nowPlaying':
          data = await getNowPlayingMovies();
          break;
        case 'topRatedMovies':
          data = await getTopRatedMovies();
          break;
        case 'topRatedTV':
          data = await getTopRatedTV();
          break;
        case 'onTheAir':
          data = await getOnTheAirTV();
          break;
        case 'action':
          data = await getActionMovies();
          break;
        case 'comedy':
          data = await getComedyMovies();
          break;
        case 'horror':
          data = await getHorrorMovies();
          break;
        case 'romance':
          data = await getRomanceMovies();
          break;
        default:
          data = await getPopularMovies();
      }
      setItems(data);
    }
    fetchData();
  }, [fetchType]);

  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-posters">
        {items.map(item => {
          const mediaType = item.media_type || (fetchType === 'tv' ? 'tv' : 'movie');
          return (
            <img
              key={item.id}
              className="row-poster"
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.title || item.name}
              title={item.title || item.name}
              onClick={() => navigate(`/detail/${mediaType}/${item.id}`)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Row; 