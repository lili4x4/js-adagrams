import React, { useState } from "react";
import "./App.css";
import LetterScores from "./components/LetterScores";
import DrawButton from "./components/DrawButton";
import { availableLetters } from "./adagrams.js";
import Input from "./components/Input";
import Anagrams from "./components/Anagrams";

function App() {
  const [hand, setHand] = useState([]);
  const [handDisplay, setHandDisplay] = useState("");
  const [word, setWord] = useState("");
  const [anagrams, setAnagrams] = useState({});

  return (
    <div className="App">
      <section id="main">
        <h1 id="title">Anagrams Game</h1>
        <h2 id="hand">{hand}</h2>
        <h3>Write an anagram:</h3>
        <Input
          setWord={setWord}
          setAnagrams={setAnagrams}
          anagrams={anagrams}
          hand={hand}
        />
        <section id="anagrams">
          <Anagrams anagrams={anagrams} setAnagrams={setAnagrams} word={word} />
        </section>
      </section>
      <section className="letter-scores">
        <LetterScores />
      </section>
      <DrawButton setHand={setHand} setHandDisplay={setHandDisplay} />
    </div>
  );
}

export default App;
