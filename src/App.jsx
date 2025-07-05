import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Banner from './components/Banner'
import Row from './components/Row'
import MovieDetail from './components/MovieDetail'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Banner />
              <Row title="トレンド" fetchType="trending" />
              <Row title="人気映画" fetchType="movie" />
              <Row title="人気TVシリーズ" fetchType="tv" />
              <Row title="最新映画" fetchType="nowPlaying" />
              <Row title="高評価映画" fetchType="topRatedMovies" />
              <Row title="高評価TVシリーズ" fetchType="topRatedTV" />
              <Row title="放送中のTVシリーズ" fetchType="onTheAir" />
              <Row title="アクション映画" fetchType="action" />
              <Row title="コメディ映画" fetchType="comedy" />
              <Row title="ホラー映画" fetchType="horror" />
              <Row title="ロマンス映画" fetchType="romance" />
            </>
          } />
          <Route path="/detail/:type/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
