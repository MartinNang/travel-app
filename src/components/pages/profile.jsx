import React, { useState } from "react";

import { Container } from "react-bootstrap";
import profilepic from "../../images/profile-pic.png"
import polaroid from "../../images/polaroid.png"
import settings from "../../images/settings.png"



const Profile = () => {
   
    const [activeTab, setActiveTab] = useState("all");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };


  return (
    <>    
           <div class="header">
        <div class="profile-info">
            <img src={profilepic} alt="Profile Picture" class="profile-pic"/>
            <div class="user-details">
                <h1 class="username">Username</h1>
                <p class="status">This is a user status</p>
            </div>
        </div>
        <div class="stats-follow">
            <div class="stats">
                <div class="stat-item">
                    <p class="stat-number">500</p>
                    <p class="stat-title">Trips</p>
                </div>
                <div class="stat-item">
                    <p class="stat-number">200</p>
                    <p class="stat-title">Followers</p>
                </div>
                <div class="stat-item">
                    <p class="stat-number">150</p>
                    <p class="stat-title">Following</p>
                </div>
            </div>
            <button class="follow-btn">Follow</button>
            <img src={settings} alt="Settings" class="settings-btn"/>
        </div>
    </div>
    <div class="separator"></div>
    <div class="tabs">
        <div
          class={`tab ${activeTab === "all" ? "active" : ""}`}
          onClick={() => handleTabClick("all")}
        >
          All
        </div>
        <div
          class={`tab ${activeTab === "itineraries" ? "active" : ""}`}
          onClick={() => handleTabClick("itineraries")}
        >
          Itineraries
        </div>
        <div
          class={`tab ${activeTab === "photos" ? "active" : ""}`}
          onClick={() => handleTabClick("photos")}
        >
          Photos
        </div>
      </div>
      
      
      <div class={`tab-content ${activeTab === "all" ? "active" : ""}`} id="all">
        <div class="all-itinerary-wrapper">
        <div class="all-itinerary-container"> 
            <h1 class="all-itinerary-title">DUBLIN PUB CRAWL ITINERARY</h1>
                
                <div class="all-itinerary-content">
                    <div class="all-itinerary-text">
                        <p><strong>Day 1 -</strong> More events</p>
                        <p><strong>Day 2 -</strong> Something new</p>
                        <p><strong>Day 3 -</strong> Great experience</p>
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
                        <p><strong>Day 4 -</strong> New fun</p>
                        <p><strong>Day 5 -</strong> Exciting stuff</p>
                        <p><strong>Day 6 -</strong> The last party</p>
                    </div>
                </div>
            </div>
        
            <div class="all-itinerary-wrapper">
            <div class="all-itinerary-container"> 
                <h1 class="all-itinerary-title">DUBLIN PUB CRAWL ITINERARY</h1>
        
                <div class="all-itinerary-content">
                    <div class="all-itinerary-text">
                        <p><strong>Day 1 -</strong> More events</p>
                        <p><strong>Day 2 -</strong> Something </p>
                        <p><strong>Day 3 -</strong> Great day</p>
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
                        <p><strong>Day 4 -</strong> New fun</p>
                        <p><strong>Day 5 -</strong> Exciting stuff</p>
                        <p><strong>Day 6 -</strong> The last party</p>
                    </div>
                </div>
                </div>
                    
            
            <div class="all-photo-collage-container">
                <div class="all-photo-row">
                    <div class="all-photo"><img src={polaroid} alt="Event 1"/></div>
                    <div class="all-photo"><img src={polaroid} alt="Event 2"/></div>
                    <div class="all-photo"><img src={polaroid} alt="Event 3"/></div>
                </div>
                <div class="all-photo-row">
                    <div class="all-photo"><img src={polaroid} alt="Event 4"/></div>
                    <div class="all-photo"><img src={polaroid} alt="Event 5"/></div>
                </div>
            </div>
        </div>
        </div>
        </div>
      
        <div class={`tab-content ${activeTab === "itineraries" ? "active" : ""}`} id="itineraries">
        <div class="itinerary-wrapper"> 
            <div class="itinerary-container"> 
                <h1 class="itinerary-title">DUBLIN PUB CRAWL ITINERARY</h1>
        
                <div class="itinerary-content">
                    <div class="itinerary-text">
                        <p><strong>Day 1 -</strong> More events</p>
                        <p><strong>Day 2 -</strong> Something new</p>
                        <p><strong>Day 3 -</strong> Great experience</p>
                    </div>
        
                    <div class="itinerary-images">
                        <div class="itinerary-polaroid itinerary-rotated-left">
                            <img src={polaroid} alt="Polaroid Image"/>
                        </div>
                        <div class="itinerary-polaroid itinerary-rotated-right">
                            <img src={polaroid} alt="Polaroid Image"/>
                        </div>
                    </div>
        
                    <div class="itinerary-text-right">
                        <p><strong>Day 4 -</strong> New fun</p>
                        <p><strong>Day 5 -</strong> Exciting stuff</p>
                        <p><strong>Day 6 -</strong> The last party</p>
                    </div>
                </div>

            </div>
        
            <div class="itinerary-container"> 
                <h1 class="itinerary-title">DUBLIN PUB CRAWL ITINERARY</h1>
        
                <div class="itinerary-content">
                    <div class="itinerary-text">
                        <p><strong>Day 1 -</strong> More events</p>
                        <p><strong>Day 2 -</strong> Something new</p>
                        <p><strong>Day 3 -</strong> Great experience</p>
                    </div>
        
                    <div class="itinerary-images">
                        <div class="itinerary-polaroid itinerary-rotated-left">
                            <img src={polaroid} alt="Polaroid Image"/>
                        </div>
                        <div class="itinerary-polaroid itinerary-rotated-right">
                            <img src={polaroid} alt="Polaroid Image"/>
                        </div>
                    </div>
        
                    <div class="itinerary-text-right">
                        <p><strong>Day 4 -</strong> New fun</p>
                        <p><strong>Day 5 -</strong> Exciting stuff</p>
                        <p><strong>Day 6 -</strong> The last party</p>
                    </div>
                </div>
            </div>
            <div class="itinerary-container"> 
                <h1 class="itinerary-title">DUBLIN PUB CRAWL ITINERARY</h1>
        
                <div class="itinerary-content">
                    <div class="itinerary-text">
                        <p><strong>Day 1 -</strong> More events</p>
                        <p><strong>Day 2 -</strong> Something new</p>
                        <p><strong>Day 3 -</strong> Great experience</p>
                    </div>
        
                    <div class="itinerary-images">
                        <div class="itinerary-polaroid itinerary-rotated-left">
                            <img src={polaroid} alt="Polaroid Image"/>
                        </div>
                        <div class="itinerary-polaroid itinerary-rotated-right">
                            <img src={polaroid} alt="Polaroid Image"/>
                        </div>
                    </div>
        
                    <div class="itinerary-text-right">
                        <p><strong>Day 4 -</strong> New fun</p>
                        <p><strong>Day 5 -</strong> Exciting stuff</p>
                        <p><strong>Day 6 -</strong> The last party</p>
                    </div>
                </div>
            </div>
            <div class="itinerary-container"> 
                <h1 class="itinerary-title">DUBLIN PUB CRAWL ITINERARY</h1>
        
                <div class="itinerary-content">
                    <div class="itinerary-text">
                        <p><strong>Day 1 -</strong> More events</p>
                        <p><strong>Day 2 -</strong> Something new</p>
                        <p><strong>Day 3 -</strong> Great experience</p>
                    </div>
        
                    <div class="itinerary-images">
                        <div class="itinerary-polaroid itinerary-rotated-left">
                            <img src={polaroid} alt="Polaroid Image"/>
                        </div>
                        <div class="itinerary-polaroid itinerary-rotated-right">
                            <img src={polaroid} alt="Polaroid Image"/>
                        </div>
                    </div>
        
                    <div class="itinerary-text-right">
                        <p><strong>Day 4 -</strong> New fun</p>
                        <p><strong>Day 5 -</strong> Exciting stuff</p>
                        <p><strong>Day 6 -</strong> The last party</p>
                    </div>
                </div>
            </div>
            <div class="itinerary-container"> 
                <h1 class="itinerary-title">DUBLIN PUB CRAWL ITINERARY</h1>
        
                <div class="itinerary-content">
                    <div class="itinerary-text">
                        <p><strong>Day 1 -</strong> More events</p>
                        <p><strong>Day 2 -</strong> Something new</p>
                        <p><strong>Day 3 -</strong> Great experience</p>
                    </div>
        
                    <div class="itinerary-images">
                        <div class="itinerary-polaroid itinerary-rotated-left">
                            <img src={polaroid} alt="Polaroid Image"/>
                        </div>
                        <div class="itinerary-polaroid itinerary-rotated-right">
                            <img src={polaroid} alt="Polaroid Image"/>
                        </div>
                    </div>
        
                    <div class="itinerary-text-right">
                        <p><strong>Day 4 -</strong> New fun</p>
                        <p><strong>Day 5 -</strong> Exciting stuff</p>
                        <p><strong>Day 6 -</strong> The last party</p>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
        
      </div>
      
      <div class={`tab-content ${activeTab === "photos" ? "active" : ""}`} id="photos">
        <div class="collage-container">
        <div class="collage-item"><img src={polaroid} alt="Polaroid Image"/></div>
        <div class="collage-item"><img src={polaroid} alt="Polaroid Image"/></div>
        <div class="collage-item"><img src={polaroid} alt="Polaroid Image"/></div>
        <div class="collage-item"><img src={polaroid} alt="Polaroid Image"/></div>
        <div class="collage-item"><img src={polaroid} alt="Polaroid Image"/></div>
        <div class="collage-item"><img src={polaroid} alt="Polaroid Image"/></div>
        <div class="collage-item"><img src={polaroid} alt="Polaroid Image"/></div>
        <div class="collage-item"><img src={polaroid} alt="Polaroid Image"/></div>
    </div>
          
          
          
      </div>
    

      
     
</>
     );
          };
        

export default Profile;