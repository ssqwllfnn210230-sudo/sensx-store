import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    delivery: "Новая почта",
    comment: "",
  });

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  function removeItem(name) {
    const newCart = cart.filter((item) => item.name !== name);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  function sendOrder() {
    if (!form.name || !form.phone || !form.city) {
      alert("Заполни имя, телефон и город");
      return;
    }

    let text = `🔥 НОВЫЙ ЗАКАЗ SENSX%0A%0A`;

    cart.forEach((item) => {
      text += `👖 ${item.name}%0A`;
      text += `💰 ${item.price} грн × ${item.count}%0A%0A`;
    });

    text += `💵 ИТОГО: ${total} грн%0A%0A`;
    text += `👤 Имя: ${form.name}%0A`;
    text += `📞 Телефон: ${form.phone}%0A`;
    text += `📍 Город: ${form.city}%0A`;
    text += `🚚 Доставка: ${form.delivery}%0A`;

    if (form.comment) {
      text += `💬 Комментарий: ${form.comment}%0A`;
    }

    window.location.href =
      `https://t.me/sensx_shop?text=${text}`;
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
      }}
    >
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
            color: "#111",
            textDecoration: "none",
            fontSize: 25,
          }}
        >
          ←
        </a>

        <h2 style={{ marginLeft: 20 }}>
          Корзина
        </h2>
      </div>

      <main
        style={{
          maxWidth: 700,
          margin: "auto",
          padding: 20,
          paddingBottom: 80,
        }}
      >
        {cart.length === 0 ? (
          <div style={{ textAlign: "center", paddingTop: 80 }}>
            <h2>Корзина пуста</h2>

            <a
              href="/"
              style={{
                display: "inline-block",
                marginTop: 20,
                padding: 15,
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
                  padding: 15,
                  marginBottom: 15,
                  border: "1px solid #e5e5e5",
                  display: "flex",
                  gap: 15,
                  alignItems: "center",
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 8px" }}>
                    {item.name}
                  </h3>

                  <div>{item.price} грн</div>

                  <div style={{ color: "#777", marginTop: 6 }}>
                    Количество: {item.count}
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.name)}
                  style={{
                    background: "#111",
                    color: "#fff",
                    border: "none",
                    padding: 10,
                    cursor: "pointer",
                  }}
                >
                  УДАЛИТЬ
                </button>
              </div>
            ))}

            <div
              style={{
                background: "#fff",
                padding: 20,
                border: "1px solid #e5e5e5",
                marginTop: 25,
              }}
            >
              <h2>Оформление заказа</h2>

              <input
                placeholder="Ваше имя"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                style={inputStyle}
              />

              <input
                placeholder="Телефон или Telegram"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                style={inputStyle}
              />

              <input
                placeholder="Город"
                value={form.city}
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value })
                }
                style={inputStyle}
              />

              <select
                value={form.delivery}
                onChange={(e) =>
                  setForm({ ...form, delivery: e.target.value })
                }
                style={inputStyle}
              >
                <option>Новая почта</option>
                <option>Укрпочта</option>
                <option>Самовывоз</option>
              </select>

              <textarea
                placeholder="Комментарий к заказу"
                value={form.comment}
                onChange={(e) =>
                  setForm({ ...form, comment: e.target.value })
                }
                style={{
                  ...inputStyle,
                  minHeight: 90,
                  resize: "vertical",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginTop: 20,
                }}
              >
                <span>ИТОГО</span>
                <span>{total} грн</span>
              </div>

              <button
                onClick={sendOrder}
                style={{
                  width: "100%",
                  marginTop: 20,
                  padding: 16,
                  background: "#111",
                  color: "#fff",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                📩 ОТПРАВИТЬ ЗАКАЗ
              </button>

              <p
                style={{
                  textAlign: "center",
                  color: "#777",
                  fontSize: 12,
                  marginTop: 12,
                }}
              >
                Заказ отправится в Telegram магазина @sensx_shop
              </p>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: 14,
  marginTop: 12,
  border: "1px solid #ddd",
  fontSize: 14,
  outline: "none",
};
