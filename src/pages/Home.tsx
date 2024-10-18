import NavBar from "@/components/NavBar";
import "../styles/Home.css";
import GetKnownAVGI from "@/components/GetKnownAVGI";
import WIsAVGI from "@/components/WIsAVGI";
import WhoMakesAVGI from "@/components/WhoMakesAVGI";

function Home() {
  return (
    <>
      <NavBar />
      <GetKnownAVGI />
      <WIsAVGI/>
      <WhoMakesAVGI />
      <h1>Numbers</h1>
    </>
  );
}

export default Home;
