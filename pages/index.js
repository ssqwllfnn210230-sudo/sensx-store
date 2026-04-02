import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  function addToCart() {
    const newCart = [...cart, { name: "Кофта SensX", price: 1500 }];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return (
    <div style={{ background: "#fff", minHeight: "100vh", padding: "20px" }}>

      {/* Название магазина */}
      <h1 style={{ textAlign: "center", color: "#000" }}>
        SensX Store
      </h1>

      {/* Товар */}
      <div style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "20px"
}}>

        {/* Левая часть (картинка) */}
        <div style={{ width: "45%" , minWidth: "45%" }}>
      
            src="/logo.png"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* Полоска разделитель */}
        <div style={{
          width: "2px",
          height: "150px",
          background: "#ddd",
          margin: "0 15px"
        }} />

        {/* Правая часть (инфо) */}
        <div style={{ width: "45%", minWidth: "45%", color: "#000" }}>
          <h2>Кофта SensX</h2>
          <p style={{ color: "#555" }}>
            Чёрная кофта с логотипом SensX
          </p>
          <p style={{ fontWeight: "bold" }}>
            1500 грн
          </p>

          <button
            onClick={addToCart}
            style={{
              marginTop: "10px",
              padding: "10px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "5px"
            }}
          >
            В корзину
          </button>
        </div>
      </div>

      {/* Кнопка корзины */}
      <button
        onClick={() => window.location.href = "/cart"}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "black",
          color: "white",
          fontSize: "20px",
          border: "none"
        }}
      >
        🛒
      </button>

    </div>
  );
}
