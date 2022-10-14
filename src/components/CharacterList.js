import React from "react";
import CharacterItem from "./CharacterItem";

const CharacterList = ({characters}) => {

    const charactersItems = characters.map( (character, index) => {
      return <CharacterItem character={character} key={index} />
    });

  return (
    <div>{charactersItems}</div>
  );
};

export default CharacterList;