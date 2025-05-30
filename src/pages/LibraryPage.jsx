import { useState } from "react";

export default function LibraryPage({ gamesLibrary }) {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="library-main">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <Sidebar gamesLibrary={gamesLibrary} onSelectGame={setSelectedGame} />
      <div className="library-main-content">
        {selectedGame ? (
          <GameDetail
            game={selectedGame}
            onBack={() => setSelectedGame(null)}
          />
        ) : (
          <>
            <LibraryContent gamesLibrary={gamesLibrary} />
            <div className="divider"></div>
            <AllGames gamesLibrary={gamesLibrary} />
          </>
        )}
      </div>
    </div>
  );
}

export function Sidebar({ gamesLibrary, onSelectGame }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredGames = gamesLibrary.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sidebar">
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          id="searchInput"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <h4>All ({filteredGames.length})</h4>
      <div className="list-game">
        {filteredGames.map((game, index) => (
          <div
            className="game-item"
            key={index}
            onClick={() => onSelectGame(game)}
          >
            <img src={game.image} alt={game.title} />
            <p>{game.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LibraryContent({ gamesLibrary }) {
  const maxVisibleItems = 5;
  const [visibleItems, setVisibleItems] = useState(maxVisibleItems);
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleGames = gamesLibrary.slice(0, visibleItems);

  return (
    <div className="library-content">
      <div className="recent-container">
        <div className="recent-title">
          <h2>Recent Games</h2>
          <div className="games-recent">
            {visibleGames.map((game, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className={
                    isActive
                      ? "game-card game-list-recent"
                      : "game-card game-card-regular"
                  }
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={game.image} />
                  {isActive && (
                    <div className="recent-button">
                      <button className="play-button">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
                            fill="#ffffffff"
                          />
                        </svg>
                      </button>
                      <h5>{game.title}</h5>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AllGames({ gamesLibrary }) {
  return (
    <div className="all-games">
      <h2>All Games</h2>
      <div className="games-list">
        {gamesLibrary.map((game, index) => (
          <div className="game-card-regular" key={index}>
            <img src={game.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

function GameDetail({ game, onBack }) {
  return (
    <div className="game-detail">
      <button onClick={onBack} className="back-button">
          <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12H18M6 12L11 7M6 12L11 17"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className="detail-info-wrapper">
        <div className="detail-content">
          <img src={game.image} alt={game.title} className="detail-image" />
          <div className="detail-info">
            <h1 className="game-title">{game.title}</h1>
            <p className="game-description">
              {game.description || "No description available."}
            </p>
            <button className="play-button-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
                  fill="#ffffff"
                />
              </svg>{" "}
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

