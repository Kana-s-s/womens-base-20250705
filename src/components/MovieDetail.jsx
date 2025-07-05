import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails, getTVDetails, getSimilarMovies, getSimilarTV } from '../api/tmdb';
import './MovieDetail.css';

function MovieDetail() {
  const { id, type } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let detailData, similarData;

        if (type === 'movie') {
          detailData = await getMovieDetails(id);
          similarData = await getSimilarMovies(id);
        } else {
          detailData = await getTVDetails(id);
          similarData = await getSimilarTV(id);
        }

        setDetail(detailData);
        setSimilar(similarData.slice(0, 6)); // 類似作品を6件まで表示
      } catch (error) {
        console.error('Error fetching details:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id, type]);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>読み込み中...</p>
      </div>
    );
  }

  if (!detail) {
    return <div className="error">作品が見つかりませんでした。</div>;
  }

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}時間${mins}分`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '不明';
    return new Date(dateString).getFullYear();
  };

  return (
    <div className="movie-detail">
      {/* 背景画像 */}
      <div 
        className="detail-backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.backdrop_path})`
        }}
      >
        <div className="backdrop-overlay"></div>
      </div>

      {/* 戻るボタン */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← 戻る
      </button>

      <div className="detail-content">
        {/* ポスターと基本情報 */}
        <div className="detail-main">
          <div className="detail-poster">
            <img 
              src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
              alt={detail.title || detail.name}
            />
          </div>
          
          <div className="detail-info">
            <h1 className="detail-title">{detail.title || detail.name}</h1>
            
            <div className="detail-meta">
              <span className="detail-year">{formatDate(detail.release_date || detail.first_air_date)}</span>
              {detail.runtime && <span className="detail-runtime">{formatRuntime(detail.runtime)}</span>}
              {detail.episode_run_time && detail.episode_run_time[0] && (
                <span className="detail-runtime">{formatRuntime(detail.episode_run_time[0])}</span>
              )}
              <span className="detail-rating">⭐ {detail.vote_average?.toFixed(1)}</span>
            </div>

            <div className="detail-genres">
              {detail.genres?.map(genre => (
                <span key={genre.id} className="genre-tag">{genre.name}</span>
              ))}
            </div>

            <p className="detail-overview">{detail.overview}</p>

            <div className="detail-buttons">
              <button className="play-button">▶ 再生</button>
              <button className="trailer-button">📺 トレーラー</button>
            </div>
          </div>
        </div>

        {/* キャスト情報 */}
        {detail.credits?.cast && detail.credits.cast.length > 0 && (
          <section className="detail-section">
            <h2>キャスト</h2>
            <div className="cast-list">
              {detail.credits.cast.slice(0, 6).map(actor => (
                <div key={actor.id} className="cast-item">
                  <img 
                    src={actor.profile_path 
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMzMzMiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTIgMTJDMTRuMjEgMCAyNS42My0xLjM1IDI1LjYzLTYuMDVIMTIuMzdDMTIuMzcgNC42NSAyMy43OSA2IDEyIDZDMTAuMjEgNiAyMS42MyA0LjY1IDIxLjYzIDZIMi4zN0MyLjM3IDEwLjY1IDEzLjc5IDEyIDEyIDEyWiIgZmlsbD0iIzk5OSIvPgo8cGF0aCBkPSJNMTIgMTJDMTRuMjEgMCAyNS42My0xMy4zNSAyNS42My0xOEgxMi4zN0MxMi4zNy0xNS4zNSAyMy43OS0xNyAxMi0xN0MxMC4yMS0xNyAyMS42My0xNS4zNSAyMS42My0xOEgyLjM3QzIuMzctMTMuMzUgMTMuNzktMTIgMTIgLTEyWiIgZmlsbD0iIzk5OSIvPgo8L3N2Zz4KPC9zdmc+'
                    }
                    alt={actor.name}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMzMzMiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTIgMTJDMTRuMjEgMCAyNS42My0xLjM1IDI1LjYzLTYuMDVIMTIuMzdDMTIuMzcgNC42NSAyMy43OSA2IDEyIDZDMTAuMjEgNiAyMS42MyA0LjY1IDIxLjYzIDZIMi4zN0MyLjM3IDEwLjY1IDEzLjc5IDEyIDEyIDEyWiIgZmlsbD0iIzk5OSIvPgo8cGF0aCBkPSJNMTIgMTJDMTRuMjEgMCAyNS42My0xMy4zNSAyNS42My0xOEgxMi4zN0MxMi4zNy0xNS4zNSAyMy43OS0xNyAxMi0xN0MxMC4yMS0xNyAyMS42My0xNS4zNSAyMS42My0xOEgyLjM3QzIuMzctMTMuMzUgMTMuNzktMTIgMTIgLTEyWiIgZmlsbD0iIzk5OSIvPgo8L3N2Zz4KPC9zdmc+';
                    }}
                  />
                  <p className="cast-name">{actor.name}</p>
                  <p className="cast-character">{actor.character}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 類似作品 */}
        {similar.length > 0 && (
          <section className="detail-section">
            <h2>類似作品</h2>
            <div className="similar-list">
              {similar.map(item => (
                <div 
                  key={item.id} 
                  className="similar-item"
                  onClick={() => navigate(`/detail/${type}/${item.id}`)}
                >
                  <img 
                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    alt={item.title || item.name}
                  />
                  <p className="similar-title">{item.title || item.name}</p>
                  <p className="similar-rating">⭐ {item.vote_average?.toFixed(1)}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default MovieDetail; 