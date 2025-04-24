import React from "react";
import "../../styles/ItineraryDetailPage.css";
import it2 from "../../images/it2.jpg";
import it3 from "../../images/it3.jpg";
import it4 from "../../images/it4.jpg";

export default function ItineraryDetailPage() {
  const itineraryData = {
    title: "The Lazy Dublin Tour",
    author: "Sandra",
    description:
      "hshhshshhxhshhxsc jhsvcjsavhdgvcagvsdj hshhshshhxhshhxsc jhsvcjsavhdgvcagvsdj hshhshshhxhshhxscjjs",
    days: [
      {
        title: "DAY 1",
        activities: [
          "DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1",
          "DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1",
          "DAY 1DAY 1D1DAY 1DAY 1DAY 1DAY 1DAY 1",
        ],
      },
      {
        title: "DAY 2",
        activities: [
          "DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1",
          "DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1",
          "DAY 1DAY 1D1DAY 1DAY 1DAY 1DAY 1DAY 1",
        ],
      },
      {
        title: "DAY 3",
        activities: [
          "DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1",
          "DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1",
          "DAY 1DAY 1D1DAY 1DAY 1DAY 1DAY 1DAY 1",
        ],
      },
      {
        title: "DAY 4",
        activities: [
          "DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1",
          "DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1",
          "DAY 1DAY 1D1DAY 1DAY 1DAY 1DAY 1DAY 1",
        ],
      },
    ],
  };

  return (
    <div className="itinerary-container">
      <main className="itinerary-main">
        <div className="columns">
          {/* Left drawer cards */}
          <div className="left-column">
            {itineraryData.days.map((day, index) => (
              <div className="day-card" key={index}>
                <h2 className="day-title">{day.title}</h2>
                {day.activities.map((activity, i) => (
                  <p className="day-activity" key={i}>
                    {activity}
                  </p>
                ))}
                <img src={it2} alt="Polaroid" className="day-image" />
              </div>
            ))}
          </div>

          <div className="right-column">
            <div className="tour-details">
              <h1 className="tour-title">
                The Lazy <br /> Dublin Tour
              </h1>
              <p>
                {itineraryData.description.split(" ").slice(0, 10).join(" ")}
              </p>
              <p>
                {itineraryData.description.split(" ").slice(10, 20).join(" ")}
              </p>
              <p>{itineraryData.description.split(" ").slice(20).join(" ")}</p>
              <button className="btn-view">Click to view</button>
            </div>

            <div className="image-cluster">
              <img
                src={it3}
                alt="polaroid1"
                className="polaroid rotate-5"
                width="296"
                height="327"
              />
              <img
                src={it4}
                alt="polaroid2"
                className="polaroid rotate--5"
                width="254"
                height="282"
              />
              <img
                src={it2}
                alt="polaroid3"
                className="polaroid rotate-8"
                width="144"
                height="158"
              />
            </div>

            <div className="byline">
              <p className="author">By {itineraryData.author}</p>
              <div className="action-buttons">
                <button className="btn-action">Modify</button>
                <button className="btn-action">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Removed duplicate default export
