import { getAll } from "@divyanshu013/inspirational-quotes";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const quotesData = getAll();
    setQuotes(quotesData);
  }, []);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  const currentQuote = quotes.length > 0 ? quotes[currentIndex] : null;

  const backgroundColors = ["#8c084", "#b7ebc3", "#ffb37e", "#7fa8d7"];

  const currentBackgroundColor =
    backgroundColors[currentIndex % backgroundColors.length];

  return (
    <div className="content" style={{ background: currentBackgroundColor }}>
      <h1 id="id">Inspiraion Quote Generator</h1>

      {currentQuote && (
        <blockquote>
          <p>"{currentQuote.quote}"</p>
        </blockquote>
      )}

      {currentQuote && <h2>{currentQuote.author}</h2>}
      {currentQuote && <h2>{currentQuote.source}</h2>}

      <div className="button-container">
        <button onClick={handlePreviousClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
        <button
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
            )
          }
        >
          Share on Facebook
        </button>
      </div>
    </div>
  );
}

export default App;
