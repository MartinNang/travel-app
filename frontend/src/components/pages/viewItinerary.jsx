import queryOverpass from "query-overpass";
import $ from "jquery";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CustomCard from "../ui/card";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const ViewItinerary = () => {
  return (
    
        
      <div id="itinerary-container">
    <h1 id="itinerary-title"><strong> Your Itinerary </strong></h1>
    <div id="itinerary-columns">
     
      <div class="day-column" id="day1">
        <h2 class="day-title">Day 1</h2>
        <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
           <div class="activity-name">ACTIVITY 1</div> 
          </div>
          <div class="activity-line"></div> 
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 2</div>
          </div>
          <div class="activity-line"></div> 
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 3</div>
          </div>
          <div class="activity-line"></div> 
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 4</div>
          </div>
          <div class="activity-line"></div> 
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            
            <div class="activity-name">ACTIVITY 5</div>
          </div>
       
      </div>

      
      <div class="day-column" id="day2">
        <h2 class="day-title">Day 2</h2>
        <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
           <div class="activity-name">ACTIVITY 1</div> 
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 2</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 3</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 4</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 5</div>
          </div>
      </div>


      
      <div class="day-column" id="day3">
        <h2 class="day-title">Day 3</h2>
        <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
          <div class="activity-name">ACTIVITY 1</div> 
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 2</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 3</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 4</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 5</div>
          </div>
      </div>

      <div class="day-column" id="day4">
        <h2 class="day-title">Day 4</h2>
        <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
          <div class="activity-name">ACTIVITY 1</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 2</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 3</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 4</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 5</div>
          </div>
      </div>

      <div class="day-column" id="day5">
        <h2 class="day-title">Day 5</h2>
        <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
          <div class="activity-name">ACTIVITY 1</div> 
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 2</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 3</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 4</div>
          </div>
          <div class="activity-line"></div>
          <div class="activity-card">
            <div class="tag-stack">
              <div class="activity-tag">START</div>
              <div class="activity-tag">END</div>
            </div>
            
            <div class="activity-name">ACTIVITY 5</div>
          </div>
      </div>

   </div>
   </div>
  );
};

export default ViewItinerary;