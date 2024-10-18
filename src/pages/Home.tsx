import NavBar from "@/components/NavBar";
import "../styles/Home.css";
import GetKnownAVGI from "@/components/GetKnownAVGI";
import WIsAVGI from "@/components/WIsAVGI";
import WhoMakesAVGI from "@/components/WhoMakesAVGI";
import Numbers from "@/components/Numbers";

function Home() {
  return (
    <>
      <NavBar />
      <GetKnownAVGI />
      <WIsAVGI/>
      <WhoMakesAVGI />
      <Numbers />
      <h1>Metricas</h1>
    </>
  );
}

export default Home;
