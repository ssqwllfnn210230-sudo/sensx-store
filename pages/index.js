import { useState, useEffect } from "react";

export default function Home() { const [cart, setCart] = useState([]);

useEffect(() => { const saved = JSON.parse(localStorage.getItem("cart")) || []; setCart(saved); }, []);

function addToCart() { const newCart = [...cart, "Кофта SensX"]; setCart(newCart); localStorage.setItem("cart", JSON.stringify(newCart)); }

return ( <div style={{ background: "#ffffff", color: "#000", minHeight: "100vh", padding: "20px" }}> {/* Header */} <h1 style={{ textAlign: "center", marginBottom: "30px" }}>SensX</h1>

{/* Product layout */}
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    {/* LEFT - PRODUCT */}
    <div style={{ width: "45%" }}>
      <img
        src="https://via.placeholder.com/300x400"
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <div style={{ marginTop: "10px" }}>
        <h2>Кофта SensX</h2>
        <p style={{ color: "#555" }}>Чёрная кофта SensX с капюшоном</p>
        <p style={{ fontWeight: "bold" }}>1500 грн</p>

        <button
          onClick={addToCart}
          style={{
            marginTop: "10px",
            padding: "10px",
            width: "100%",
            background: "black",
            color: "white",
            borderRadius: "8px",
            border: "none",
          }}
        >
          Добавить в корзину
        </button>
      </div>
    </div>

    {/* CENTER LINE */}
    <div style={{ width: "2px", height: "300px", background: "#ddd" }}></div>

    {/* RIGHT - EMPTY (future products) */}
    <div style={{ width: "45%", display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa" }}>
      Здесь будут другие товары
    </div>
  </div>

  {/* CART BUTTON */}
  <a
    href="/cart"
    style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "60px",
      height: "60px",
      background: "black",
      color: "white",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    🛒
  </a>
</div>

); }
