import { useState } from "react";
import { useNavigate } from "react-router-dom";
const sampleNews = [
  {
    id: 1,
    title: "New Expansion Launch: Elden Ring Shadow of The Erdtree",
    summary:
      "The long-awaited expansion is here! Explore new realms, face new challenges, and uncover the mysteries of the Erdtree.",
    image:
      "https://gamebrott.com/wp-content/uploads/2024/06/Review-Elden-Ring-Shadow-of-the-Erdtree-%E2%80%94-Petualangan-Baru-di-Realm-of-Shadow-Header-jpg-750x375.webp",
    date: "May 20, 2025",
  },
  {
    id: 2,
    title: "Patch 1.2.0 – Major Balance Update",
    summary:
      "This patch introduces critical balance changes to the PvP mode, along with bug fixes and UI improvements.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjEXMNlMhCPOJdQ62X8hg_Mv85yqXc4GvnQ&s",
    date: "May 15, 2025",
  },
  {
    id: 3,
    title: "Community Event: Double XP Weekend!",
    summary:
      "Join us this weekend for double XP across all game modes and exclusive community rewards.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/news/double-xp.jpg",
    date: "May 10, 2025",
  },
];

export default function NewsPage() {
  const [news] = useState(sampleNews);
  const navigate = useNavigate();

  return (
    <div className="news-page">
      <h1 className="news-title">Game News & Updates</h1>
      <div className="news-list">
        {news.map((item) => (
          <div className="news-card" key={item.id}>
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-content">
              <h3 className="news-headline">{item.title}</h3>
              <p className="news-date">{item.date}</p>
              <p className="news-summary">{item.summary}</p>
              <button
                className="read-more"
                onClick={() =>
                  navigate(`/news/${item.id}`, { state: { newsItem: item } })
                }
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
