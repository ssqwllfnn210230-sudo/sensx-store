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
      img: "https://i.imgur.com/3QZQZQy.png",
    },
    {
      name: "Футболка SensX",
      price: 900,
      img: "https://i.imgur.com/3QZQZQy.png",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial" }}>

      {/* TOP BAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          background: "white",
          zIndex: 1000,
          borderBottom: "1px solid #eee",
        }}
      >
        {/* MENU BUTTON */}
        <div
          onClick={() => setMenuOpen(true)}
          style={{
            fontSize: "26px",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          ☰
        </div>

        <h2 style={{ marginLeft: "15px" }}>SensX Shop</h2>
      </div>

      {/* DARK OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.5)",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          transition: "0.3s",
          zIndex: 1001,
        }}
      />

      {/* SIDE MENU */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "280px",
          height: "100%",
          background: "#111",
          color: "white",
          padding: "20px",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "0.35s ease",
          zIndex: 1002,
          boxShadow: menuOpen ? "10px 0 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <h2>SensX</h2>

        <p style={{ marginTop: "30px", cursor: "pointer" }}>👤 Профиль</p>
        <p style={{ cursor: "pointer" }}>📦 Заказы</p>
        <p style={{ cursor: "pointer" }}>⚙️ Настройки</p>
        <p style={{ cursor: "pointer" }}>❤️ Избранное</p>
      </div>

      {/* CONTENT */}
      <div style={{ paddingTop: "80px", padding: "80px 20px 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {products.map((p, i) => (
            <div key={i} style={{ border: "1px solid #eee", padding: "10px" }}>
              <img src={p.img} style={{ width: "100%" }} />
              <h3>{p.name}</h3>
              <p>{p.price} грн</p>
              <button onClick={() => addToCart(p)}>В корзину</button>
            </div>
          ))}
        </div>
      </div>

      {/* CART BUTTON */}
      <a href="/cart">
        <div
          style={{
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
            zIndex: 1000,
            fontSize: "20px",
          }}
        >
          🛒
        </div>
      </a>
    </div>
  );
}
