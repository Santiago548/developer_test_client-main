import React from "react";
import { Simulate } from "react-dom/test-utils";
import { useState } from "react";
import { fetchFilmsJson } from "../../api/FilmIndex";
import { FilmType } from "../../types";
import Film from "./Film";

function Films() {
  const [film, setFilm] = React.useState<FilmType | null>(null);

  React.useEffect(() => {
    fetchFilmsJson<{ results: FilmType }>("1")
    .then((FilmResponse) =>
      console.log('hi')
    );
  }, []);

  return (
    <div>
      {/* {film.map((Film) => ( */}
      {film && <Film film={film} />}
      {/* ))} */}
    </div>
  );
}

export default Films;
