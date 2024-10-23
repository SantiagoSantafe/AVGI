import "../../styles/WoWeAre/Phrase.css"
import { useOnScreen } from "../UseOnScreen";

function Phrase() {
    const { ref, isIntersecting } = useOnScreen({ threshold: 0.1 });
    return (
        <div className="phrase" ref={ref}
        style={{
          opacity: isIntersecting ? 1 : 0,
          transform: isIntersecting ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s ease-out",
        }}>
            <img src="Phrase.png" className="phrase-img"></img>
            <img src="Phrase Mobile.png" className="phrase-img-mobile"></img>
        </div>
    );
}

export default Phrase;