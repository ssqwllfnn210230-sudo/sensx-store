import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  const total = cart.reduce((sum, i) => sum + i.price * i.count, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Корзина</h1>

      {cart.map((item, i) => (
        <div key={i}>
          {item.name} × {item.count} = {item.price * item.count} грн
        </div>
      ))}

      <h2>Итого: {total} грн</h2>

      <a href="/checkout">
        <button>Оплатить</button>
      </a>
    </div>
  );
}
