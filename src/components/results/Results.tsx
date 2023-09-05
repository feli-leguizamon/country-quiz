import React from 'react';

//css
import './results.css';
import '../quiz/quiz.css';

//assets
import winners from '../../assets/winners.svg';

const Results = () => {
  return (
    <div className="page__body">
      <div className="results__container">
        <div className="results__first__child">
          <img src={winners} alt="world-map" className="results__image rubberband" />
          <p className="results__title">RESULTS</p>
          <p className="results__text">You got 0/4 correct answers</p>
        </div>

        <button className="try__again__button bold">TRY AGAIN</button>
      </div>
    </div>
  );
};

export default Results;
