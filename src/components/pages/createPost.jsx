import React from "react";
import "./createPost.css";
import it2 from "../../images/it2.jpg";
import it3 from "../../images/it3.jpg";
import it4 from "../../images/it4.jpg";

export default function CreatePost() {
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
    <div className="create-post-container">
      <main className="create-post-main">
        <div className="columns">
          {/* Left drawer cards */}
          <div className="left-column">
            <p className="paragraph-left-card">Itinerary</p>
          </div>

          <div className="right-column">
            <div className="image-container">
              <img
                src={it3}
                alt="polaroid1"
                className="display-image"
                width={250}
                height={327}
              />
            </div>
            <div className="content-container">
              <h1>Hello</h1>
            </div>
          </div>
        </div>
        <div className="create-post-subfooter">
          <div className="create-post-tag-container">
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
          </div>
          <div className="create-post-button-container">
            <PostButton />
          </div>
        </div>
      </main>
    </div>
  );
}

// Removed duplicate default export

/**
 *
 * create a tag button with a small cross icon on the right side
 */
const TagButton = ({ text, onClick }) => {
  return (
    <div className="tag-button">
      <span>{text}</span>
      <button className="tag-button-close" onClick={onClick}>
        &times;
      </button>
    </div>
  );
};

/**
 *
 * create a tag button with a small cross icon on the right side
 */
const PostButton = () => {
  return (
    <div className="post-button">
      <span>Post</span>
    </div>
  );
};
