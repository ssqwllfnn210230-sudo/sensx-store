import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  return (
    <div style={{ background: "#0a0a0a", color: "white", minHeight: "100vh", padding: "20px" }}>
      <h1>Корзина</h1>

      {cart.length === 0 ? (
        <p>Пусто</p>
      ) : (
        cart.map((item, index) => <p key={index}>{item}</p>)
      )}

      <a href="/" style={{ display: "block", marginTop: "20px" }}>
        ← Назад
      </a>
    </div>
  );
}
