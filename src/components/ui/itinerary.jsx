/**
 * An element displaying an itinerary
 * Currently used in the profile page
 */

import React from "react";
import polaroid from "../../images/polaroid.png";

const Itinerary = ({title, events, images}) => {

    return (
        <>
                <div class="all-itinerary-container">
                    <h1 class="all-itinerary-title">{title}</h1>

                    <div class="all-itinerary-content">
                        <div class="all-itinerary-text">
                            <p>
                                <strong>Day 1 -</strong> More events
                            </p>
                            <p>
                                <strong>Day 2 -</strong> Something new
                            </p>
                            <p>
                                <strong>Day 3 -</strong> Great experience
                            </p>
                        </div>

                        <div class="all-itinerary-images">
                            <div class="all-itinerary-polaroid itinerary-rotated-left">
                                <img src={polaroid} alt="Polaroid Image"/>
                            </div>
                            <div class="all-itinerary-polaroid itinerary-rotated-right">
                                <img src={polaroid} alt="Polaroid Image"/>
                            </div>
                        </div>

                        <div class="all-itinerary-text-right">
                            <p>
                                <strong>Day 4 -</strong> New fun
                            </p>
                            <p>
                                <strong>Day 5 -</strong> Exciting stuff
                            </p>
                            <p>
                                <strong>Day 6 -</strong> The last party
                            </p>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Itinerary;
