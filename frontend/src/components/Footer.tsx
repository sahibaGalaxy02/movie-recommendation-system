const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-grid">

        {/* Column 1 */}
        <div className="footer-column">
          <h3>CineHub</h3>
          <p>Home</p>
          <p>Popular</p>
          <p>Top Rated</p>
          <p>Genres</p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Features</h3>
          <p>Movie Search</p>
          <p>Watch Trailers</p>
          <p>Favorites</p>
          <p>Recommendations</p>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Resources</h3>
          <p>About</p>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Privacy Policy</p>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: shaikhsahiba0205@gmail.com</p>
          <p>GitHub: sahibaGalaxy02</p>
<p>
  LinkedIn: 
  <a 
    href="https://www.linkedin.com/in/sahiba-shaikh-a4088a276/yu" 
    target="_blank" 
    rel="noopener noreferrer"
    className="footer-link"
  >
    View Profile
  </a>
</p>
        </div>

        {/* Column 5 */}
        <div className="footer-column">
          <h3>Stay Updated</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="footer-input"
          />
          <button className="footer-btn">
            Subscribe
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CineHub | All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;
