

export default function StoreApp() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 32,
        background: "#0b0d12",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ margin: 0 }}>Helen Studio Store</h1>
        <p style={{ opacity: 0.75 }}>
          Official merchandise and future drops.
        </p>
      </header>

      <section
        style={{
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 16,
          padding: 24,
          maxWidth: 600,
        }}
      >
        <h2>Coming Soon</h2>
        <p style={{ opacity: 0.8 }}>
          This store is under development.  
          Products, collections, and checkout will be added here.
        </p>
      </section>
    </div>
  );
}

import React from "react";
import { StoreProvider } from "./StoreContext";
import Categories from "./Categories";
import ProductSection from "./ProductSection";
import Cart from "./Cart";

export default function App() {
  return (
    <StoreProvider>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
          <div style={{ flex: 1 }}>
            <h1>Helen Studio Store</h1>
            <Categories />
            <ProductSection />
          </div>

          <div style={{ width: 320, position: "sticky", top: 20 }}>
            <Cart />
          </div>
        </div>
      </div>
    </StoreProvider>
  );
}

import React from "react";
import StoreContent from "./StoreContent";
export default function StoreApp(){
  return <StoreContent/>;
}