import { Container } from 'react-bootstrap';
import { useContext } from "react";
import { ContextPizza} from '../contexts/ContexPizza'
import CarritoPizzas from '../components/CarritoPizzas';



const CarritoCompra = () => {

    const {carrito} = useContext(ContextPizza);

    return (
        <>
            <Container className='carrito-compra'>
                <h2 className="text-center">Carrito de Compras</h2>
                {carrito.length ? <CarritoPizzas/> : <p className="text-center">No hay pizzas en el carrito</p>}
            </Container>
        </>
    )
}

export default CarritoCompra



