import React, { useState } from "react";
import PropTypes from "prop-types";
import { usesAvailableLetters, scoreWord } from "../adagrams";

const Input = ({ setWord, setAnagrams, anagrams, hand }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = scoreWord(input);
    const newAnagramsData = { ...anagrams, [input.toUpperCase()]: `${score}` };
    if (usesAvailableLetters(input, hand)) {
      setAnagrams(newAnagramsData);
      setInput("");
    } else {
      console.log("Use available letters!");
      setInput("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

Input.propTypes = {};

export default Input;
