import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { newsItem } = location.state || {};

  if (!newsItem) return <div style={{ padding: "2rem" }}>News not found.</div>;

  return (
    <div
      className="news-detail-page"
      style={{ padding: "40px 5%", color: "white" }}
    >
      <div className="btn-back-news"
        onClick={() => navigate(-1)}
       
      >
        <svg
          width="50px"
          height="50px"
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
      </div>

      <img
        src={newsItem.image}
        alt={newsItem.title}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />

      <h1 style={{ fontSize: "2rem", marginTop: "1rem" }}>{newsItem.title}</h1>
      <p style={{ color: "#aaa", marginBottom: "1rem" }}>{newsItem.date}</p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
        {newsItem.summary}
      </p>
    </div>
  );
}
