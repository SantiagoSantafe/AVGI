import "../styles/Numbers.css";
import { useEffect, useRef } from "react";

function Numbers() {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    elementsRef.current.forEach((element) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="numbers-container">
      <div className="numbers-grid">
        <div
          className="numbers-title animate-element"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          Numbers that showcase our{" "}
          <span className="gradient-text">SUCCESS</span>
        </div>

        <div
          className="card-container animate-element"
          ref={(el) => (elementsRef.current[1] = el)}
        >
          <div className="card gradient-shadow-bottom">
            <div className="card-connector-top"></div>
            <div className="card-number">100%</div>
            <div className="card-text">Successful transformations</div>
            <div className="card-description">
              We successfully transform 100% of our clients' business operations
              and strategies, generating significant improvements in their
              utility and profitability.
            </div>
          </div>
          <div className="card-connector1"></div>
        </div>

        <div
          className="card-container animate-element"
          ref={(el) => (elementsRef.current[2] = el)}
        >
          <div className="card gradient-shadow-top">
            <div className="card-number">90%</div>
            <div className="card-text">Active Clients</div>
            <div className="card-description">
              Our ability to build long-lasting relationships and deliver
              continuous results allows us to maintain a close relationship with
              90% of our active clients.
            </div>
          </div>
          <div className="card-connector"></div>
        </div>

        <div
          className="card-container animate-element"
          ref={(el) => (elementsRef.current[3] = el)}
        >
          <div className="card gradient-shadow-left">
            <div className="card-number">1</div>
            <div className="card-text">
              The only Latin firm with a global focus
            </div>
            <div className="card-description">
              We are currently the only Latin American consulting firm with a
              presence in different countries, which allows us to offer a
              global, adaptive and cutting-edge approach.
            </div>
          </div>
          <div className="card-connector"></div>
        </div>

        <div
          className="card-container animate-element"
          ref={(el) => (elementsRef.current[4] = el)}
        >
          <div className="card gradient-shadow-left-top">
            <div className="card-number">80%</div>
            <div className="card-text">Operational efficency</div>
            <div className="card-description">
              By implementing our customized solutions, our clients increase
              their operational efficiency by an average of 80%.
            </div>
          </div>
          <div className="card-connector"></div>
          <div className="card-connector-bottom"></div>
        </div>

        <div
          className="numbers-desc animate-element"
          ref={(el) => (elementsRef.current[5] = el)}
        >
          Our balanced combination of{" "}
          <span className="gradient-text">Experience Innovation</span> and{" "}
          <span className="gradient-text">Productivity</span> is what has
          allowed us to make a real difference in every project we undertake.
        </div>
      </div>
    </div>
  );
}

export default Numbers;
