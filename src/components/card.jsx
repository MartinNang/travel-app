import { Card, CardBody, CardFooter, CardImg, CardText } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

/**
 * A basic Bootstrap card template for projects.
 * @param {id} id of the dynamically generated element
 * @param {name} name of the project
 * @param {date} release date
 * @param {description} project description
 * @param {link} url used in button element to link to project
 * @param {linkText} text displayed in button
 * @returns a bootstrap card element containing project information.
 */
const CustomCard = ({
  id,
  name,
  latitude,
  longitude,
  address,
  openingHours,
  phoneNr,
  email,
  link,
  type,
  operator,
  wheelchair,
  description,
  fee,
  setPois,
  pois,
}) => {
  const [added, setAdded] = useState(false);

  return (
    <Card key={id} className="mb-2 p-2">
      <CardBody>
        <h2 class="card-title">{name}</h2>
        {latitude && longitude ? (
          <CardText>
            [{latitude}, {longitude}]
          </CardText>
        ) : (
          ""
        )}
        {address ? <CardText>Address: {address}</CardText> : ""}
        {openingHours ? <CardText>Opening Hours: {openingHours}</CardText> : ""}
        {phoneNr ? <CardText>Phone Number: {phoneNr}</CardText> : ""}
        {email ? <CardText>E-Mail: {email}</CardText> : ""}
        {link ? (
          <CardText>
            Website: <Link to={link}>{link}</Link>
          </CardText>
        ) : (
          ""
        )}
        {operator ? <CardText>Operated by: {operator}</CardText> : ""}
        {wheelchair ? (
          <CardText>Wheelchair accessible: {wheelchair}</CardText>
        ) : (
          ""
        )}
        {fee ? <CardText>Fee: {fee}</CardText> : ""}
        <Button
          variant="secondary"
          className="bg-dark float-end"
          disabled={added}
          onClick={() => {
            setPois((pois) => [...pois, { lat: latitude, lon: longitude }]);
            setAdded(true);
          }}>
          Add{added ? "ed" : ""}
        </Button>
      </CardBody>
      <CardFooter className="row">
        <small class="">Type: {type}</small>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
