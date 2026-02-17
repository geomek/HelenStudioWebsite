import { Link } from "react-router-dom";

export default function Store() {
  return (
    <div className="store-hero">
      <div className="topbar">
        <div className="brand">
          <div className="brand-title">Helen Studio</div>
          <span className="store-text">Store</span>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/store">Featured</Link>
          <Link to="/store/categories">Categories</Link>
          <Link to="/support">Support</Link>
        </nav>
      </div>

      <div className="content">
        <h1 className="headline">Gear up with Helen Studio merch.</h1>

        <div className="panel" id="categories">
          <h3>Categories</h3>

          <div className="grid">
            <Link className="card card-link" to="/store/tshirts">
              <div className="card-title">T-Shirts</div>
              <div className="card-desc">Classic + limited drops</div>
            </Link>

            <Link className="card card-link" to="/store/rings">
              <div className="card-title">Rings</div>
              <div className="card-desc">Sigils, factions, icons</div>
            </Link>

            <Link className="card card-link" to="/store/necklaces">
              <div className="card-title">Necklaces</div>
              <div className="card-desc">Pendants + chains</div>
            </Link>

            <Link className="card card-link" to="/store/accessories">
              <div className="card-title">Accessories</div>
              <div className="card-desc">More merch coming</div>
            </Link>
          </div>
        </div>

        <div className="footer" id="support">
          © 2026 Helen Studio. Store homepage (landing).
        </div>
      </div>
    </div>
  );
}