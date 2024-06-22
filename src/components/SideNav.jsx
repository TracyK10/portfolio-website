import Tab from "react-bootstrap/Tab";
import { Image } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function SideNav({ project, eventKey }) {
  // eslint-disable-next-line react/prop-types
  const { title, description, image, link } = project;

  return (
    <Tab.Pane eventKey={eventKey}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Image
        src={image}
        alt={title}
        className="w-100 h-96 object-contain rounded-lg"
      />
      <div className="flex justify-center mt-4">
        {" "}
        {/* Center the button */}
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="py-2 px-4 mb-4">
            View Project
          </button>{" "}
          {/* Added padding and background color */}
        </a>
      </div>
    </Tab.Pane>
  );
}

export default SideNav;
