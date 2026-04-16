import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  function addToCart(product) {
    const updated = [...cart];
    const index = updated.findIndex(i => i.name === product.name);

    if (index !== -1) updated[index].count += 1;
    else updated.push({ ...product, count: 1 });

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  const products = [
    { name: "Кофта SensX", price: 1500, img: "https://i.imgur.com/3QZQZQy.png" },
    { name: "Футболка SensX", price: 900, img: "https://i.imgur.com/3QZQZQy.png" },
  ];

  return (
    <div style={{ fontFamily: "Arial" }}>

      {/* TOP BAR */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)",
        zIndex: 1000
      }}>
        <div onClick={() => setMenuOpen(true)} style={{ fontSize: 26, cursor: "pointer" }}>
          ☰
        </div>

        <h3 style={{ marginLeft: 15 }}>SensX Shop</h3>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          transition: "0.3s",
          zIndex: 1001
        }}
      />

      {/* MENU */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 280,
        height: "100%",
        background: "#111",
        color: "#fff",
        padding: 20,
        transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "0.35s",
        zIndex: 1002
      }}>
        <h2>SensX</h2>
        <p>👤 Профиль</p>
        <p>📦 Заказы</p>
        <p>⚙️ Настройки</p>
      </div>

      {/* PRODUCTS */}
      <div style={{
        paddingTop: 90,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
        padding: 20
      }}>
        {products.map((p, i) => (
          <div key={i} style={{
            borderRadius: 15,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            transform: "scale(1)",
            transition: "0.2s"
          }}>
            <img src={p.img} style={{ width: "100%" }} />
            <div style={{ padding: 10 }}>
              <h3>{p.name}</h3>
              <p>{p.price} грн</p>
              <button onClick={() => addToCart(p)}>
                Добавить
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CART */}
      <a href="/cart">
        <div style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "black",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20
        }}>
          🛒
        </div>
      </a>
    </div>
  );
}
