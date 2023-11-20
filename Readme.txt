

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}


.barra {
  display: flex;
  justify-content: space-between;
  background-color: #18a2b8;
  width: 100%;
}

.Navbar a {
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
}
.active {
  font-weight: 600;
  font-size: 2rem;
  text-decoration: none;
}




.container {
  
    align-items: center;
    background-color: #faf0d7;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
 
    margin: 0 auto;
    width: 100%;

}

.fichadetalle {
  background-color: #ca0d0d;
  border-radius: 0.5rem;
  box-shadow: 0 0 1em #00000033;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1em;
  padding: 1em;
  width: 100%;
}

.fichadetalle  .row {
  display: flex;
  margin: 1em;
  padding: 1em;
  width: 100%;
}

.container .row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  margin: 1em;
  padding: 1em;
  width: 20em;
}

.container .card {
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 1em #00000033;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1em;
  padding: 1em;
  width: 20em;
}

.card-body p:first-letter {
  margin-top: 0;
  text-transform: uppercase;

  
}

.ingredientes {
  display: flex;
  ;
}

.fotocarrito {
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 1em #00000033;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1em;
  padding: 1em;
  width: 20em;
}

.barra {
  
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}