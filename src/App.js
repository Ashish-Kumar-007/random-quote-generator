import React, { useEffect, useState } from "react";
import { generateRandomQuote } from "./generateRandomQuote";

const App = () => {
  const [quote, setQuote] = useState();

  const generateNewQuote = () => {
    generateRandomQuote()
      .then((response) => {
        setQuote(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    generateRandomQuote()
      .then((response) => {
        setQuote(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2">Random Quote Generator</h1>
        <div className="border-t border-b w-20 mx-auto"></div>
      </div>
      {quote ? (
        <div className="text-center">
          <p className="text-xl font-semibold">{quote.quote}</p>
          <p className="italic text-gray-600 mt-2">- {quote.author}</p>
        </div>
      ) : null}

      <button
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={generateNewQuote}
      >
        New Quote
      </button>
    </div>
  );
};

export default App;
