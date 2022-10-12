import { React, useState } from "react";
import axios from 'axios';
import validator from 'validator'


function UrlShortner() {
  const [userInput, setUserInput] = useState("");
  const [shortenedLink, setShortenedLink] = useState("")
  const [errorMessage, setErrorMessage] = useState('')

  const validate = (value) => {
    
    if (validator.isURL(value)) {
      fetchData();
    } else {
      setErrorMessage('Is Not Valid URL')
      return false
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className=" container h-screen flex justify-center items-center">
      <div className=" text-center">
        <h1 className=" text-2xl font-medium text-blue-500 mb-4">
          Our <span className=" text-yellow-400">URL Shortener</span>
        </h1>
        <div>
          <input className="outline-none border-2 border-blue-500 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3"
            type="text"
            placeholder="Enter link to be shortened"
            value={userInput}
            onChange={(e) => { setUserInput(e.target.value) }}
          />
          <button
            className=" bg-blue-500 text-white px-8 py-3 ml-4 rounded-md"
            onClick={() => {
              validate(userInput);
            }}
          >
            Submit URL
          </button>
          <div className="mt-5">
          {errorMessage}
          </div>
          <div className="mt-5">
            {shortenedLink}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UrlShortner