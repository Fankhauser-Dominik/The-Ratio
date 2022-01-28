import React from "react";
import FounderBanner from "../../Components/FounderBanner/FounderBanner";
import OurServices from "../../Components/OurServices/OurServices";
import OurProfessionals from "../../Components/OurProfessionals/OurProfessionals";
import Blog from "../../Components/Blog/Blog";

export default function Home() {
  return (
    <main>
      <FounderBanner />
      <OurServices />
      <OurProfessionals />
      <Blog />
    </main>
  );
}
