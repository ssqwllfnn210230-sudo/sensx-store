import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  function addToCart() {
    const existingIndex = cart.findIndex(
      (item) => item.name === "Кофта SensX"
    );

    let newCart = [...cart];

    if (existingIndex !== -1) {
      newCart[existingIndex].count += 1;
    } else {
      newCart.push({
        name: "Кофта SensX",
        price: 1500,
        count: 1
      });
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      {/* КНОПКА В КОРЗИНУ */}
      <div style={{ marginBottom: "20px" }}>
        <a href="/cart">
          <button>
            🛒 Корзина ({cart.reduce((sum, item) => sum + item.count, 0)})
          </button>
        </a>
      </div>

      {/* ТОВАР */}
      <div
        style={{
          maxWidth: "400px",
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "10px"
        }}
      >
        <img
          src="https://i.imgur.com/3QZQZQy.png"
          style={{
            width: "100%",
            borderRadius: "10px"
          }}
        />

        <h2>Кофта SensX</h2>
        <p style={{ color: "#555" }}>Чёрная стильная кофта</p>
        <p style={{ fontWeight: "bold" }}>1500 ₽</p>

        <button onClick={addToCart}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
          }
