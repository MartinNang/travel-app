/**
 * An element displaying an itinerary
 * Currently used in the profile page
 */

import React from "react";

const Day = ({ day }) => {
    console.log("day key", day[0], "day value", day[1]);
    let date = new Date(day[0]);

    return (
        <div class="day-column" id="day1">
            <h2 class="day-title">{date.toDateString()}</h2>
            {day[1].map(function (event) {
                const startTime = (new Date(event.start_time))
                    .toLocaleTimeString('en-IE', { hour: '2-digit', minute: "2-digit", hour12: false });
                const endTime = (new Date(event.end_time))
                    .toLocaleTimeString('en-IE', { hour: '2-digit', minute: "2-digit", hour12: false });

                return (
                <>
                    <div class="activity-card">
                        <div class="tag-stack">
                            <div class="activity-tag">{startTime}</div>
                            <div class="activity-tag">{endTime}</div>
                        </div>

                        <div class="activity-name">{event.name}</div>
                    </div>
                    <div class="activity-line"></div>
                </>
            )})}
        </div>
    );
};

export default Day;
