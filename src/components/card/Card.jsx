import StarOutline from "@mui/icons-material/StarOutline";
import "./Card.css";

const Card = ({ superHost = false, title, info, rating, photo }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={photo} alt="picture" className="image" />
      </div>
      <div className="about-container">
        <div>
          {superHost ? (
            <button className="superHost-button">superHost</button>
          ) : null}
          <span className="info">{info}</span>
        </div>
        <div className="rating-container">
          <span className="material-icons star">
            <StarOutline fontSize="small" />
          </span>
          <span className="rating">{rating}</span>
        </div>
        <p className="title">{title}</p>
      </div>
    </div>
  );
};

export default Card;
