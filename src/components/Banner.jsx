import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTrending } from '../api/tmdb';
import './Banner.css';

function Banner() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const trending = await getTrending('all', 'day');
      // 映画またはTVシリーズのみをフィルタリング
      const filteredItems = trending.filter(item => 
        item.media_type === 'movie' || item.media_type === 'tv'
      );
      setMovie(filteredItems[Math.floor(Math.random() * filteredItems.length)]);
    }
    fetchData();
  }, []);

  if (!movie) return null;

  // 説明文を短縮
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <section className="banner" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
    }}>
      <div className="banner-contents">
        <h1 className="banner-title">{movie.title || movie.name}</h1>
        <p className="banner-description">{truncate(movie.overview, 150)}</p>
        <div className="banner-buttons">
          <button className="banner-button play">
            ▶ 再生
          </button>
          <button 
            className="banner-button info"
            onClick={() => {
              const mediaType = movie.media_type || 'movie';
              navigate(`/detail/${mediaType}/${movie.id}`);
            }}
          >
            ℹ 詳細情報
          </button>
        </div>
      </div>
      <div className="banner-fadeBottom" />
    </section>
  );
}

export default Banner; 