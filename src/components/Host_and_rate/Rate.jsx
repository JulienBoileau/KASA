import "./_Rate.css";
import fullStar from "../../assets/FULL_STAR.png";
import emptyStar from "../../assets/EMPTY_STAR.png";

function Rate(props) {
  const rating = props.rating;
  const stars = [1, 2, 3, 4, 5];
  
  return (
    <div className="rating">
      {stars.map((star) => rating >= star ? (
          <img key={star.toString()} className="star_item" src={fullStar} alt="étoile"/>
        ) : (
          <img key={star.toString()} className="star_item" src={emptyStar} alt="étoile"/>
        )
      )}
    </div>
  );
}

export default Rate;