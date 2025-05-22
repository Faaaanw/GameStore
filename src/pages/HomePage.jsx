import { useState } from "react";
import { useEffect } from "react";
import "../assets/css/App.css";
import Footer from "../assets/component/Footer";
import Swal from "sweetalert2";
import gameData from "../assets/data/gameData.json"

export default function HomePage({ addToLibrary }) {
  return (
    <main className="home-main">
      <SearchBar/>
      <Recommendation addToLibrary={addToLibrary} />
      <SpecialOffer addToLibrary={addToLibrary} />
      <Category />
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11 18C15.4183 18 19 14.4183 19 10C19 5.58172 15.4183 2 11 2C6.58172 2 3 5.58172 3 10C3 14.4183 6.58172 18 11 18Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21L16.65 16.65"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      <input
        type="text"
        placeholder="Search for games..."
        value={searchTerm}
        onChange={handleSearch}
      />
     
      
    </div>
  );
}

function Recommendation({ addToLibrary }) {
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const game = gameData[currentIndex];

  const nextGame = () => {
    setCurrentIndex((prev) => (prev + 1) % gameData.length);
  };

  const prevGame = () => {
    setCurrentIndex((prev) => (prev === 0 ? gameData.length - 1 : prev - 1));
  };
  return (
    <div className="recommendation-container">
      <div className="recommendation-wrapper">
        <button onClick={prevGame} className="nav-button nav-prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 6L9 12L15 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="recommendation">
          <div className="image-recommend">
            <img src={game.image} alt={game.title} />
          </div>
          <div className="recommendation-content">
            <h1 className="game-title">{game.title}</h1>
            <p className="game-description">{game.description}</p>
            <div className="game-tag">
              {game.tags.map((tag, i) => (
                <p className="tag" key={i}>
                  {tag}
                </p>
              ))}
            </div>

            <div className="game-button">
              <p className="game-price">{game.price}</p>
              <button
                className="btn-buy"
                onClick={() =>
                  Swal.fire({
                    title: `Do you want to buy ${game.title}?`,
                    text: game.title,
                    text: `Price: ${game.price}`,
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "Confirm",
                    cancelButtonText: "Cancel",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        "Purchased!",
                        `${game.title} has been bought.`,
                        "success"
                      );
                      addToLibrary(game); // tambahkan ke library
                    }
                  })
                }
              >
                Buy
              </button>

              <button className="btn-wishlist">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <button onClick={nextGame} className="nav-button nav-next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6L15 12L9 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="pagination-dots">
        {gameData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

function SpecialOffer({ addToLibrary }) {
  const offers = [
    {
      title: "Assassin's Creed",
      originalPrice: 100,
      discount: 20,
      imageUrl: "https://images.alphacoders.com/136/1362744.png",
    },
    {
      title: "Need for Speed",
      originalPrice: 150,
      discount: 10,
      imageUrl: "https://images7.alphacoders.com/513/513808.jpg",
    },
    {
      title: "Inzoi",
      originalPrice: 200,
      discount: 30,
      imageUrl: "https://images6.alphacoders.com/139/1394916.png",
    },
    {
      title: "Sekiro",
      originalPrice: 180,
      discount: 25,
      imageUrl: "https://images2.alphacoders.com/100/1001341.jpg",
    },
    {
      title: "God of War",
      originalPrice: 90,
      discount: 15,
      imageUrl: "https://images4.alphacoders.com/680/680939.jpg",
    },
    {
      title: "Nier: Automata",
      originalPrice: 120,
      discount: 35,
      imageUrl: "https://picfiles.alphacoders.com/441/441859.jpg",
    },
  ];

  const [currentOffer, setCurrentOffer] = useState(0);
  const maxVisible = 3;

  const nextSlide = () => {
    if (currentOffer + maxVisible < offers.length) {
      setCurrentOffer((prev) => prev + maxVisible);
    }
  };

  const prevSlide = () => {
    if (currentOffer - maxVisible >= 0) {
      setCurrentOffer((prev) => prev - maxVisible);
    }
  };

  const visibleOffers = offers.slice(currentOffer, currentOffer + maxVisible);
  const handleBuy = (offer) => {
    Swal.fire({
      title: `Buy ${offer.title}?`,
      text: `Price: $${(
        offer.originalPrice *
        (1 - offer.discount / 100)
      ).toFixed(2)}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        addToLibrary(offer);
        Swal.fire(
          "Purchased!",
          `${offer.title} added to your library.`,
          "success"
        );
      }
    });
  };

  return (
    <div className="special-offer-container">
      <div className="special-offer">
        <h1>Special Offer</h1>
        <div className="offer-content-wrapper">
          <button
            className="offer-prev-btn"
            onClick={prevSlide}
            disabled={currentOffer === 0}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6L9 12L15 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="special-offer-content">
            {visibleOffers.map((offer, index) => {
              const discountedPrice =
                offer.originalPrice -
                (offer.originalPrice * offer.discount) / 100;
              return (
                <div key={index} className="special-offer-row">
                  <div className="discount-tag">
                    <h1 className="discount-text">{offer.discount}%</h1>
                  </div>
                  <div className="image-wrapper">
                    <img src={offer.imageUrl} alt={offer.title} />
                  </div>
                  <div className="special-offer-text">
                    <h2>{offer.title}</h2>
                    <div className="price-info" style={{marginBottom: "14px"}}>
                      <span className="original-price">
                        ${offer.originalPrice}
                      </span>
                      <span className="discounted-price">
                        ${discountedPrice.toFixed(2)}
                      </span>
                    </div>
                    <button
                      className="btn-buy"
                      onClick={() => handleBuy(offer)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="offer-next-btn"
            onClick={nextSlide}
            disabled={currentOffer + maxVisible >= offers.length}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6L15 12L9 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="pagination-dots">
        {Array.from(
          { length: Math.ceil(offers.length / maxVisible) },
          (_, index) => (
            <span
              key={index}
              className={`dot ${
                index === currentOffer / maxVisible ? "active" : ""
              }`}
              onClick={() => setCurrentOffer(index * maxVisible)}
            />
          )
        )}
      </div>
    </div>
  );
}
function Category() {
  const categories = [
    {
      title: "RPG",
      image:
        "https://c4.wallpaperflare.com/wallpaper/980/527/697/the-elder-scrolls-v-skyrim-dark-video-games-dragonborn-wallpaper-preview.jpg",
    },
    {
      title: "OPEN WORLD",
      image:
        "https://www.gamereactor.asia/media/16/6spilletseks_2611693_650x.jpg",
    },
    {
      title: "SURVIVAL",
      image:
        "https://c4.wallpaperflare.com/wallpaper/407/362/459/video-game-ark-survival-evolved-wallpaper-preview.jpg",
    },
    {
      title: "HORROR",
      image:
        "https://c4.wallpaperflare.com/wallpaper/920/167/651/blood-resident-evil-shotgun-nemesis-jill-valentine-hd-wallpaper-preview.jpg",
    },
    {
      title: "JRPG",
      image:
        "https://c4.wallpaperflare.com/wallpaper/789/513/121/persona-persona-5-anime-ann-takamaki-wallpaper-preview.jpg",
    },
    {
      title: "FPS",
      image:
        "https://c4.wallpaperflare.com/wallpaper/347/380/22/valorant-jett-valorant-riot-games-hd-wallpaper-preview.jpg",
    },
    {
      title: "SOULS-LIKE",
      image:
        "https://c4.wallpaperflare.com/wallpaper/761/403/799/dark-souls-3-games-pc-games-ps-games-wallpaper-preview.jpg",
    },
  ];

  const [currentCategory, setCurrentCategory] = useState(0);
  const maxVisible = 4;

  const nextSlide = () => {
    if (currentCategory + maxVisible < categories.length) {
      setCurrentCategory((prev) => prev + maxVisible);
    }
  };

  const prevSlide = () => {
    if (currentCategory - maxVisible >= 0) {
      setCurrentCategory((prev) => prev - maxVisible);
    }
  };

  const visibleCategories = categories.slice(
    currentCategory,
    currentCategory + maxVisible
  );

  return (
    <div className="category">
      <h3>BROWSE BY CATEGORY</h3>
      <div className="category-wrapper">
        <button
          className="category-prev-btn"
          onClick={prevSlide}
          disabled={currentCategory === 0}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 6L9 12L15 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="category-scroll-area">
          {visibleCategories.map((cat, index) => (
            <div
              className="category-card"
              key={index}
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="overlay" />
              <p>{cat.title}</p>
            </div>
          ))}
        </div>

        <button
          className="category-next-btn"
          onClick={nextSlide}
          disabled={currentCategory + maxVisible >= categories.length}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6L15 12L9 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-to-top ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}
