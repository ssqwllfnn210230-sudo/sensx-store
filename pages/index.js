import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const addToCart = () => {
    localStorage.setItem(
      "cart",
      JSON.stringify([
        {
          name: "Кофта SensX",
          price: 1500,
        },
      ])
    );
    alert("Добавлено в корзину");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      {/* Название */}
      <h1 style={{ textAlign: "center" }}>SensX</h1>

      {/* Товар */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        {/* КАРТИНКА */}
        <div style={{ width: "45%", minWidth: "45%" }}>
          <img
            src="/hoodie.jpg"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* ОПИСАНИЕ */}
        <div style={{ width: "45%", minWidth: "45%" }}>
          <h2>Кофта SensX</h2>
          <p>Чёрная кофта SensX с капюшоном</p>
          <p style={{ fontWeight: "bold" }}>1500 грн</p>

          <button
            onClick={addToCart}
            style={{
              marginTop: "10px",
              padding: "10px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            В корзину
          </button>
        </div>
      </div>

      {/* КНОПКА КОРЗИНЫ */}
      <button
        onClick={() => router.push("/cart")}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "black",
          color: "white",
          border: "none",
          fontSize: "20px",
        }}
      >
        🛒
      </button>
    </div>
  );
}
