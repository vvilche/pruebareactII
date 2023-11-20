import React, { createContext, useContext, useState , useEffect} from "react";

// Primero creamos el contexto

const ContextPizzas = createContext();

// Creamos el hook para usar el contexto


const PizzaProvaider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);



    const getPizzas = async () => {
        const response = await fetch("/pizzas.json");
        const data = await response.json();
        setPizzas(data);
      };
    
      useEffect(() => {
        getPizzas();
      }, []);

      return (
        <ContextPizzas.Provider value={{ pizzas }}>
          {children}
        </ContextPizzas.Provider>
      );
};

// Creamos el hook para usar el contexto
const usePizzas = () => {
    return useContext(ContextPizzas);
    
}

const Pizza = () => {
        const { pizzas } = usePizzas();
    
        return (
            <ul>
                {pizzas.map((pizza, index) => (
                    <li key={index}>
                        

                        {pizza.name}: {pizza.price}: {pizza.ingredients}: {pizza.image}
                    </li>
                ))}
            </ul>
        );
    };

// vamos a crear el carrito 



const ContexCarrito = React.createContext();

const CarritoProvaider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (pizza) => {
        setCarrito([...carrito, pizza]);
    }
    const eliminarDelCarrito = (pizza) => {
        setCarrito(carrito.filter((item) => item.id !== pizza.id));
    }
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const total = carrito.reduce((acc, el) => acc + el.price, 0); 
    
    return (
    <ContexCarrito.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, total }}>
    {children}
    </ContexCarrito.Provider>
    );
}

const useCarrito = () => {
    return useContext(ContexCarrito);
    
}




export { Pizza, PizzaProvaider, ContextPizzas, usePizzas, CarritoProvaider, ContexCarrito, useCarrito, };
