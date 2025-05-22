export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>GameZone</h2>
          <p>Your ultimate destination for top-rated games and best deals.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Library</a></li>
            <li><a href="#">Game Store</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@gamezone.com</p>
          <p>Phone: +62 812-3456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GameZone. All rights reserved.</p>
      </div>
    </footer>
  );
}
