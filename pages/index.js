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
