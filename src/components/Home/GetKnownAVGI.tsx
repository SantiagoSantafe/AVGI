import { useState, useEffect } from "react";
import "../../styles/Home/GetKnownAVGI.css";
import avgiGroup from "/AVGI GROUP.png";
import bigLogo from "/Big Logo.png";
import reducedLogo from "/Reduced Logo.png";
import avgigroup from "/Avgi GroUP (1).png";
import ThinkUp from "/Think up solutions in your own way.png";

function GetKnownAVGI() {
  const [currentImage, setCurrentImage] = useState(avgiGroup);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFourthLayout, setIsFourthLayout] = useState(false);
  const [isFinalTransition, setIsFinalTransition] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth <= 900) {
        setIsFourthLayout(true);
        setIsFinalTransition(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) return;

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
                }, 100);
              }, 300);
            }, 1000);
          }, 300);
        }, 1000);
      }
    }, 300);
  };

  return (
    <div className="get-known-AVGI">
      <div className={`main-container ${isFourthLayout ? "last-frame" : ""}`}>
        <div className="image-container">
          {isFourthLayout ? (
            <div
              className={`grid-container ${isFinalTransition ? "fade-in" : ""}`}
            >
              <div className="grid-item large">
                <img src={reducedLogo} alt="Reduced Logo" />
              </div>
              <div className="grid-item small">
                <img src={avgigroup} className="Image1" alt="Avgi Group" />
              </div>
              <div className="grid-item small">
                <img src={ThinkUp} className="Image2" alt="Think Up" />
              </div>
            </div>
          ) : (
            <img
              src={currentImage}
              alt="Logo"
              onClick={handleClick}
              className={`transition-image ${isTransitioning ? "fade" : ""} ${
                currentImage === bigLogo ? "bigLogo" : ""
              } ${currentImage === reducedLogo ? "reducedLogo" : ""}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default GetKnownAVGI;