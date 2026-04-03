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
    <div style={{
      background: "#fff",
      minHeight: "100vh",
      fontFamily: "Arial",
      padding: "20px"
    }}>

      {/* ЛОГО */}
      <h1 style={{
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: "2px"
      }}>
        SENSX
      </h1>

      {/* ТОВАР */}
      <div style={{
        maxWidth: "350px",
        margin: "40px auto",
        textAlign: "left"
      }}>
        <img
          src="https://i.imgur.com/3QZQZQy.png"
          style={{
            width: "100%",
            borderRadius: "12px"
          }}
        />

        <h2 style={{ marginTop: "15px" }}>
          Кофта SensX
        </h2>

        <p style={{ color: "#666" }}>
          Чёрная кофта с капюшоном
        </p>

        <p style={{
          fontWeight: "bold",
          fontSize: "18px"
        }}>
          1500 грн
        </p>

        <button
          onClick={addToCart}
          style={{
            width: "100%",
            padding: "12px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "8px",
            marginTop: "10px"
          }}
        >
          Добавить в корзину
        </button>
      </div>

      {/* КОРЗИНА */}
      <a href="/cart">
        <div style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "black",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px"
        }}>
          🛒 {cart.reduce((sum, item) => sum + item.count, 0)}
        </div>
      </a>

    </div>
  );
}
