import { Card, CardBody, CardFooter, CardImg, CardText } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import axios from "axios";

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
  wikidataId,
  fee,
  wishlist,
  setWishlist,
}) => {
  const [added, setAdded] = useState(false);
  const [cardDescription, setCardDescription] = useState(description);
  // console.log("address", address);
  // console.log("description", description);
  if (!description && wikidataId) {
    // console.log("fetching wikidata", wikidataId);
    fetchWikidata(wikidataId);
  }

  function fetchWikidata(wikidataId) {
    axios
      .get(
        `https://www.wikidata.org/wiki/Special:EntityData/${wikidataId}.json`
      )
      .then((response) => {
        /*console.log(
          "fetched",
          response.data.entities[wikidataId].descriptions.en.value
        );*/
        setCardDescription(
          response.data.entities[wikidataId].descriptions.en.value
        );
        // console.log("card description", cardDescription);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Card key={id} className="mb-4 p-4 event-card">
      <CardBody>
        <h2 class="card-title">{name}</h2>
        {/*{latitude && longitude ? (
          <CardText>
            [{latitude}, {longitude}]
          </CardText>
        ) : (
          ""
        )}*/}
        <div className="mt-4">
          {cardDescription ? <CardText>{cardDescription}</CardText> : ""}
          {address ? <CardText>Address: {address}</CardText> : ""}
          {openingHours ? (
            <CardText>Opening Hours: {openingHours}</CardText>
          ) : (
            ""
          )}
          {/* {phoneNr ? <CardText>Phone Number: {phoneNr}</CardText> : ""} */}
          {/* {email ? <CardText>E-Mail: {email}</CardText> : ""} */}
          {link ? (
            <CardText>
              Website: <Link to={link}>{link}</Link>
            </CardText>
          ) : (
            ""
          )}
          {/*
        {operator ? <CardText>Operated by: {operator}</CardText> : ""}*/}
          {wheelchair ? (
            <CardText>Wheelchair accessible: {wheelchair}</CardText>
          ) : (
            ""
          )}
          {fee ? <CardText>Fee: {fee}</CardText> : ""}
        </div>

        <Button
          variant="secondary"
          className="float-end rounded-circle p-0 bg-transparent border-0"
          disabled={added}
          onClick={() => {
            setWishlist((wishlist) => [
              ...wishlist,
              {
                name,
                description,
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
                wikidataId,
                fee,
              },
            ]);
            setAdded(true);
          }}>
          {added ? (
            <BsHeartFill className="add-button"></BsHeartFill>
          ) : (
            <BsHeart className="add-button"></BsHeart>
          )}
        </Button>
      </CardBody>
      <CardFooter className="row bg-transparent">
        <small class="">Type: {type}</small>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
