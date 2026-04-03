import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);

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

      <h1 style={{ textAlign: "center" }}>SENSX</h1>

      {/* СЕТКА */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        marginTop: "30px"
      }}>
        {products.map((p, i) => (
          <div key={i} style={{
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "10px"
          }}>
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
