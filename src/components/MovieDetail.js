import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieDetail({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <h4>
        <Link to='/'>go back to list</Link>
      </h4>
      <img
        src={coverImg}
        alt='title'
      />

      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetail;

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
