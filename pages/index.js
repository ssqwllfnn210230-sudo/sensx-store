import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

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
      img: "https://i.imgur.com/3QZQZQy.png",
      description: "Чёрная кофта SensX с капюшоном",
    },
    {
      name: "Футболка SensX",
      price: 900,
      img: "https://i.imgur.com/3QZQZQy.png",
      description: "Фирменная футболка SensX",
    },
    {
      name: "SENSX JEANS",
      price: 2400,
      img: "/file_00000000693481f486ee07c8c9e09712.png",
      description: "Oversize чёрно-серые джинсы премиум-класса",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f7f7f7",
        minHeight: "100vh",
        color: "#111",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          background: "white",
          zIndex: 1000,
          borderBottom: "1px solid #eee",
        }}
      >
        {/* MENU BUTTON */}
        <div
          onClick={() => setMenuOpen(true)}
          style={{
            fontSize: "26px",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          ☰
        </div>

        <h2
          style={{
            marginLeft: "15px",
            letterSpacing: "1px",
          }}
        >
          SensX Shop
        </h2>
      </div>

      {/* DARK OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          transition: "0.3s",
          zIndex: 1001,
        }}
      />

      {/* SIDE MENU */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "280px",
          height: "100%",
          background: "#111",
          color: "white",
          padding: "20px",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "0.35s ease",
          zIndex: 1002,
          boxShadow: menuOpen
            ? "10px 0 30px rgba(0,0,0,0.4)"
            : "none",
        }}
      >
        <h2
          style={{
            letterSpacing: "2px",
            marginBottom: "40px",
          }}
        >
          SENSX
        </h2>

        <p style={{ marginTop: "30px", cursor: "pointer" }}>
          👤 Профиль
        </p>

        <p style={{ cursor: "pointer" }}>
          📦 Заказы
        </p>

        <p style={{ cursor: "pointer" }}>
          ⚙️ Настройки
        </p>

        <p style={{ cursor: "pointer" }}>
          ❤️ Избранное
        </p>
      </div>

      {/* CONTENT */}
      <div
        style={{
          paddingTop: "90px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "100px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* TITLE */}
        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "3px",
              color: "#777",
              marginBottom: "8px",
            }}
          >
            SENSX COLLECTION
          </p>

          <h1
            style={{
              fontSize: "32px",
              margin: 0,
              letterSpacing: "1px",
            }}
          >
            NEW DROP
          </h1>
        </div>

        {/* PRODUCTS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {products.map((p, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid #e5e5e5",
              }}
            >
              {/* PRODUCT IMAGE */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  background: "#111",
                  overflow: "hidden",
                }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* PRODUCT INFO */}
              <div
                style={{
                  padding: "18px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "18px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {p.name}
                  </h3>

                  <strong
                    style={{
                      fontSize: "16px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.price} грн
                  </strong>
                </div>

                <p
                  style={{
                    color: "#777",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    marginTop: "10px",
                  }}
                >
                  {p.description}
                </p>

                {/* JEANS DETAILS */}
                {p.name === "SENSX JEANS" && (
                  <div
                    style={{
                      marginTop: "15px",
                      paddingTop: "15px",
                      borderTop: "1px solid #eee",
                      fontSize: "12px",
                      color: "#666",
                      lineHeight: "1.8",
                    }}
                  >
                    <div>• OVERSIZE FIT</div>
                    <div>• ЧЁРНО-СЕРЫЙ WASH</div>
                    <div>• PREMIUM DENIM</div>
                    <div>• SENSX X EMBROIDERY</div>
                  </div>
                )}

                {/* BUTTON */}
                <button
                  onClick={() => addToCart(p)}
                  style={{
                    width: "100%",
                    marginTop: "18px",
                    padding: "14px",
                    background: "#111",
                    color: "white",
                    border: "none",
                    borderRadius: "2px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  В КОРЗИНУ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CART BUTTON */}
      <a
        href="/cart"
        style={{
          textDecoration: "none",
        }}
      >
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "#111",
            color: "white",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            fontSize: "20px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.25)",
          }}
        >
          🛒
        </div>
      </a>
    </div>
  );
        }
