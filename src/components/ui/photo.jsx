/**
 * An element displaying an itinerary
 * Currently used in the profile page
 */

import React from "react";
import polaroid from "../../images/polaroid.png";
import { Card, CardImg, CardBody, CardHeader, CardLink } from "react-bootstrap";
import placeholderImg from "../../images/placeholder_300x200.png";
import {BACKEND_URL} from "../../App";

const Photo = ({ id, imageSrc }) => {
    return (
        <>
            <Card className="all-itinerary-container mb-3 w-100">
                <CardHeader className="all-itinerary-title">
                    <CardImg
                        variant="top"
                        src={imageSrc ? BACKEND_URL +  imageSrc : placeholderImg}>

                    </CardImg>
                </CardHeader>

                <CardBody className="all-itinerary-content">

                </CardBody>
            </Card>
        </>
    );
};

export default Photo;
