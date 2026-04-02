export default function Home() {
  return (
    <div style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>SensX</h1>

      <div style={{ border: "1px solid #222", padding: "15px", borderRadius: "10px" }}>
        <img
          src="https://via.placeholder.com/300x400"
          style={{ width: "100%", borderRadius: "10px" }}
        />

        <div style={{ marginTop: "10px" }}>
          <h2>Кофта SensX</h2>
          <p>1500 грн</p>
          <p style={{ color: "#aaa" }}>
            Чёрная кофта SensX с капюшоном
          </p>

          <button style={{
            marginTop: "10px",
            padding: "10px",
            width: "100%",
            background: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "8px"
          }}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
}
