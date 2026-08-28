<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Документи</title>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: Arial, sans-serif;
    min-height: 100vh;
    background: linear-gradient(
      180deg,
      #75aaa8 0%,
      #7fa9bd 35%,
      #a8a9c5 70%,
      #ddd8dc 100%
    );
    color: #111;
  }

  .app {
    min-height: 100vh;
    padding-bottom: 95px;
  }

  /* Верхняя часть */
  .top-space {
    height: 220px;
  }

  .content {
    width: 86%;
    max-width: 600px;
    margin: 0 auto;
  }

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 55px;
  }

  /* Карта документа */
  .document-card {
    width: 100%;
    min-height: 620px;
    border-radius: 45px;
    padding: 38px;
    background: rgba(255, 255, 255, 0.10);
    backdrop-filter: blur(12px);
    box-shadow:
      inset 0 1px 1px rgba(255,255,255,0.15),
      0 15px 40px rgba(0,0,0,0.04);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .empty-card {
    width: 100%;
    min-height: 500px;
    border-radius: 30px;
    background: rgba(255,255,255,0.28);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .empty-card p {
    color: #69717b;
    font-size: 26px;
    text-align: center;
  }

  /* Навигация снизу */
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 96px;
    background: #050505;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
  }

  .nav-item {
    color: #cfcfd4;
    text-decoration: none;
    font-size: 14px;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .nav-item svg {
    width: 31px;
    height: 31px;
    stroke: #d8d8dd;
    stroke-width: 1.8;
    fill: none;
  }

  .nav-item.active {
    color: white;
  }

  /* Телефонная адаптация */
  @media (max-width: 480px) {
    .top-space {
      height: 190px;
    }

    .content {
      width: 86%;
    }

    h1 {
      font-size: 38px;
      margin-bottom: 50px;
    }

    .document-card {
      min-height: 540px;
      padding: 25px;
      border-radius: 42px;
    }

    .empty-card {
      min-height: 440px;
      border-radius: 28px;
    }

    .empty-card p {
      font-size: 24px;
    }
  }
</style>
</head>

<body>

<div class="app">

  <div class="top-space"></div>

  <main class="content">

    <h1>єДокумент</h1>

    <div class="document-card">
      <div class="empty-card">
        <p>Дані не завантажено</p>
      </div>
    </div>

  </main>

</div>


<!-- Нижнее меню -->
<nav class="bottom-nav">

  <a href="#" class="nav-item">

    <svg viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h11M4 18h16"/>
    </svg>

    <span>Стрічка</span>
  </a>


  <a href="#" class="nav-item active">

    <svg viewBox="0 0 24 24">
      <path d="M6 3h8l4 4v14H6z"/>
      <path d="M14 3v5h5"/>
      <path d="M9 12h6M9 16h6"/>
    </svg>

    <span>Документи</span>
  </a>


  <a href="#" class="nav-item">

    <svg viewBox="0 0 24 24">
      <path d="M13 2L3 14h7l-1 8 10-13h-7z"/>
    </svg>

    <span>Сервіси</span>
  </a>


  <a href="#" class="nav-item">

    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="7" r="4"/>
      <path d="M4 22c1-5 4-7 8-7s7 2 8 7"/>
    </svg>

    <span>Меню</span>
  </a>

</nav>

</body>
</html>
