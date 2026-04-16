import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  function addToCart(product) {
    const existingIndex = cart.findIndex(
      (item) => item.name === product.name
    );

    let newCart = [...cart];

    if (existingIndex !== -1) {
      newCart[existingIndex].count += 1;
    } else {
      newCart.push({ ...product, count: 1 });
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  const products = [
    {
      name: "Кофта SensX",
      price: 1500,
      img: "https://i.imgur.com/3QZQZQy.png"
    },
    {
      name: "Футболка SensX",
      price: 900,
      img: "https://i.imgur.com/3QZQZQy.png"
    }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      {/* ☰ */}
      <div
        onClick={() => setMenuOpen(true)}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontSize: "24px",
          cursor: "pointer"
        }}
      >
        ☰
      </div>

      {/* ЛОГО */}
      <h1 style={{
        position: "absolute",
        top: "20px",
        left: "60px",
        margin: 0
      }}>
        SensX Shop
      </h1>

      {/* 🔥 ТЁМНЫЙ ФОН */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.4)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "0.3s"
        }}
      />

      {/* 🔥 ВЫЕЗЖАЮЩЕЕ МЕНЮ */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "260px",
        height: "100%",
        background: "black",
        color: "white",
        padding: "20px",
        transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "0.3s ease"
      }}>
        <h2>SensX</h2>

        <p style={{ marginTop: "20px" }}>👤 Профиль</p>
        <p>📦 Заказы</p>
        <p>⚙️ Настройки</p>
      </div>

      {/* ОТСТУП */}
      <div style={{ marginTop: "80px" }} />

      {/* ТОВАРЫ */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px"
      }}>
        {products.map((p, i) => (
          <div key={i}>
            <img src={p.img} style={{ width: "100%" }} />
            <h3>{p.name}</h3>
            <p>{p.price} грн</p>
            <button onClick={() => addToCart(p)}>
              В корзину
            </button>
          </div>
        ))}
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
          justifyContent: "center"
        }}>
          🛒
        </div>
      </a>

    </div>
  );
}
