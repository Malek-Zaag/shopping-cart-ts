import { Col, Container, Row } from "react-bootstrap";
import { Navbar } from "../components/Navbar";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/data.json";

export function Store() {
  return (
    <>
      <Navbar />
      <h1>Store</h1>
      <Row md={2} lg={3} xs={1}>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
