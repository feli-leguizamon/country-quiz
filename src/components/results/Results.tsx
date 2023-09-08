import React from 'react';

//css
import './results.css';
import '../quiz/quiz.css';

//assets
import winners from '../../assets/winners.svg';

//interfaces
import { IResults } from '../../interfaces/interfaces';

const Results: React.FC<IResults> = ({ correctAnswersCounter, info, setInfo, setCorrectAnswersCounter, setCounter }) => {
  const { numberOfQuestions } = info;

  const handleTryAgain = () => {
    setInfo({ begin: false, numberOfQuestions: 4 });
    setCorrectAnswersCounter(() => 0);
    setCounter(() => 0);
  };
  return (
    <div className="page__body">
      <div className="results__container">
        <div className="results__first__child">
          <img src={winners} alt="world-map" className="results__image rubberband" />
          <p className="results__title">RESULTS</p>
          <p className="results__text">
            You got{' '}
            <span>
              {correctAnswersCounter}/{numberOfQuestions}
            </span>{' '}
            correct answers
          </p>
        </div>

        <button className="try__again__button bold" onClick={handleTryAgain}>
          TRY AGAIN
        </button>
      </div>
    </div>
  );
};

export default Results;
