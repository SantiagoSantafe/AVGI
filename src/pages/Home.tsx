import { useState } from "react";
import NavBar from "@/components/NavBar";
import "../styles/Home.css";
import GetKnownAVGI from "@/components/GetKnownAVGI";

function Home() {
  return (
    <>
      <NavBar />
      <GetKnownAVGI />
      <h1>Home</h1>
    </>
  );
}

export default Home;
