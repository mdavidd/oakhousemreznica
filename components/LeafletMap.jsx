"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

const DynamicMap = dynamic(() => import("./DynamicMap"), {
  ssr: false,
});

const LeafletMap = () => {
  return (
    <div>
      <DynamicMap />
    </div>
  );
};

export default LeafletMap;
