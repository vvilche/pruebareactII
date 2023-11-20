import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import imgLogo from '../assets/img/Logo.png';
import { useContext } from 'react';
import ContextPizza from '../contexts/ContexPizza'
import IconoCarrito from '../components/IconoCarrito';


export default function Navegacion () {
  const { monedaPizza,totalCarrito  } = useContext(ContextPizza);

  return (


    <Navbar className='barra'>
      <Container className='barra-container'>
        <Link to={'/'} className="logo">
          <img src={imgLogo} alt="Logo Pizza" />
          <span>Pizzeria Mamma Mia!</span>
        </Link>
        <Link to={'/carrito'} className={totalCarrito ? 'carrito-price' : 'carrito'}>
          <IconoCarrito tamaño="1.8rem" color="white"   />
          {totalCarrito ? '  ' + monedaPizza(totalCarrito) : null}
        </Link>
      </Container>
    </Navbar>
  );
}
