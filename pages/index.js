import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  function addToCart() {
    const newCart = [...cart, "Кофта SensX"];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return (
    <div style={{ background: "#0a0a0a", color: "white", minHeight: "100vh", padding: "20px" }}>
      <h1>SensX</h1>

      <div style={{ border: "1px solid #333", padding: "20px", borderRadius: "10px" }}>
        <h2>Кофта SensX</h2>
        <p>1500 грн</p>
        <p style={{ color: "#aaa" }}>Чёрная кофта SensX с капюшоном</p>

        <button onClick={addToCart} style={{ padding: "10px", width: "100%" }}>
          Добавить в корзину
        </button>
      </div>

      {/* КНОПКА СПРАВА СНИЗУ */}
      <a href="/cart" style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        background: "white",
        color: "black",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        textDecoration: "none"
      }}>
        🛒
      </a>
    </div>
  );
}
