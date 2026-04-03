import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Корзина</h1>

      <a href="/">← Назад</a>

      {cart.length === 0 ? (
        <p>Пусто</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} style={{ marginTop: "10px" }}>
            {item.name} — {item.price} грн × {item.count}
          </div>
        ))
      )}

      <h2 style={{ marginTop: "20px" }}>
        Итого: {total} грн
      </h2>
    </div>
  );
}
