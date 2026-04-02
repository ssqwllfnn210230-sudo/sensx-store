import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  function updateCart(newCart) {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  function removeItem(index) {
    const newCart = cart.filter((_, i) => i !== index);
    updateCart(newCart);
  }

  function increase(index) {
    const newCart = [...cart];
    newCart[index].count += 1;
    updateCart(newCart);
  }

  function decrease(index) {
    const newCart = [...cart];
    if (newCart[index].count > 1) {
      newCart[index].count -= 1;
      updateCart(newCart);
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Корзина</h1>

      <a href="/">← Назад</a>

      {cart.length === 0 ? (
        <p>Корзина пустая</p>
      ) : (
        cart.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #ddd",
              padding: "10px 0"
            }}
          >
            {/* ЛЕВАЯ ЧАСТЬ */}
            <div>
              <div>{item.name}</div>
              <div>{item.price} ₽</div>

              {/* СЧЁТЧИК */}
              <div style={{ marginTop: "5px" }}>
                <button onClick={() => decrease(i)}>-</button>
                <span style={{ margin: "0 10px" }}>
                  {item.count}
                </span>
                <button onClick={() => increase(i)}>+</button>
              </div>
            </div>

            {/* ПРАВАЯ КНОПКА */}
            <button
              onClick={() => removeItem(i)}
              style={{ background: "red", color: "white" }}
            >
              Удалить
            </button>
          </div>
        ))
      )}
    </div>
  );
}
