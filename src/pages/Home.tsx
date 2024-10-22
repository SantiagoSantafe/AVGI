import NavBar from "@/components/Home/NavBar";
import GetKnownAVGI from "@/components/Home/GetKnownAVGI";
import WIsAVGI from "@/components/Home/WIsAVGI";
import WhoMakesAVGI from "@/components/Home/WhoMakesAVGI";
import Numbers from "@/components/Home/Numbers";
import Metrics from "@/components/Home/Metrics";
import Services from "@/components/Home/Services";
import OurWork from "@/components/Home/OurWork";
import Testimonies from "@/components/Home/Testimonies";
import CTA from "@/components/Home/CTA";
import Footer from "@/components/Home/Footer";

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
      <Footer />
    </>
  );
}

export default Home;
