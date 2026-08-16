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
    const exists = favorites.some((x) => x.name === product.name);

    const updated = exists
      ? favorites.filter((x) => x.name !== product.name)
      : [...favorites, product];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
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

  const cartCount = cart.reduce(
    (sum, item) => sum + item.count,
    0
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 72,
          display: "flex",
          alignItems: "center",
          padding: "0 22px",
          background: "rgba(10,10,10,.88)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid #202020",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => setMenuOpen(true)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 26,
            cursor: "pointer",
            padding: 0,
          }}
        >
          ☰
        </button>

        <div
          style={{
            marginLeft: 18,
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 4,
          }}
        >
          SENSX
        </div>

        <a
          href="/cart"
          style={{
            marginLeft: "auto",
            position: "relative",
            color: "#fff",
            textDecoration: "none",
            fontSize: 24,
          }}
        >
          🛒

          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: -7,
                right: -9,
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#ff1744",
                color: "#fff",
                fontSize: 10,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cartCount}
            </span>
          )}
        </a>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,.72)",
          backdropFilter: "blur(5px)",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          transition: ".35s",
          zIndex: 1001,
        }}
      />

      {/* MENU */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 290,
          maxWidth: "82%",
          height: "100%",
          background: "#101010",
          borderRight: "1px solid #292929",
          padding: "28px 24px",
          boxSizing: "border-box",
          transform: menuOpen
            ? "translateX(0)"
            : "translateX(-105%)",
          transition: ".4s cubic-bezier(.2,.8,.2,1)",
          zIndex: 1002,
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 4,
            marginBottom: 55,
          }}
        >
          SENSX
        </div>

        <div
          onClick={() => {
            setProfileOpen(true);
            setMenuOpen(false);
          }}
          style={menuItem}
        >
          <span>👤</span>
          <span>Профиль</span>
        </div>

        <a href="/favorites" style={menuLink}>
          <span>♡</span>
          <span>Избранное</span>
        </a>

        <a href="/cart" style={menuLink}>
          <span>🛒</span>
          <span>Корзина</span>
        </a>
      </aside>

      {/* HERO */}
      <main
        style={{
          paddingTop: 72,
          maxWidth: 1100,
          margin: "auto",
          paddingBottom: 100,
        }}
      >
        <section
          style={{
            padding: "55px 22px 30px",
          }}
        >
          <div
            style={{
              color: "#777",
              fontSize: 11,
              letterSpacing: 4,
              marginBottom: 13,
            }}
          >
            SENSX
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(42px, 11vw, 90px)",
              lineHeight: .9,
              letterSpacing: -3,
              fontWeight: 900,
            }}
          >
            JEANS
          </h1>
        </section>

        {/* PRODUCT */}
        <section
          style={{
            margin: "0 22px",
            background: "#111",
            border: "1px solid #242424",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 25px 80px rgba(0,0,0,.45)",
          }}
        >
          <div
            style={{
              position: "relative",
              background: "#050505",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                maxHeight: 720,
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* FAVORITE */}
            <button
              onClick={toggleFavorite}
              aria-label="Избранное"
              style={{
                position: "absolute",
                right: 18,
                bottom: 18,
                width: 52,
                height: 52,
                borderRadius: "50%",
                border: "1px solid #333",
                background: "rgba(255,255,255,.94)",
                color: isFavorite ? "#ff1744" : "#111",
                fontSize: 28,
                lineHeight: 1,
                cursor: "pointer",
                boxShadow: "0 8px 25px rgba(0,0,0,.35)",
              }}
            >
              {isFavorite ? "♥" : "♡"}
            </button>
          </div>

          <div
            style={{
              padding: "26px 22px 24px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 20,
              }}
            >
              <div>
                <div
                  style={{
                    color: "#777",
                    fontSize: 10,
                    letterSpacing: 3,
                    marginBottom: 8,
                  }}
                >
                  SENSX
                </div>

                <h2
                  style={{
                    margin: 0,
                    fontSize: 24,
                    letterSpacing: 1,
                  }}
                >
                  {product.name}
                </h2>
              </div>

              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  whiteSpace: "nowrap",
                }}
              >
                {product.price} грн
              </div>
            </div>

            <p
              style={{
                color: "#999",
                lineHeight: 1.6,
                marginTop: 18,
              }}
            >
              {product.description}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1,
                background: "#292929",
                marginTop: 22,
                border: "1px solid #292929",
              }}
            >
              {[
                "OVERSIZE FIT",
                "ЧЁРНО-СЕРЫЙ WASH",
                "PREMIUM DENIM",
                "SENSX EMBROIDERY",
              ].map((x) => (
                <div
                  key={x}
                  style={{
                    background: "#111",
                    padding: 14,
                    color: "#888",
                    fontSize: 10,
                    letterSpacing: 1,
                  }}
                >
                  {x}
                </div>
              ))}
            </div>

            <button
              onClick={addToCart}
              style={{
                width: "100%",
                marginTop: 22,
                padding: 17,
                background: "#fff",
                color: "#080808",
                border: "none",
                borderRadius: 5,
                fontSize: 13,
                fontWeight: 900,
                letterSpacing: 2,
                cursor: "pointer",
              }}
            >
              ДОБАВИТЬ В КОРЗИНУ
            </button>
          </div>
        </section>
      </main>

      {/* PROFILE */}
      {profileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.8)",
            backdropFilter: "blur(10px)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 390,
              background: "#151515",
              border: "1px solid #292929",
              borderRadius: 12,
              padding: 25,
              boxSizing: "border-box",
            }}
          >
            <h2 style={{ marginTop: 0 }}>
              Профиль
            </h2>

            <div
              style={{
                textAlign: "center",
                margin: "25px 0",
              }}
            >
              {avatar ? (
                <img
                  src={avatar}
                  alt="avatar"
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
                    margin: "auto",
                    borderRadius: "50%",
                    background: "#252525",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 32,
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
              style={{
                width: "100%",
                color: "#aaa",
              }}
            />

            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Твой ник"
              style={{
                width: "100%",
                boxSizing: "border-box",
                marginTop: 15,
                padding: 14,
                background: "#0d0d0d",
                color: "#fff",
                border: "1px solid #292929",
                borderRadius: 5,
              }}
            />

            <button
              onClick={saveProfile}
              style={{
                width: "100%",
                marginTop: 15,
                padding: 15,
                background: "#fff",
                color: "#111",
                border: "none",
                borderRadius: 5,
                fontWeight: 800,
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
                background: "#222",
                color: "#fff",
                border: "1px solid #333",
                borderRadius: 5,
              }}
            >
              ЗАКРЫТЬ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const menuItem = {
  display: "flex",
  gap: 15,
  alignItems: "center",
  padding: "15px 0",
  cursor: "pointer",
  borderBottom: "1px solid #222",
};

const menuLink = {
  display: "flex",
  gap: 15,
  alignItems: "center",
  padding: "17px 0",
  color: "#fff",
  textDecoration: "none",
  borderBottom: "1px solid #222",
};
