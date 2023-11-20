import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ContextPizza} from '../contexts/ContexPizza';
import {Container, Card , Button} from 'react-bootstrap';
import IconoCarrito from "../components/IconoCarrito";


export default function Detalle() {
    const {id } = useParams();  
    const {pizzas,monedaPizza,agregarCarrito} = useContext(ContextPizza);   

    
    return (

        
        <Container className="fichadetalle">
            {pizzas
            .filter((pizza) => pizza.id === id)
            .map((pizza,index) => (
                <Card key={index} > 
                <Container >
                    <Card.Img src={pizza.img} alt={pizza.name} />
                </Container>
                <Container>
                    <Card.Header>
                        <span className="text-capitalize fw-bold">{pizza.name}</span>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text> {pizza.desc} </Card.Text>
                        Ingredientes:
                        <ul>
                            {pizza.ingredients.map((ingredient, index) => (
                                <li key={index}> 🍕 {ingredient}</li>
                            ))}
                        </ul>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Card.Text className="d-flex justify-content-around align-items-center">
                            <span className="fw-bold">{monedaPizza(pizza.price)}</span>
                            <Button onClick={() => agregarCarrito(pizza)}>Agregar</Button>
                            <IconoCarrito tamaño=".9rem" color="white" />
                        </Card.Text>

                    </Card.Footer>
                </Container>
                </Card>

                
            ))}
        </Container>
    );
}
