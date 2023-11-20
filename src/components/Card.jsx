
import { useContext } from "react";
import { ContextPizza} from '../contexts/ContexPizza'
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";





function Card () {

 const {pizzas,monedaPizza,agregarCarrito} = useContext(ContextPizza);
 const navigate = useNavigate();
    


    return (
        <>
            <div className="tarjeta-container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {pizzas.map((pizza, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4 shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={pizza.img} alt={pizza.name} />
                                <div className="card-body">
                                    <p className="card-text">{pizza.name}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="ingredientes">
                                            <h3>Ingredientes:</h3>
                                            <ul>
                                                {pizza.ingredients.map((ingredient, index) => (
                                                    <li key={index}> 🍕 {ingredient}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="btn-group">
                                            
                                            <Button onClick={() => navigate(`/Detalle/${pizza.id}`)} className="btn btn-sm btn-outline-secondary">Ver más</Button>
                                            <Button onClick={() => agregarCarrito(pizza)} className="btn btn-sm btn-outline-secondary">Agregar</Button> 
                                         
                                        </div>

                                        <p className="text-muted">{monedaPizza(pizza.price)}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}



export default Card

