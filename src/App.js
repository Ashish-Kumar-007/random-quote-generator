import React, { useEffect, useState } from "react";
import { generateRandomQuote } from "./generateRandomQuote";
import Card from "./Card";

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-purple-400">
      <Card quote={quote} generateNewQuote={generateNewQuote} />
    </div>
  );
};

export default App;
