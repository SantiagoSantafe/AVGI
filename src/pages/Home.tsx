import NavBar from "@/components/NavBar";
import "../styles/Home.css";
import GetKnownAVGI from "@/components/GetKnownAVGI";
import WIsAVGI from "@/components/WIsAVGI";
import WhoMakesAVGI from "@/components/WhoMakesAVGI";
import Numbers from "@/components/Numbers";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import OurWork from "@/components/OurWork";
import Testimonies from "@/components/Testimonies";

function Home() {
  return (
    <>
      <NavBar />
      <GetKnownAVGI />
      <WIsAVGI />
      <WhoMakesAVGI />
      <Numbers />
      <Metrics />
      <Services />
      <OurWork />
      <Testimonies />
      <h1>CTA</h1>
    </>
  );
}

export default Home;
