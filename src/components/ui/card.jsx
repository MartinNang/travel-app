import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardLink,
  CardText,
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { use, useEffect, useState } from "react";
import { BsHeart, BsHeartFill, BsBoxArrowUpRight } from "react-icons/bs";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import placeholderImg from "../../images/placeholder_300x200.png";
import museumImg from "../../images/museum.png";
import artworkImg from "../../images/frame.png";
import attractionImg from "../../images/ferris-wheel.png";
import aquariumImg from "../../images/aquarium.png";
import galleryImg from "../../images/gallery.png";
import hotelImg from "../../images/resort.png";
import zooImg from "../../images/zoo.png";
import barImg from "../../images/cocktail.png";
import cafeImg from "../../images/coffee-cup.png";
import restaurantImg from "../../images/restaurant.png";
import venueImg from "../../images/stage.png";
import casinoImg from "../../images/slot-machine.png";
import cinemaImg from "../../images/cinema-screen.png";
import artImg from "../../images/art.png";
import libraryImg from "../../images/open-book.png";
import universityImg from "../../images/graduation.png";
import pubImg from "../../images/beer.png";

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
  image,
}) => {
  const [added, setAdded] = useState(false);
  const [descriptionLoading, setDescriptionLoading] = useState(false);
  const [cardDescription, setCardDescription] = useState(description);
  // console.log("address", address);
  // console.log("description", description);

  useEffect(() => {
    if (!description && wikidataId) {
      // console.log("fetching wikidata", wikidataId);
      setDescriptionLoading(true);
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
      setDescriptionLoading(false);
    }
    setAdded(wishlist.some((e) => e.name === name));
  }, [description, wikidataId, wishlist]);

  function getPlaceholder() {
    switch (type) {
      case "attraction":
        return attractionImg;
      case "artwork":
        return artworkImg;
      case "aquarium":
        return aquariumImg;
      case "gallery":
        return galleryImg;
      case "hotel":
        return hotelImg;
      case "museum":
        return museumImg;
      case "zoo":
        return zooImg;
      case "bar":
        return barImg;
      case "cafe":
        return cafeImg;
      case "pub":
        return pubImg;
      case "restaurant":
        return restaurantImg;
      case "events_venue":
        return venueImg;
      case "casino":
        return casinoImg;
      case "cinema":
        return cinemaImg;
      case "arts_centre":
        return artImg;
      case "library":
        return libraryImg;
      case "university":
        return universityImg;
      default:
        return placeholderImg;
    }
  }

  return (
    <Card key={id} className="mb-4 event-card p-0 flex-row flex-wrap">
      <CardHeader
        className={image ? "border-0 col-5" : "placeholder-img col-5 py-5"}>
        <CardImg
          variant="top"
          src={image ? image : getPlaceholder()}
          onError={(i) => (i.target.src = getPlaceholder())}></CardImg>
      </CardHeader>
      <Col className="p-0">
        <Row className="m-0">
          <CardBody className="p-4">
            <h2 class="card-title">{name}</h2>
            {/*{latitude && longitude ? (
          <CardText>
            [{latitude}, {longitude}]
          </CardText>
        ) : (
          ""
        )}*/}
            <div className="mt-4">
              {descriptionLoading ? (
                <Spinner animation="grow" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : cardDescription ? (
                <CardText>{cardDescription}</CardText>
              ) : (
                ""
              )}

              {address ? <CardText>Address: {address}</CardText> : ""}
              {openingHours ? (
                <CardText>Opening Hours: {openingHours}</CardText>
              ) : (
                ""
              )}
              {/* {phoneNr ? <CardText>Phone Number: {phoneNr}</CardText> : ""} */}
              {/* {email ? <CardText>E-Mail: {email}</CardText> : ""} */}
              {/* {link ? (
                <CardText>
                  Website: <Link to={link}>{link}</Link>
                </CardText>
              ) : (
                ""
              )} */}
              {/*
        {operator ? <CardText>Operated by: {operator}</CardText> : ""}*/}
              {wheelchair ? (
                <CardText>Wheelchair accessible: {wheelchair}</CardText>
              ) : (
                ""
              )}
              {fee ? <CardText>Fee: {fee}</CardText> : ""}
            </div>
          </CardBody>
        </Row>
        <Row className="m-0">
          <CardFooter className="row bg-transparent mx-0 py-3">
            <Col>
              <small class="">Type: {type}</small>
            </Col>
            <Col>
              {link ? (
                <CardLink href={link}>
                  <BsBoxArrowUpRight></BsBoxArrowUpRight>Visit
                </CardLink>
              ) : (
                ""
              )}
            </Col>
            <Col xs={2}>
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
                  // setAdded(true);
                }}>
                {added ? (
                  <BsHeartFill className="add-button"></BsHeartFill>
                ) : (
                  <BsHeart className="add-button"></BsHeart>
                )}
              </Button>
            </Col>
          </CardFooter>
        </Row>
      </Col>
    </Card>
  );
};

export default CustomCard;
