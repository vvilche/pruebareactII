# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




a {
  text-decoration: none;
  color: black;
}

.logo {
  display: flex;
  align-items: center;
}

.logo span {
  font-size: 1rem;
}

.cart {
  border-radius: 100%;
  padding: 0.6rem;
  background-color: #ec0000;
  color: #fff;
}

.cart-price {
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: #ec0000;
  color: #fff;
}

.cart:hover,
.cart-price:hover {
  background-color: #05a84b !important;
}

.home {
  background-image: url('./assets/imgs/Home.png');
  background-repeat: no-repeat;
  background-position: right;
  background-size: 25rem;
  height: 16rem;
  display: flex;
  align-items: center;
}

.home-body {
  display: flex;
  flex-direction: column;
  width: 21rem;
  padding: 1.2rem;
  border-radius: 0.3rem;
  background-color: rgba(255, 255, 255, 0.5);
}

.home-body h1 {
  font-size: 1.5rem;
}

.home-body p {
  margin: 0;
  font-size: 0.7rem;
}

ul {
  margin: 0;
}

li {
  font-size: 0.8rem;
}

button {
  background-color: #ec0000 !important;
  font-size: 0.9rem !important;
  border: none !important;
}

button:hover {
  background-color: #05a84b !important;
}

table {
  font-size: 0.8rem;
}

table img {
  width: 3rem;
  border-radius: 0.3rem;
}

table td {
  vertical-align: middle;
}

table button {
  background-color: #05a84b !important;
  padding: 0.3rem 0.5rem !important;
}

table button:hover {
  background-color: #ec0000 !important;
}

@media screen and (min-width: 768px) {
  .logo span {
    font-size: 1.7rem;
  }

  .home {
    background-size: 50rem;
    background-position-y: 100%;
  }

  .home-body {
    width: 36rem;
  }

  .home-body p {
    font-size: 1rem;
  }

  .home-body h1 {
    font-size: 3rem;
  }

  .carrito {
    max-width: 70%;
  }

  table {
    font-size: 1rem;
  }

  table img {
    width: 5rem;
    border-radius: 0.5rem;
  }
}

