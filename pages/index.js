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
    <div style={{
      background: "#fff",
      minHeight: "100vh",
      fontFamily: "Arial",
      padding: "20px"
    }}>

      {/* ЛОГО */}
      <h1 style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        margin: 0,
        fontSize: "20px",
        letterSpacing: "1px"
      }}>
        SensX Shop
      </h1>

      {/* СЕТКА */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "25px",
        marginTop: "80px"
      }}>
        {products.map((p, i) => (
          <div
            key={i}
            style={{
              transition: "0.2s",
              cursor: "pointer"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={p.img}
              style={{
                width: "100%",
                borderRadius: "12px"
              }}
            />

            <h3 style={{ margin: "10px 0 5px" }}>
              {p.name}
            </h3>

            <p style={{
              color: "#777",
              fontSize: "14px",
              margin: 0
            }}>
              Минимал стиль
            </p>

            <p style={{
              fontWeight: "bold",
              marginTop: "5px"
            }}>
              {p.price} грн
            </p>

            <button
              onClick={() => addToCart(p)}
              style={{
                width: "100%",
                padding: "10px",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "8px",
                marginTop: "10px",
                cursor: "pointer"
              }}
            >
              Добавить
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
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
        }}>
          🛒 {cart.reduce((sum, item) => sum + item.count, 0)}
        </div>
      </a>

    </div>
  );
}
