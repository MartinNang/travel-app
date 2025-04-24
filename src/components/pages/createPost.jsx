import React, {useEffect, useState} from "react";
import "../../styles/createPost.css";
import Container from "react-bootstrap/Container";
import {Button, Col, Form, Row} from "react-bootstrap";
import axios from "axios";
import Itinerary from "../ui/itinerary";
import {useNavigate} from "react-router-dom";

export default function CreatePost() {
  const [description, setDescription] = useState("");
  const [itineraries, setItineraries] = useState([]);
  const [selectedItinerary, setSelectedItinerary] = useState();
  const [loadingItinerary,  setLoadingItinerary] = useState(true);
  const [validated, setValidated] = useState(false);
  const [postImages,  setPostImages] = useState("");
  const profileId = sessionStorage.getItem("id");

  const navigate = useNavigate();

  function fetchItineraries() {
    console.log("fetching itineraries for user with profileId:", profileId);
    axios
        .get("/itineraries/user/" + profileId)
        .then((response) => {
          let itineraries = response.data;
          setItineraries(itineraries);
          console.log("itineraries data response:", itineraries);
        })
        .catch((error) => {
          console.error(error);
          setItineraries([]);
        });
  }

    useEffect(() => {
        if (loadingItinerary) {
            fetchItineraries()
            setLoadingItinerary(false);
        }
    }, [itineraries]);

    async function uploadPost(images, callback) {
        console.log("uploading post form");
        await axios
            .postForm("/create-post", {
                "itineraryId": selectedItinerary.id,
                "userId": profileId,
                "description": description,
                "postImages": images,
            })
            .then(function (result) {
                console.log("uploaded image", result.data);
                callback(result);
            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data.error);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    // setErrorMessage(error.response.data.error);
                    // setShow(true);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            console.log("upload post images", postImages);
            await uploadPost(
                document.querySelector('input[type="file"]').files[0],
                (result) => {
                    console.log("result uploaded post", result.data);
                    navigate("/profile/" + profileId);
                }
            );
        }
        setValidated(true);

    }

    function handleChangeDescription(event) {
        setDescription(event.target.value);
    }

    function handleChangeSelectedItinerary(event) {
        setSelectedItinerary(itineraries[event.target.value]);
        console.log("selected Itinerary:", itineraries[event.target.value]);
    }

    function handleChangePostImages(event) {
        setPostImages(event.target.value);
    }

    return (
    <Container className="create-post-container">
      <Form className="create-post-main" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="">
          {/* Left drawer cards */}
          <Col className={"d-flex flex-column"}>
              <Row>
                  <Form.Group controlId="formItinerary" className={"w-100"}>
                      <Form.Label>Itinerary</Form.Label>
                      <Form.Select
                          required
                          aria-label="Select Itinerary"
                          className="w-100"
                          value={selectedItinerary}
                          onInput={handleChangeSelectedItinerary}
                          isValid={false}
                          isInvalid={typeof selectedItinerary === "undefined"}
                      >
                          <option disabled selected value>Select itinerary</option>
                          {itineraries.map((itinerary, index) => (
                              <option value={index}>{itinerary.name}</option>
                          ))}
                      </Form.Select>

                      <Form.Control.Feedback type="invalid">
                          Please select an itinerary.
                      </Form.Control.Feedback>
                  </Form.Group>
              </Row>
              <Row className={"flex-grow-1 mt-3"}>
                  <div className={"left-column h-100 w-100 p-3 align-items-center justify-content-center"}>
                      {selectedItinerary ?
                          <Itinerary
                              id={selectedItinerary.id}
                              title={selectedItinerary.title}
                              startDate={selectedItinerary.start_date}
                              endDate={selectedItinerary.end_date}
                              type={selectedItinerary.type}>
                          </Itinerary>
                          : ""}
                  </div>
              </Row>

          </Col>

          <Col className="right-column">
            {/*<div className="image-container">*/}
              {/*<img
                src={it3}
                alt="polaroid1"
                className="display-image"
                width={250}
                height={327}
              />*/}
            <Form.Group controlId="formPostImages" className={"w-100"} >
                <Form.Label>Post Images</Form.Label>
                <Form.Control
                    className="bg-light"
                    type="file"
                    placeholder="Post Images"
                    value={postImages}
                    onInput={handleChangePostImages}
                    accept="image/*"
                    name={"postImages"}

                />
            </Form.Group>
            {/*</div>*/}
            <Form.Group controlId="formDescription" className={"w-100"}>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    required
                    minLength={1}
                    className="content-container w-100"
                    type="text"
                    placeholder="Add a description to your post"
                    value={description}
                    onInput={handleChangeDescription}
                />
                <Form.Control.Feedback type="invalid">
                    Please add a description to your post.
                </Form.Control.Feedback>
            </Form.Group>

          </Col>
        </Row>
        <Row className="create-post-subfooter">
            {/*<Col className="create-post-tag-container">
             <TagButton
              text="Tag 1"
              onClick={() => console.log("Tag 1 clicked")}
            />
            <TagButton
              text="Tag 1"
              onClick={() => console.log("Tag 1 clicked")}
            />
            <TagButton
              text="Tag 1"
              onClick={() => console.log("Tag 1 clicked")}
            />
          </Col>*/}
          <Col className="create-post-button-container ms-auto">
            <PostButton/>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

// Removed duplicate default export

/**
 *
 * create a tag button with a small cross icon on the right side
 */
// const TagButton = ({ text, onClick }) => {
//   return (
//     <div className="tag-button">
//       <span>{text}</span>
//       <button className="tag-button-close" onClick={onClick}>
//         &times;
//       </button>
//     </div>
//   );
// };

/**
 *
 * create a tag button with a small cross icon on the right side
 */
const PostButton = () => {
  return (
    <Button className="post-button w-100" type={"submit"}>
      <span>Post</span>
    </Button>
  );
};
