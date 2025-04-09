import queryOverpass from "query-overpass";
import $ from "jquery";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CustomCard from "../ui/card";
import { Spinner } from "react-bootstrap";
import it5 from "../../images/it5.jpg";
import it2 from "../../images/it2.jpg";
import it3 from "../../images/it3.jpg";
import it4 from "../../images/it4.jpg";

const InsideItinerary = ({}) => {
  return (
    <div>
      <ItineraryPage />
    </div>
  );
};

export function ItineraryPage() {
  return (
    <main className="container mx-auto px-4 py-8 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Itinerary Days */}
        <div className="space-y-6">
          {/* Day 1 */}
          <Card className="rounded-[60px] bg-[#554293] text-white p-8 shadow-md relative overflow-hidden">
            <h2 className="text-[#f19edc] text-3xl font-normal text-center mb-4">
              DAY 1
            </h2>
            <div className="space-y-6">
              <p className="text-xl">
                DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY
                1
              </p>
              <p className="text-xl">
                DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY
                1
              </p>
              <p className="text-xl">DAY 1DAY 1D1DAY 1DAY 1DAY 1DAY 1DAY 1</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <img
                src="/placeholder.svg"
                alt="Polaroid Travel Image"
                width={144}
                height={158}
                className="object-cover"
              />
            </div>
          </Card>

          {/* Day 2 */}
          <Card className="rounded-[60px] bg-[#554293] text-white p-8 shadow-md relative overflow-hidden">
            <h2 className="text-[#f19edc] text-3xl font-normal text-center mb-4">
              DAY 2
            </h2>
            <div className="space-y-6">
              <p className="text-xl">
                DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY
                1
              </p>
              <p className="text-xl">
                DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY 1DAY
                1
              </p>
              <p className="text-xl">DAY 1DAY 1D1DAY 1DAY 1DAY 1DAY 1DAY 1</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <img
                src="/placeholder.svg"
                alt="Polaroid Travel Image"
                width={144}
                height={158}
                className="object-cover"
              />
            </div>
          </Card>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-[676px] w-px bg-gray-300 mt-8"></div>

        {/* Right Column - Tour Details */}
        <div className="relative">
          <div className="text-center mb-12">
            <h1 className="text-[#0b524c] text-5xl font-bold mb-6">
              The Lazy <br />
              Dublin Tour
            </h1>
            <p className="text-xl mb-2">
              hshhshshhxhshhxsc jhsvcjsavhdgvcagvsdj
            </p>
            <p className="text-xl mb-2">
              hshhshshhxhshhxsc jhsvcjsavhdgvcagvsdj
            </p>
            <p className="text-xl mb-8">hshhshshhxhshhxscjjs</p>

            <Button className="bg-[#554293] text-[#f19edc] hover:bg-[#473980] rounded-md px-6 py-3">
              Click to view
            </Button>
          </div>

          <div className="relative h-[400px]">
            <div className="absolute left-0 top-0">
              <img
                src="/placeholder.svg"
                alt="Polaroid Travel Image"
                width={296}
                height={327}
                className="object-cover transform rotate-[-5deg]"
              />
            </div>
            <div className="absolute right-0 top-20">
              <img
                src="/placeholder.svg"
                alt="Polaroid Travel Image"
                width={254}
                height={282}
                className="object-cover transform rotate-[5deg]"
              />
            </div>
            <div className="absolute right-20 bottom-0">
              <img
                src="/placeholder.svg"
                alt="Polaroid Travel Image"
                width={144}
                height={158}
                className="object-cover transform rotate-[8deg]"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-2xl mb-8">By Sandra</p>
            <div className="flex justify-center gap-4">
              <Button className="bg-[#554293] text-[#f19edc] hover:bg-[#473980] rounded-md px-8 py-3">
                Modify
              </Button>
              <Button className="bg-[#554293] text-[#f19edc] hover:bg-[#473980] rounded-md px-8 py-3">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default InsideItinerary;
