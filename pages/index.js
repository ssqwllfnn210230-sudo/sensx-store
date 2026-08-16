import { useEffect, useState } from "react";

export default function Home() {
  const product = {
    name: "SENSX JEANS",
    price: 2400,
    img: "/file_00000000693481f486ee07c8c9e09712.png",
    description: "Oversize чёрно-серые джинсы премиум-класса",
  };

  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
    setNickname(localStorage.getItem("nickname") || "");
    setAvatar(localStorage.getItem("avatar") || "");
  }, []);

  function addToCart() {
    const old = [...cart];
    const index = old.findIndex((x) => x.name === product.name);

    if (index >= 0) {
      old[index].count += 1;
    } else {
      old.push({ ...product, count: 1 });
    }

    setCart(old);
    localStorage.setItem("cart", JSON.stringify(old));
  }

  function toggleFavorite() {
    let newFavorites;

    if (favorites.some((x) => x.name === product.name)) {
      newFavorites = favorites.filter((x) => x.name !== product.name);
    } else {
      newFavorites = [...favorites, product];
    }

    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  }

  function saveProfile() {
    localStorage.setItem("nickname", nickname);
    setProfileOpen(false);
  }

  function uploadAvatar(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setAvatar(reader.result);
      localStorage.setItem("avatar", reader.result);
    };

    reader.readAsDataURL(file);
  }

  const isFavorite = favorites.some(
    (x) => x.name === product.name
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f7f7",
        color: "#111",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* TOP */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          background: "#fff",
          borderBottom: "1px solid #eee",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          zIndex: 1000,
        }}
      >
        <div
          onClick={() => setMenuOpen(true)}
          style={{
            fontSize: 26,
            cursor: "pointer",
          }}
        >
          ☰
        </div>

        <h2 style={{ marginLeft: 15 }}>
          SensX Shop
        </h2>

        {/* CART */}
        <a
          href="/cart"
          style={{
            marginLeft: "auto",
            textDecoration: "none",
            color: "#111",
            position: "relative",
            fontSize: 25,
          }}
        >
          🛒

          {cart.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: -7,
                right: -9,
                background: "red",
                color: "white",
                width: 18,
                height: 18,
                borderRadius: "50%",
                fontSize: 11,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              {cart.reduce((sum, x) => sum + x.count, 0)}
            </span>
          )}
        </a>
      </div>

      {/* MENU */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,.6)",
          zIndex: 1001,
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
        }}
      />

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 280,
          height: "100%",
          background: "#111",
          color: "#fff",
          padding: 25,
          zIndex: 1002,
          transform: menuOpen
            ? "translateX(0)"
            : "translateX(-100%)",
          transition: ".3s",
        }}
      >
        <h2>SENSX</h2>

        <div
          onClick={() => {
            setProfileOpen(true);
            setMenuOpen(false);
          }}
          style={{
            marginTop: 40,
            cursor: "pointer",
          }}
        >
          👤 Профиль
        </div>

        <a
          href="/favorites"
          style={{
            display: "block",
            color: "#fff",
            textDecoration: "none",
            marginTop: 25,
          }}
        >
          ❤️ Избранное
        </a>

        <a
          href="/cart"
          style={{
            display: "block",
            color: "#fff",
            textDecoration: "none",
            marginTop: 25,
          }}
        >
          🛒 Корзина
        </a>
      </div>

      {/* CONTENT */}
      <main
        style={{
          paddingTop: 95,
          maxWidth: 700,
          margin: "auto",
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 80,
        }}
      >
        <p
          style={{
            fontSize: 12,
            letterSpacing: 3,
            color: "#777",
          }}
        >
          SENSX COLLECTION
        </p>

        <h1>NEW DROP</h1>

        {/* PRODUCT */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e5e5e5",
          }}
        >
          <div
            style={{
              position: "relative",
              background: "#111",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                display: "block",
              }}
            />

            {/* HEART */}
            <button
              onClick={toggleFavorite}
              style={{
                position: "absolute",
                right: 15,
                bottom: 15,
                width: 45,
                height: 45,
                borderRadius: "50%",
                border: "none",
                background: "#fff",
                color: isFavorite ? "red" : "#111",
                fontSize: 25,
                cursor: "pointer",
              }}
            >
              {isFavorite ? "♥" : "♡"}
            </button>
          </div>

          <div style={{ padding: 20 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2>{product.name}</h2>

              <strong>
                {product.price} грн
              </strong>
            </div>

            <p style={{ color: "#777" }}>
              {product.description}
            </p>

            <div
              style={{
                fontSize: 12,
                color: "#666",
                lineHeight: 1.8,
                marginTop: 15,
              }}
            >
              • OVERSIZE FIT
              <br />
              • ЧЁРНО-СЕРЫЙ WASH
              <br />
              • PREMIUM DENIM
              <br />
              • SENSX X EMBROIDERY
            </div>

            <button
              onClick={addToCart}
              style={{
                width: "100%",
                marginTop: 20,
                padding: 15,
                background: "#111",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              В КОРЗИНУ
            </button>
          </div>
        </div>
      </main>

      {/* PROFILE */}
      {profileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.6)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div
            style={{
              background: "#fff",
              width: "100%",
              maxWidth: 400,
              padding: 25,
              borderRadius: 8,
            }}
          >
            <h2>Профиль</h2>

            <div
              style={{
                textAlign: "center",
                margin: "20px 0",
              }}
            >
              {avatar ? (
                <img
                  src={avatar}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    background: "#eee",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 35,
                  }}
                >
                  👤
                </div>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={uploadAvatar}
              style={{ width: "100%" }}
            />

            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Твой ник"
              style={{
                width: "100%",
                boxSizing: "border-box",
                marginTop: 15,
                padding: 13,
                border: "1px solid #ddd",
              }}
            />

            <button
              onClick={saveProfile}
              style={{
                width: "100%",
                marginTop: 15,
                padding: 14,
                background: "#111",
                color: "#fff",
                border: "none",
              }}
            >
              СОХРАНИТЬ
            </button>

            <button
              onClick={() => setProfileOpen(false)}
              style={{
                width: "100%",
                marginTop: 10,
                padding: 14,
                background: "#eee",
                border: "none",
              }}
            >
              ЗАКРЫТЬ
            </button>

            <button
              style={{
                width: "100%",
                marginTop: 15,
                padding: 14,
                background: "#fff",
                border: "1px solid #ddd",
              }}
              onClick={() =>
                alert(
                  "Подключение Google сделаем следующим этапом через Firebase."
                )
              }
            >
              🔵 ВОЙТИ ЧЕРЕЗ GOOGLE
            </button>
          </div>
        </div>
      )}
    </div>
  );
      }
