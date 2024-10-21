import "../styles/Home.css";
import NavBar from "@/components/NavBar";
import GetKnownAVGI from "@/components/GetKnownAVGI";
import WIsAVGI from "@/components/WIsAVGI";
import WhoMakesAVGI from "@/components/WhoMakesAVGI";
import Numbers from "@/components/Numbers";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import OurWork from "@/components/OurWork";
import Testimonies from "@/components/Testimonies";
import CTA from "@/components/CTA";

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
      <CTA />
      <h1>Footer</h1>
    </>
  );
}

export default Home;
