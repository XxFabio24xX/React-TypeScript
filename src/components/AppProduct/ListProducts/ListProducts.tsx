import { FC } from "react";
import { Card } from "react-bootstrap";
interface ItemProduct {
    nombre: string;
    imagen: string;
    precio: number;
}

interface IPropsListProducts {
    arrItem: ItemProduct[];
}

export const ListProducts :FC<IPropsListProducts> = ({ arrItem }) => {
  return (
    <div
        className="p-1 m-3 border rounded d-grid gap-2"
        style={{ gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))' }}
        >
        {
            arrItem.map((el, i) => (
                <Card key={i} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={el.imagen} />
                    <Card.Body>
                    <Card.Title>{el.nombre}</Card.Title>
                    <Card.Text>${el.precio}</Card.Text>
                    </Card.Body>
                </Card>
            ))
        }
    </div>
  )
}
