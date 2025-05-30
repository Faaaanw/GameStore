import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="home-header">
      <div className="header">
        <div className="header-page">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/library">Library</Link></p>
          <p><Link to="/game-store">Browse</Link></p>
          <p><Link to="/news">News</Link></p>
        </div>
        <div className="header-page-right">
          <a className="cart">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <div className="account">
            <a href="">
              <img
                src="https://cdn.myanimelist.net/images/anime/6/73245.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}