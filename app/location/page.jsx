"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LeafletMap from "@/components/LeafletMap";

const LocationPage = () => {
  return (
    <div className="container mx-auto py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Location</h1>

      {/* OpenStreetMap with Leaflet */}
      <div className="mb-12">
        <LeafletMap />
      </div>

      {/* Microlocation Section */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1">
            <Image
              src="/assets/location/camp_slapic.jpg"
              width={600}
              height={337}
              alt="Camp Slapić"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Camp Slapić</h2>
            <p>
              Located nearby, Camp Slapić is a beautiful camping site offering a
              variety of recreational activities and amenities for a perfect
              getaway.
            </p>
            <a
              href="https://www.campslapic.hr/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 inline-block"
            >
              Learn more about Camp Slapić
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                width="600"
                height="337"
                src="https://www.youtube.com/embed/CZ2Hpv-pahU"
                title="Otok Ljubavi Waterfalls"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Otok Ljubavi Waterfalls</h2>
            <p>
              Discover the beautiful Otok Ljubavi Waterfalls, a series of
              stunning waterfalls with crystal clear water. A perfect spot for
              nature lovers.
            </p>
          </div>
        </div>
      </div>

      {/* Book with Airbnb Button */}
      <div className="text-center mt-12">
        <Link
          href="https://www.airbnb.com/rooms/1200771532627153104"
          legacyBehavior
        >
          <a className="btn btn-lg mt-8">Book with Airbnb</a>
        </Link>
      </div>
    </div>
  );
};

export default LocationPage;
