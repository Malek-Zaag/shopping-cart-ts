import { Button, Card } from "react-bootstrap";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: Props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
  );
}
