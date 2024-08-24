import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovie] = useState(null);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading Details...</h1>
      ) : (
        movieInfo && (
          <MovieDetail
            id={movieInfo.id}
            coverImg={movieInfo.medium_cover_image}
            title={movieInfo.title}
            summary={movieInfo.summary}
            genres={movieInfo.genres}
          />
        )
      )}
    </div>
  );
}

export default Detail;
