import React from "react";
import { Simulate } from "react-dom/test-utils";
import { useState } from "react";
import { fetchJson } from "../../api";
import { PersonType } from "../../types";
import Person from "../Person";

function People() {
  const [people, setPeople] = React.useState<PersonType[]>([]);
  const [query, setQuery] = useState(""); 

  // React.useEffect(() => {
  //   fetchJson<{ results: PersonType[] }>("people")
  //   .then((peopleResponse) =>
  //     setPeople(peopleResponse.results)
  //     );
  // }, []);


  React.useEffect(() => {
    fetchJson<{ results: PersonType[] }>("people")
    .then(function (peopleResponse) {
      let peopleMovies = peopleResponse.results.forEach(person => person.films)
      setPeople(peopleResponse.results)
      console.log(peopleMovies)
      // return Promise.all()
    }
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
          <Person person={person} />
          ))}
    </div>
  );
}

export default People;
