import { Link } from "react-router-dom";

export default function TShirts() {
  return (
    <div style={{ padding: 30 }}>
      <h2>T-Shirts</h2>
      <p>Your T-Shirts React code goes here.</p>
      <Link to="/store">← Back to Store</Link>
    </div>
  );
}