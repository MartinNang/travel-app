import { Container, Row } from "react-bootstrap";
import UserTable from "./userTable";
import ItineraryTable from "./itineraryTable";

const Api = ({}) => {
  return (
    <article>
      <Container>
        <Row>
          <h1>API</h1>
        </Row>
        <UserTable></UserTable>
        <ItineraryTable></ItineraryTable>
      </Container>
    </article>
  );
};

export default Api;
