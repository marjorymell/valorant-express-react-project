import React from "react";
import AgentCarousel from "../components/Carousel/AgentCarousel";
import ArsenalCarousel from "../components/Carousel/ArsenalCarousel";
import MapsCarousel from "../components/Carousel/MapsCarousel";
import Banner from "../components/Banner/Banner";
import Background from "../components/Background/Background";

const Home = () => (
  <Background>
    <Banner />
    <div style={{ marginBottom: "100px" }} />
    <section>
      <AgentCarousel />
      <ArsenalCarousel />
      <MapsCarousel />
    </section>
    <div style={{ marginBottom: "100px" }} />
  </Background>
);

export default Home;
