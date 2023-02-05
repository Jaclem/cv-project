import "./Resume.css";
import images from "../../images/placeholder-img.jpg";

function Header(props) {
  return (
    <header className="header">
      <h1 className="header--name">
        {props.firstName} {props.lastName}
      </h1>

      <img src={images} className="header--image" />

      <h4 className="header--title">{props.title}</h4>
    </header>
  );
}

export default Header;
