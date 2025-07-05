import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// トレンド（all, movie, tv, person）
export const getTrending = async (mediaType = 'all', timeWindow = 'day') => {
  // mediaType: 'all' | 'movie' | 'tv' | 'person'
  // timeWindow: 'day' | 'week'
  const response = await axios.get(`${BASE_URL}/trending/${mediaType}/${timeWindow}`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP'
    }
  });
  return response.data.results;
};

// 人気映画一覧
export const getPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      page: 1
    }
  });
  return response.data.results;
};

// 人気TVシリーズ一覧
export const getPopularTV = async () => {
  const response = await axios.get(`${BASE_URL}/tv/popular`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      page: 1
    }
  });
  return response.data.results;
};

// 最新映画
export const getNowPlayingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      page: 1
    }
  });
  return response.data.results;
};

// 高評価映画
export const getTopRatedMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      page: 1
    }
  });
  return response.data.results;
};

// 高評価TVシリーズ
export const getTopRatedTV = async () => {
  const response = await axios.get(`${BASE_URL}/tv/top_rated`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      page: 1
    }
  });
  return response.data.results;
};

// 放送中のTVシリーズ
export const getOnTheAirTV = async () => {
  const response = await axios.get(`${BASE_URL}/tv/on_the_air`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      page: 1
    }
  });
  return response.data.results;
};

// アクション映画
export const getActionMovies = async () => {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      with_genres: 28,
      page: 1
    }
  });
  return response.data.results;
};

// コメディ映画
export const getComedyMovies = async () => {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      with_genres: 35,
      page: 1
    }
  });
  return response.data.results;
};

// ホラー映画
export const getHorrorMovies = async () => {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      with_genres: 27,
      page: 1
    }
  });
  return response.data.results;
};

// ロマンス映画
export const getRomanceMovies = async () => {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      with_genres: 10749,
      page: 1
    }
  });
  return response.data.results;
};

// 映画詳細情報
export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      append_to_response: 'credits,videos,similar'
    }
  });
  return response.data;
};

// TVシリーズ詳細情報
export const getTVDetails = async (tvId) => {
  const response = await axios.get(`${BASE_URL}/tv/${tvId}`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      append_to_response: 'credits,videos,similar'
    }
  });
  return response.data;
};

// 類似作品を取得
export const getSimilarMovies = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/similar`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      page: 1
    }
  });
  return response.data.results;
};

// 類似TVシリーズを取得
export const getSimilarTV = async (tvId) => {
  const response = await axios.get(`${BASE_URL}/tv/${tvId}/similar`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      page: 1
    }
  });
  return response.data.results;
};
