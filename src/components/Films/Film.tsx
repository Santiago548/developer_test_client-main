import { FilmType } from "../../types";

interface FilmProps {
  film: FilmType;
}

function Film({ film }: FilmProps) {
  return (
    <div>
      <fieldset className="fieldsetInfo">
        <legend className="legend">Films</legend>
        {film}
        <br />
      </fieldset>
    </div>
  );
}

export default Film;
