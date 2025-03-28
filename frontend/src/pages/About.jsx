"use client"; // Ensure it's a client component

import React from "react";
import dynamic from "next/dynamic";


const TimelineDemo = dynamic(() => import("../components/ui/timeline-demo"), {
  ssr: false,
});

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <TimelineDemo />
    </div>
  );
};

export default About;