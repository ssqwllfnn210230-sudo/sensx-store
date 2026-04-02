import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Корзина</h1>

      {cart.length === 0 ? (
        <p>Корзина пустая</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <h3>{item.name}</h3>
            <p>{item.price} грн</p>
          </div>
        ))
      )}

      <button
        onClick={() => router.push("/")}
        style={{
          marginTop: "20px",
          padding: "10px",
          background: "black",
          color: "white",
          border: "none",
        }}
      >
        Назад
      </button>
    </div>
  );
}
