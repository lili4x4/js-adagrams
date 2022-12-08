import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { usesAvailableLetters, scoreWord } from "../adagrams";

const Input = ({ setAnagrams, anagrams, hand, setErrorMessage }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    setErrorMessage("");
  };

  const validateWord = (word) => {
    return axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = scoreWord(input);
    const newAnagramsData = { ...anagrams, [input.toUpperCase()]: `${score}` };

    if (usesAvailableLetters(input, hand)) {
      validateWord(input).then((result) => {
        if (result === true) {
          setAnagrams(newAnagramsData);
        } else if (result === false) {
          setErrorMessage("Not a real word");
        } else {
          setErrorMessage("There was an error");
        }
      });
    } else {
      setErrorMessage("Use available letters!");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={input} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
};

Input.propTypes = {};

export default Input;
