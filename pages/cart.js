import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  function removeItem(name) {
    const newCart = cart.filter((item) => item.name !== name);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f7f7",
        color: "#111",
        fontFamily: "Arial, sans-serif",
        paddingBottom: 50,
      }}
    >
      {/* HEADER */}
      <div
        style={{
          height: 60,
          background: "#fff",
          borderBottom: "1px solid #eee",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#111",
            fontSize: 24,
          }}
        >
          ←
        </a>

        <h2 style={{ marginLeft: 20 }}>
          Корзина
        </h2>
      </div>

      {/* CONTENT */}
      <main
        style={{
          maxWidth: 700,
          margin: "auto",
          padding: 20,
        }}
      >
        {cart.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              paddingTop: 100,
            }}
          >
            <h2>Корзина пуста</h2>

            <a
              href="/"
              style={{
                display: "inline-block",
                marginTop: 20,
                padding: "14px 25px",
                background: "#111",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              В МАГАЗИН
            </a>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.name}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e5e5",
                  marginBottom: 15,
                  padding: 15,
                  display: "flex",
                  gap: 15,
                  alignItems: "center",
                }}
              >
                {/* PHOTO */}
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: 110,
                    height: 110,
                    objectFit: "cover",
                    background: "#111",
                  }}
                />

                {/* INFO */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 8px" }}>
                    {item.name}
                  </h3>

                  <div style={{ color: "#777" }}>
                    {item.price} грн
                  </div>

                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 13,
                    }}
                  >
                    Количество: {item.count}
                  </div>
                </div>

                {/* DELETE */}
                <button
                  onClick={() => removeItem(item.name)}
                  style={{
                    background: "#111",
                    color: "#fff",
                    border: "none",
                    padding: "10px 12px",
                    cursor: "pointer",
                    fontSize: 12,
                  }}
                >
                  УДАЛИТЬ
                </button>
              </div>
            ))}

            {/* TOTAL */}
            <div
              style={{
                background: "#fff",
                padding: 20,
                marginTop: 25,
                border: "1px solid #e5e5e5",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                <span>ИТОГО</span>
                <span>{total} грн</span>
              </div>

              <button
                style={{
                  width: "100%",
                  marginTop: 20,
                  padding: 16,
                  background: "#111",
                  color: "#fff",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                ОФОРМИТЬ ЗАКАЗ
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
                    }
