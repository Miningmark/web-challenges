import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton({ id, onIsFavorite, isFavorite }) {
  return (
    <button
      className="favorite-button"
      onClick={(event) => {
        onIsFavorite(id);
        console.log(event);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
