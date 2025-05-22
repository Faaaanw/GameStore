import { useState, useEffect } from "react";
import Footer from "../assets/component/Footer";

export default function GameStorePage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <div className="main-game-container">
        <h2>All Products</h2>
        <div className="content-game-container">
          <Store />
        </div>
      </div>
    </>
  );
}

function Store() {
  const [allGames, setAllGames] = useState([]);      // data asli dari API
  const [filteredGames, setFilteredGames] = useState([]); // data hasil filter
  const [searchTerm, setSearchTerm] = useState("");  // input pencarian

  useEffect(() => {
    fetch("http://localhost:3001/api/games")
      .then((res) => res.json())
      .then((data) => {
        setAllGames(data);
        setFilteredGames(data);
      })
      .catch((err) => console.error("Failed to fetch games:", err));
  }, []);

  // Fungsi ini dipanggil setiap input search berubah
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter game berdasarkan judul (title)
    const filtered = allGames.filter((game) =>
      game.title.toLowerCase().includes(term)
    );
    setFilteredGames(filtered);
  };

  return (
    <div className="store-container">
      <div className="left-content">
        <div className="game-search">
          <input
            type="text"
            id="searchInput"
            placeholder="Search Game"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="search-button">
            <i className="fas fa-search search-icon"></i>
          </button>
        </div>

        <div className="store-game scrollable-list">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <div className="store-game-list" key={game.id}>
                <img src={game.thumbnail} alt={game.title} />
                <div className="game-info">
                  <h3>{game.title}</h3>
                  <p>{game.release_date}</p>
                  <p className="price">Free</p>
                </div>
              </div>
            ))
          ) : (
            <p>No games found.</p>
          )}
        </div>
      </div>
      <GameFilter />
    </div>
  );
}


function GameFilter() {
  return (
    <div className="right-filters">
      <h4>Narrow by</h4>
      <div className="filter-group">
        <label>
          <input type="checkbox" /> Hide owned items
        </label>
        <label>
          <input type="checkbox" /> Special offers
        </label>
        <label>
          <input type="checkbox" /> Free to play
        </label>
      </div>
    </div>
  );
}
