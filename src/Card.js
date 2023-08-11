import React from "react";

const Card = ({ quote, generateNewQuote }) => (
  <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="px-6 py-4">
      <h1 className="text-4xl font-semibold mb-3">
        Soulful Quotes Generator
      </h1>
      <div className="border-t border-b w-20 border-gray-300 mx-auto"></div>

      {quote ? (
        <div className="text-center mt-4">
          <p className="text-lg">{quote.quote}</p>
          <p className="italic text-gray-600 mt-2">- {quote.author}</p>
        </div>
      ) : null}
    </div>

    <div className="px-6 py-4">
      <button
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={generateNewQuote}
      >
        New Quote
      </button>
    </div>
  </div>
);

export default Card;
