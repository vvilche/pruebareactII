
import './App.css'
import Navbar from '../src/components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Detalle from './views/Detalle'
import Home from './views/Home'
import Carrito from './views/Carrito'
import ContextPizza from './contexts/ContexPizza'
import { useState, useEffect } from "react";



function App() {

// Vamos traer los datos de las Pizzas 

const [pizzas, setPizzas] = useState([])
const [carrito, setCarrito] = useState([])

const getPizzas = async () => {
  const response = await fetch("/pizzas.json");
  const data = await response.json();
  setPizzas(data);
};

useEffect(() => {
  getPizzas();
}, []);

// Generamos las funciones para agregar y eliminar del carrito
// le pasamos el arreglo carrito y agregamos las pizzas que se van a agregar al carrito

//setCarrito = carrito [{pizzas}]

const monedaPizza = (valor) =>
valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

const agregarCarrito = (pizza) => {
  const encuentraPizza = carrito.findIndex((carritoPizza)=> carritoPizza.id === pizza.id);
if (encuentraPizza  < 0) {
  pizza.count =1;
  setCarrito([...carrito,pizza]);
} else {
  carrito[encuentraPizza].count++;
  setCarrito([...carrito ])
}
};


const incrementaCount=(index)=>{
  carrito[index].count++;
  setCarrito([...carrito]);
};

const decrementaCount = (index)=> {
  if(carrito[index].count === 1) {
    carrito.splice(index,1);
  } else {
    carrito[index].count--;
  }
  setCarrito([... carrito]);
}

const totalCarrito = carrito.reduce (
  (acumulador,{price,count})=> acumulador + price*count,
  0
)


const globalState = {
  pizzas,
  carrito,
  setCarrito,
  monedaPizza,
  agregarCarrito,
  incrementaCount,
  decrementaCount,
  totalCarrito
}

  return (
    <>
      <ContextPizza.Provider value={globalState}>
      <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/detalle/:id" element={<Detalle />} />
       <Route path="/carrito" element={<Carrito />} />
     </Routes>
      </ContextPizza.Provider> 
    </>
  )
  }

export default App
