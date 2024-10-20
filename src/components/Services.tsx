import { useState } from "react";
import "../styles/Services.css";

interface ServiceData {
  id: number;
  image: string;
  title: string;
  description: string;
}

function Services(): JSX.Element {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isGridVisible, setIsGridVisible] = useState(true);
  const [isDetailedVisible, setIsDetailedVisible] = useState(false);
  const [expandedMobileCard, setExpandedMobileCard] = useState<number | null>(null);
  const [isCollapsing, setIsCollapsing] = useState(false);

  const servicesData: ServiceData[] = [
    {
      id: 1,
      image: "/photo1-services.png",
      title: "On-site Strategic Consulting",
      description:
        "We understand that no matter how long we have been in the market, there will always be something new to implement for our businesses. That is why we design customized solutions to boost the growth and sustainability of your company.",
    },
    {
      id: 2,
      image: "/photo2-services.png",
      title: "Digital Networking",
      description:
        "We truly believe that if we start out alone we will quickly meet our goals, but with strategic support we will make them last over time. That is why we integrate cutting-edge technology with the help of our group of experts to allow you to have more efficient, competitive and reliable business relationships.",
    },
    {
      id: 3,
      image: "/photo3-services.png",
      title: "Training for New Entrepreneurs",
      description:
        "We have discovered that fear can be paralyzing or reactive, but something we are very clear about is that knowledge is liberating. With that premise in mind we developed the best starter kit for entrepreneurs in training who want to stop dreaming and start becoming successful people.",
    },
  ];

  const handleCardClick = async (id: number): Promise<void> => {
    if (window.innerWidth <= 800) {
      if (expandedMobileCard === id) {
        setIsCollapsing(true);
        setTimeout(() => {
          setExpandedMobileCard(null);
          setIsCollapsing(false);
        }, 100); 
      } else {
        setIsCollapsing(false);
        setExpandedMobileCard(id);
      }
    } else {
      setIsGridVisible(false);
      await new Promise(resolve => setTimeout(resolve, 200));
      setSelectedCard(id);
      setIsDetailedVisible(true);
    }
  };

  const handleBack = async (): Promise<void> => {
    setIsDetailedVisible(false);
    await new Promise(resolve => setTimeout(resolve, 200));
    setSelectedCard(null);
    setIsGridVisible(true);
  };

  return (
    <div className="services">
      <div
        className={`services-grid ${!isGridVisible ? "fade-out-services" : "fade-in-services"}`}
      >
        <div className="services-title">
          Our <span className="gradient-text-services">SERVICES</span>
        </div>
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`cardS ${expandedMobileCard === service.id ? 'expanded' : ''} ${isCollapsing && expandedMobileCard === service.id ? 'collapsing' : ''}`}
            onClick={() => handleCardClick(service.id)}
          >
            <img
              src={service.image}
              className="photos-services"
              alt={service.title}
            />
            <div className="overlay-text">{service.title}</div>
            <div className="mobile-service-details">
              <h3 className="mobile-service-title">{service.title}</h3>
              <p className="mobile-service-description">{service.description}</p>
            </div>
          </div>
        ))}
        <div className="services-description">
          We offer the following services for your convenience: On-site
          Strategic Consulting, Digital Networking and Training for New
          Entrepreneurs.
        </div>
        <div className="services-description">
          Click an image to find out more
        </div>
      </div>

      {selectedCard && window.innerWidth > 800 && (
        <div
          className={`services-detailed ${
            isDetailedVisible ? "fade-in-services" : "fade-out-services"
          }`}
          onClick={handleBack}
          style={{ cursor: "pointer" }}
        >
          <div className="detailed-content">
            <div className="detailed-title">
              Our <span className="gradient-text-services">SERVICES</span>
            </div>
            <div className="service-info">
              <h2 className="service-subtitle">
                {servicesData.find((s) => s.id === selectedCard)?.title}
              </h2>
              <p className="service-description">
                {servicesData.find((s) => s.id === selectedCard)?.description}
              </p>
            </div>
          </div>
          <div className="detailed-image">
            <img
              src={servicesData.find((s) => s.id === selectedCard)?.image}
              alt={servicesData.find((s) => s.id === selectedCard)?.title}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;