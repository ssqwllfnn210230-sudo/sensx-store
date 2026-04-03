import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  function removeItem(index) {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

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
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px"
            }}
          >
            {/* ЛЕВО */}
            <div>
              <button
                onClick={() => removeItem(i)}
                style={{
                  marginRight: "10px",
                  background: "red",
                  color: "white",
                  border: "none"
                }}
              >
                Убрать
              </button>

              {item.name} — {item.price} грн × {item.count}
            </div>
          </div>
        ))
      )}

      <h2 style={{ marginTop: "20px" }}>
        Итого: {total} грн
      </h2>
    </div>
  );
}
