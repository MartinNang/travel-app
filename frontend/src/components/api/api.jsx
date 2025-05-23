import { Container, Row } from "react-bootstrap";
import UserTable from "./userTable";
import ItineraryTable from "./itineraryTable";
import axios from "axios";
axios.defaults.baseURL = "https://2425-cs7025-group1.scss.tcd.ie/";

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
