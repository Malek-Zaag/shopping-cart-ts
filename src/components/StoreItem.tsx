import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: Props) {
  return (
    <Card className="h-100" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted"></span>
        </Card.Title>
        <Card.Text>{formatCurrency(price)}</Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
  );
}
