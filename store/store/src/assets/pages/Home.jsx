import { Link } from "react-router-dom";

export default function Home() {
  return (
   
    <div className="store-hero">
      <!-- TOP BAR -->
      <div className="topbar">
        <div className="brand">
          <div className="brand-badge">HS</div>
          <div>
         <div className="brand-title">Helen Studio</div>
           <div className="store-label">
            <span className="store-icon">&#128717;&#65039;</span>
            <span className="store-text">Store</span>
           </div>
          </div>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/store">Featured</Link>
          <Link to="/store/categories">Categories</Link>
          <Link to="/support">Support</Link>
        </nav>
      </div>

      <!-- MAIN CONTENT -->
      <div className="content">
        <div>
          <h1 className="headline">Gear up with Helen Studio merch.</h1>
          <p className="subtext">
            Discover official T-shirts, rings, necklaces, and more—designed around
            our game titles and their worlds. Limited drops, collector items, and
            fan favorites.
          </p>

          <div className="cta-row">
            <!-- This is the button that goes to your React shop page -->
            
            <a className="btn" href="#categories">Browse Categories</a>
          </div>
        </div>

        <!-- SIDE PANEL -->
        <div className="panel" id="featured">
          <h3>Featured Drops</h3>
          <div className="grid">
            <div className="card">
              <div className="card-title">Studio Tee</div>
              <div className="card-desc">Premium cotton. Minimal logo. Game-inspired back print.</div>
            </div>
            <div className="card">
              <div className="card-title">Sigil Ring</div>
              <div className="card-desc">Polished finish. Icon engraving. Collector vibe.</div>
            </div>
            <div className="card">
              <div className="card-title">Faction Necklace</div>
              <div className="card-desc">Pendant design. Adjustable chain. Looks clean.</div>
            </div>
            <div className="card">
              <div className="card-title">Mystery Item</div>
              <div className="card-desc">Limited item connected to a game title. Coming soon.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- CATEGORIES SECTION -->
      <div className="panel" id="categories" style="max-width:1100px; margin: 0 auto; width:100%;">
        <h3>Categories</h3>
        <div className="grid" style="grid-template-columns: repeat(4, 1fr);">
          <div className="card"><div class="card-title">T-Shirts</div><div class="card-desc">Classic + limited drops</div></div>
          <div className="card"><div class="card-title">Rings</div><div class="card-desc">Sigils, factions, icons</div></div>
          <div className="card"><div class="card-title">Necklaces</div><div class="card-desc">Pendants + chains</div></div>
          <div className="card"><div class="card-title">Accessories</div><div class="card-desc">More merch coming</div></div>
        </div>

        <div className="footer" id="support">
          © 2026 Helen Studio. Store homepage (landing). Click “Enter Store” to open the React shop.
        </div>
      </div>
    </div>
<div id="root"></div>
  );
}

