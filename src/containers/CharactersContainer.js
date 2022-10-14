import React, {useState, useEffect} from "react";
import NameList from "../components/CharacterList";

const CharactersContainer = () => {

const [characters, setCharacters] = useState([]);

useEffect(() => {
    getCharacters();
}, [])

const getCharacters = function(){
    fetch("https://hp-api.herokuapp.com/api/characters")
    .then(res => res.json())
    .then(characters => setCharacters(characters))
}

return (
    <>
    <h1>Uh oh</h1>
    <p><NameList characters={characters}/></p>
    </>

)

}

export default CharactersContainer;