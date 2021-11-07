import { FilmType, PersonType } from "../../types";

interface FilmProps {
  filmTitle: FilmType;
}

function Film({ filmTitle }:FilmProps) {
  return (
    <div>
      <fieldset className="fieldsetInfo">
        <legend className="legend">Films</legend>
        <br />
        {filmTitle}
      </fieldset>
    </div>
  );
}

export default Film;
