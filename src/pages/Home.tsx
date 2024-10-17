import NavBar from "@/components/NavBar";
import "../styles/Home.css";
import GetKnownAVGI from "@/components/GetKnownAVGI";
import WIsAVGI from "@/components/WIsAVGI";

function Home() {
  return (
    <>
      <NavBar />
      <GetKnownAVGI />
      <WIsAVGI/>
      <h1>Who makes up AVGI</h1>
    </>
  );
}

export default Home;
