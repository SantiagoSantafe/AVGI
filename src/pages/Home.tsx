import { useState } from "react";
import NavBar from "@/components/NavBar";
import "../styles/Home.css";
import avgiGroup from "../../public/AVGI Group.png";
import bigLogo from "../../public/Big Logo.png";
import reducedLogo from "../../public/Reduced Logo.png";
import avgigroup from "../../public/Avgi GroUP (1).png";
import ThinkUp from "../../public/Think up solutions in your own way.png";

function Home() {
  const [currentImage, setCurrentImage] = useState(avgiGroup);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFourthLayout, setIsFourthLayout] = useState(false);
  const [isFinalTransition, setIsFinalTransition] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentImage(currentImage === avgiGroup ? bigLogo : avgiGroup);
      setIsTransitioning(false);

      if (currentImage === avgiGroup) {
        setTimeout(() => {
          setIsTransitioning(true);

          setTimeout(() => {
            setCurrentImage(reducedLogo);
            setIsTransitioning(false);

            setTimeout(() => {
              setIsTransitioning(true);

              setTimeout(() => {
                setIsFourthLayout(true);
                setIsTransitioning(false);

                setTimeout(() => {
                  setIsFinalTransition(true); 
                },); 

              }, 300);

            }, 1000);

          }, 300);

        }, 1000);
      }
    }, 300);
  };

  return (
    <>
      <NavBar />
      <div className="image-container">
        {isFourthLayout ? (
          <div className={`grid-container ${isFinalTransition ? 'fade-in' : ''}`}>
            <div className="grid-item large">
              <img src={reducedLogo} alt="Reduced Logo" />
            </div>
            <div className="grid-item small1">
              <img src={avgigroup} className="Image2" />
            </div>
            <div className="grid-item small">
              <img src={ThinkUp} className="Image2" />
            </div>
          </div>
        ) : (
          <img
            src={currentImage}
            alt="Logo"
            width={1100}
            onClick={handleClick}
            className={`transition-image ${isTransitioning ? 'fade' : ''} ${currentImage === bigLogo ? 'bigLogo' : ''} ${currentImage === reducedLogo ? 'reducedLogo' : ''}`}
          />
        )}
      </div>
    </>
  );
}

export default Home;
