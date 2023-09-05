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
  const [counter, setCounter] = useState<number>(0);
  const [info, setInfo] = useState<IInfo>({ numberOfQuestions: 4, begin: false });

  const { numberOfQuestions, begin } = info;

  return (
    <div className="page">
      <div>
        <div className="page__header">
          <div className="page__header__content">
            <p className="page__header__title">COUNTRY QUIZ</p>
            {begin && counter !== numberOfQuestions && <img className="page__header__icon" src={undraw_adventure} alt="undraw-adventure" />}
          </div>
        </div>

        {begin && counter !== numberOfQuestions && <QuizComponent info={info} setCounter={setCounter} counter={counter} />}

        {!begin && <WelcomeComponent setInfo={setInfo} />}

        {counter === numberOfQuestions && <Results />}

        <p className="page__footer__text">
          created by <span className="page__footer__username">Leguizamón Felicitas</span> - devChallenges.io
        </p>
      </div>
    </div>
  );
}

export default App;
