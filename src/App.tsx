import { useState } from 'react';

//css
import './App.css';

//assets
import undraw_adventure from './assets/undraw-adventure.svg';

//components
import Results from './components/results/Results';
import QuizComponent from './components/quiz/QuizComponent';
import WelcomeComponent from './components/welcome/WelcomeComponent';

//interfaces
import { IInfo } from './interfaces/interfaces';

function App() {
  const [counter, setCounter] = useState<number>(1);
  const [correctAnswersCounter, setCorrectAnswersCounter] = useState<number>(0);
  const [info, setInfo] = useState<IInfo>({ numberOfQuestions: 4, begin: false });

  const { numberOfQuestions, begin } = info;

  const handleRedirect = () => {
    window.open('https://www.linkedin.com/in/feli-leguizamon/', '_blank');
  };

  return (
    <div className="page">
      <div>
        <div className="page__header">
          <div className="page__header__content">
            <p className="page__header__title">COUNTRY QUIZ</p>
            {begin && counter !== numberOfQuestions && <img className="page__header__icon" src={undraw_adventure} alt="undraw-adventure" />}
          </div>
        </div>

        {begin && counter - 1  !== numberOfQuestions && <QuizComponent info={info} setCounter={setCounter} counter={counter} setCorrectAnswersCounter={setCorrectAnswersCounter} />}

        {!begin && <WelcomeComponent setInfo={setInfo} />}

        {counter - 1 === numberOfQuestions && (
          <Results setCounter={setCounter} correctAnswersCounter={correctAnswersCounter} info={info} setInfo={setInfo} setCorrectAnswersCounter={setCorrectAnswersCounter} />
        )}

        <p className="page__footer__text">
          created by{' '}
          <span className="page__footer__username" onClick={handleRedirect}>
            Leguizamón Felicitas
          </span>
          - devChallenges.io
        </p>
      </div>
    </div>
  );
}

export default App;
