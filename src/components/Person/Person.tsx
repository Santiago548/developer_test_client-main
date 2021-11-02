import { PersonType } from "../../types";
import { useState } from "react";
interface PersonProps {
  person: PersonType;
}

function Person({ person }: PersonProps) {

  return (
    <div className="characterCardContainer">
      <fieldset className='fieldsetMain'>
        <fieldset className="fieldsetInfo">
          <legend className='legend'>{person.name}</legend>
          <b>HEIGHT:</b> {person.height}cm <br />
          <b>GENDER:</b> {person.gender}<br />
          <b>SPECIES:</b> {person.species}<br />
          <b>HAIR COLOR:</b> {person.hair_color}<br />
          <b>SKIN COLOR:</b> {person.skin_color}<br />
          <b>EYE COLOR:</b> {person.eye_color}<br />
          <b>MASS:</b> {person.mass}<br />
        </fieldset>
        <fieldset className="fieldsetInfo"> 
          <b>BIRTH YEAR:</b> {person.birth_year}<br />
          <b>HOMEWORLD:</b> {person.homeworld}<br />
          <b>FILMS:</b> <ul>{person.films}</ul> <br />
        </fieldset>
        <fieldset className="fieldsetInfo">
          <b>VEHICLES:</b> <ul>{person.vehicles}</ul><br />
          <b>STARSHIPS:</b> <ul>{person.starships}</ul><br />
        </fieldset>
      </fieldset> 
        <br />
   </div>
  );
}

export default Person;
