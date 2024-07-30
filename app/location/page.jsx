"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
});

const LocationPage = () => {
  return (
    <div className="container mx-auto pt-24">
      {/* Map Section */}
      <div className="map-section">
        <LeafletMap />
      </div>

      {/* Camp Slapić Section */}
      <div className="info-section flex flex-col md:flex-row md:items-center">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/location/camp_slapic.jpg"
            width={600}
            height={400}
            alt="Camp Slapić"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h2>Camp Slapić</h2>
          <p>
            Located nearby, Camp Slapić is a beautiful camping site offering a
            variety of recreational activities and amenities for a perfect
            getaway.
          </p>
          <a
            href="https://www.campslapic.hr/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Camp Slapić
          </a>
        </div>
      </div>

      {/* Otok Ljubavi Waterfalls Section */}
      <div className="info-section flex flex-col md:flex-row md:items-center mt-8">
        <div className="w-full md:w-1/2">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/CZ2Hpv-pahU"
              title="Otok Ljubavi Waterfalls"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h2>Otok Ljubavi Waterfalls</h2>
          <p>
            Discover the beautiful Otok Ljubavi Waterfalls, a series of stunning
            waterfalls with crystal clear water. A perfect spot for nature
            lovers.
          </p>
        </div>
      </div>

      {/* Book with Airbnb Button */}
      <div className="booking-section text-center mt-12">
        <Link
          href="https://www.airbnb.com/rooms/1200771532627153104"
          legacyBehavior
        >
          <a className="btn btn-lg">Book with Airbnb</a>
        </Link>
      </div>
    </div>
  );
};

export default LocationPage;
