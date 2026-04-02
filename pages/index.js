import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);

  function addToCart() {
    setCart([...cart, "Кофта SensX"]);
  }

  return (
    <div style={{ background: "#0a0a0a", color: "white", minHeight: "100vh", padding: "20px" }}>
      <h1>SensX</h1>

      <div style={{ border: "1px solid #333", padding: "20px", borderRadius: "10px" }}>
        <h2>Кофта SensX</h2>
        <p>1500 грн</p>
        <p style={{ color: "#aaa" }}>Чёрная кофта SensX с капюшоном</p>

        <button onClick={addToCart} style={{ padding: "10px", width: "100%", marginTop: "10px" }}>
          Добавить в корзину
        </button>
      </div>

      <h2 style={{ marginTop: "30px" }}>Корзина:</h2>

      {cart.length === 0 ? (
        <p>Пусто</p>
      ) : (
        cart.map((item, index) => <p key={index}>{item}</p>)
      )}
    </div>
  );
      }
