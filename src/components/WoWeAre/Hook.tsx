import { useEffect } from "react";
import "../../styles/WoWeAre/Hook.css";

function Hook() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-element-hook');
    
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('fade-in');
      }, 200 + (index * 800)); 
    });
  }, []);

  return (
    <div className="hook">
      <img src="/Hook.png" className="back-img" alt="Background" />
      <img src="/Hook mobile.png" className="back-img-mobile" alt="Mobile Background" />
      <div className="hook-content">
        <div className="hook-title1 animate-element-hook">
          We are the largest<br/>Latin American 
        </div>
        <div className="hook-title2 animate-element-hook">
          <span className="gradient-text-hook">BUSINESS CONSULTING</span><br/>firm in the world!
        </div>
      </div>
    </div>
  );
}

export default Hook;