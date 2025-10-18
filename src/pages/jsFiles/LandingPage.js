import React from "react";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import { Helmet } from "react-helmet-async";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Rugved Apraj</title>
        <meta
          name="google-site-verification"
          content="MU6q7n6eOd4uzYtSCRVOoHaU1e9YkvKCV6A_2rumth0"
        />
        <meta
          name="description"
          content="Rugved Apraj – Creative Mobile, Web, and Game Developer building engaging apps and experiences. Explore projects, tutorials, and tech adventures!"
        />
        <meta
          name="keywords"
          content="Rugved Apraj, Mobile Developer, Web Developer, Game Developer, Portfolio, Apps"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Rugved Apraj | Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Rugved Apraj – Creative Mobile, Web, and Game Developer building engaging apps and experiences. Explore projects, tutorials, and tech adventures!"
        />
        <meta
          property="og:image"
          content="https://rugvedapraj.vercel.app/profile.jpg"
        />
        <meta property="og:url" content="https://rugvedapraj.vercel.app/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rugved Apraj | Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Rugved Apraj – Creative Mobile, Web, and Game Developer building engaging apps and experiences. Explore projects, tutorials, and tech adventures!"
        />
        <meta
          name="twitter:image"
          content="https://rugvedapraj.vercel.app/profile.jpg"
        />

        {/* Pinterest */}
        <meta name="pinterest" content="nopin" />
      </Helmet>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};

export default LandingPage;
