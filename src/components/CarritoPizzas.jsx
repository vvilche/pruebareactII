import {Table, Button} from 'react-bootstrap';
import { useContext } from "react";
import { ContextPizza} from '../contexts/ContexPizza';

export default function CarritoPizzas() {
    const {carrito,monedaPizza,incrementaCount,decrementaCount,totalCarrito} = useContext(ContextPizza);
        
    return (
        <>
         <Table responsive>
        <tbody>
          {carrito.map((pizza, index) => (
            <tr key={index}>
              <td>
                <img src={pizza.img} alt={pizza.name} />
              </td>
              <td className="w-75 text-capitalize">{pizza.name}</td>
              <td>
                <Button onClick={() => decrementaCount(index)}>-</Button>
              </td>
              <td>{pizza.count}</td>
              <td>
                <Button onClick={() => incrementaCount(index)}>+</Button>
              </td>
              <td>=</td>
              <td>{monedaPizza(pizza.count * pizza.price)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="text-end fw-bold">
              Total
            </td>
            <td>=</td>
            <td className="fw-bold">{monedaPizza(totalCarrito)}</td>
          </tr>
        </tfoot>
      </Table>
      <Button className="float-end">Pagar</Button>

        </>
    );
}
