/**
 * En Route - About Us page
 */

import React from "react";
import AboutImg from "../../images/maps.png"


const AboutUs = () => {
  return (
    <div>
<div class="About-banner"><h1>About Us</h1></div>
    <div class="About-us">
        <img src={AboutImg} alt="Map" className="about-image" />
    
    <div class="About-container">
    <div class="About-Us-Blurb">
        <p> EnRoute Travel is revolutionizing the way people plan their trips by
            offering personalized itineraries tailored to individual interests,
            alongside expertly curated travel plans for those seeking
            inspiration.
            <br />
            <br />
            Our platform seamlessly integrates user preferences—whether it's
            adventure, culture, relaxation, or gastronomy—into customized travel
            schedules, ensuring every journey is uniquely fulfilling. <br />
            <br />
            For those who prefer ready-made plans, our carefully crafted
            itineraries take the hassle out of decision-making, providing
            seamless experiences backed by expert recommendations. <br />
            <br />
            At EnRoute Travel, we believe that planning a trip should be as
            enjoyable as the journey itself, which is why we focus on
            eliminating the stress of logistics, bookings, and scheduling.{" "}
            <br />
            <br />
            With our intuitive platform, real-time updates, and user-friendly
            design, we strive to make travel effortless, allowing our customers
            to focus on what truly matters—exploring the world with ease and
            confidence.
          </p>
       </div>
    
       </div>
       </div>
       
      
</div>
    
  );
};

export default AboutUs;
