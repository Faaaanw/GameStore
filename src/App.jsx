import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './assets/css/App.css'
import './assets/css/Library.css'
import './assets/css/Store.css'
import './assets/css/News.css'
import HomePage from './pages/HomePage'
import LibraryPage from './pages/LibraryPage'
import Header from './assets/component/Header'
import Footer from './assets/component/Footer'
import GameStorePage from './pages/GameStorePage'
import NewsPage from './pages/NewsPage'
import NewsDetailPage from './pages/NewsDetailPage'

function App() {
  // Ambil data awal dari localStorage (parse JSON-nya), kalau gak ada pakai array kosong
  const [libraryGames, setLibraryGames] = useState(() => {
    const saved = localStorage.getItem('libraryGames')
    return saved ? JSON.parse(saved) : []
  });

  const addToLibrary = (game) => {
    const gameToAdd = {
      title: game.title,
      image: game.image || game.imageUrl,
      price: game.price || (game.originalPrice ? (game.originalPrice * (1 - game.discount / 100)).toFixed(2) : undefined),
      description: game.description || "",
    };

    const isExist = libraryGames.some(g => g.title === gameToAdd.title);
    if (!isExist) {
      setLibraryGames(prev => [...prev, gameToAdd]);
    }
  };

  // Simpan ke localStorage setiap kali libraryGames berubah
  useEffect(() => {
    localStorage.setItem('libraryGames', JSON.stringify(libraryGames));
  }, [libraryGames]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage addToLibrary={addToLibrary}/>} />
          <Route path="/library" element={<LibraryPage gamesLibrary={libraryGames}/>} />
          <Route path="/game-store" element={<GameStorePage/>} />
          <Route path="/news" element={<NewsPage/>} />
          <Route path="/news/:id" element={<NewsDetailPage/>} />
        </Routes>
         
      </Router>
    </>
  )
}

export default App
