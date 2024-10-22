import { useState } from "react";
import "../../styles/Home/WhoMakesAVGI.css";

type ContentKey =
  | "default"
  | "group1"
  | "group2"
  | "group3"
  | "group4"
  | "group5";

interface ContentItem {
  title: string;
  description: string;
  image: string;
}

const contentData: Record<ContentKey, ContentItem> = {
  default: {
    title: "AVGI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/Big Logo.png",
  },
  group1: {
    title: "Empresa 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/Big Logo.png",
  },
  group2: {
    title: "Empresa 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/Big Logo.png",
  },
  group3: {
    title: "AVGI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/Big Logo.png",
  },
  group4: {
    title: "Empresa 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/Big Logo.png",
  },
  group5: {
    title: "Empresa 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/Big Logo.png",
  },
};

function WhoMakesAVGI(): JSX.Element {
  const [activeContent, setActiveContent] = useState<ContentKey>("group3");

  const handleGridItemClick = (groupId: ContentKey): void => {
    setActiveContent(groupId);
  };

  return (
    <>
      <div className="who-makes-up-AVGI">
        <div className="who-makes-grid">
          <div className="grid-title">
            Who makes up <span className="gradient-text">AVGI</span>?
          </div>
          

          <div
            className="grid-itemE"
            onClick={() => handleGridItemClick("group1")}
          >
            <img
              src="/Group1.png"
              alt="Group 1"
              className={`logo-image ${
                activeContent === "group1" ? "active" : ""
              }`}
            />
          </div>
          <div
            className="grid-itemE"
            onClick={() => handleGridItemClick("group2")}
          >
            <img
              src="/Group2.png"
              alt="Group 2"
              className={`logo-image ${
                activeContent === "group2" ? "active" : ""
              }`}
            />
          </div>
          <div
            className="grid-itemE"
            onClick={() => handleGridItemClick("group3")}
          >
            <img
              src="/Reduced Logo.png"
              alt="Reduced Logo"
              className={`logo-image ${
                activeContent === "group3" ? "active" : ""
              }`}
            />
          </div>
          <div
            className="grid-itemE"
            onClick={() => handleGridItemClick("group4")}
          >
            <img
              src="/Group4.png"
              alt="Group 4"
              className={`logo-image ${
                activeContent === "group4" ? "active" : ""
              }`}
            />
          </div>
          <div
            className="grid-itemE"
            onClick={() => handleGridItemClick("group5")}
          >
            <img
              src="/Group5.png"
              alt="Group 5"
              className={`logo-image ${
                activeContent === "group5" ? "active" : ""
              }`}
            />
          </div>
        </div>

        <div className="descripcion-grid">
          <div className="grid-titleE">
            <h1 className="titulo-desc">{contentData[activeContent].title}</h1>
            <p className="description-paragraph">
              {contentData[activeContent].description}
            </p>
          </div>
          <div className="grid-imageE">
            <img
              src={contentData[activeContent].image}
              alt="Description Image"
              className="imageE"
            />
          </div>
        </div>
        <div className="linea"></div>
      </div>
      
    </>
  );
}

export default WhoMakesAVGI;
