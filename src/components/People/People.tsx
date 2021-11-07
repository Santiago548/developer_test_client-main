import React from "react";
import { Simulate } from "react-dom/test-utils";
import { useState } from "react";
import { fetchJson } from "../../api";
import { fetchFilmsJson } from "../../api/FilmIndex";
import { PersonType, FilmType } from "../../types";
// import { FilmType } from "../../types";
import Person from "../Person";
import { promises } from "fs";

function People() {
  const [people, setPeople] = React.useState<PersonType[]>([]);
  const [filmTitles, setFilm] = React.useState<FilmType[]>([]);
  const [query, setQuery] = useState("");

  // React.useEffect(() => {
  //   fetchJson<{ results: PersonType[] }>("people")
  //   .then((peopleResponse) =>
  //     setPeople(peopleResponse.results)
  //     );
  // }, []);

  React.useEffect(() => {
    fetchJson<{ results: PersonType[] }>("people").then((peopleResponse) =>
      setPeople(peopleResponse.results)
    );
    fetchJson<{ results: PersonType[] }>("people")
      .then((peopleResponse) => peopleResponse.results)
      .then((peopleResponseJson) =>
        peopleResponseJson.forEach((person) =>
          Promise.all(person.films).then((filmsUrl) => {
            filmsUrl.map((film) =>
              fetchFilmsJson<{ results: FilmType[] }>(`${film}/`).then(
                (filmResponse) => {
                  let filmsTitle = filmResponse;
                  setFilm(filmsTitle.results);
                  // console.log(filmResponse)
                  // setFilm(filmResponse)
                }

                // console.log(filmResponse, "WE ARE IN THE FILM RESPONSE")
                // console.log(filmResponse, "film console log")
              )
            );
          })
        )
      );
  }, []);

  return (
    <div>
      <div className="searchContainer">
        <input
          className="searchInput"
          placeholder="Search By Name"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      {people
        .filter((person) => {
          if (query === "") {
            return person;
          } else if (person.name.toLowerCase().includes(query.toLowerCase())) {
            return person;
          }
        })
        .map((person) => (
          <div className="characterCardContainer">
            <fieldset className="fieldsetMain">
              <fieldset className="fieldsetInfo">
                <legend className="legend">{person.name}</legend>
                <b>HEIGHT:</b> {person.height}cm <br />
                <b>GENDER:</b> {person.gender}
                <br />
                <b>SPECIES:</b> {person.species}
                <br />
                <b>HAIR COLOR:</b> {person.hair_color}
                <br />
                <b>SKIN COLOR:</b> {person.skin_color}
                <br />
                <b>EYE COLOR:</b> {person.eye_color}
                <br />
                <b>MASS:</b> {person.mass}
         
                <br />
              </fieldset>
              <fieldset className="fieldsetInfo">
                <b>BIRTH YEAR:</b> {person.birth_year}
                <br />
                <b>HOMEWORLD:</b> {person.homeworld}
                <br />
              </fieldset>
              
                 <fieldset className="fieldsetInfo">
                 <legend className="legend">Films</legend>
                 <br />
                   {console.log(filmTitles.films)}
                   {/* {filmTitles} */}
                 <ul>
                 </ul>
                   {/* {films.map((film) => (
                     <li>{film}</li>
                   ))} */}
                 
               </fieldset>
            </fieldset>
            <br />
          </div>
          // <Person person={person} />
        ))}
    </div>
  );
}

export default People;
