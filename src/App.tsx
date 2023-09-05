import { useState } from 'react';

//css
import './App.css';

//assets
import undraw_adventure from './assets/undraw-adventure.svg';

//components
import QuizComponent from './components/quiz/QuizComponent';
import WelcomeComponent from './components/welcome/WelcomeComponent';

//interfaces
import { IInfo } from './interfaces/interfaces';

function App() {
  const [info, setInfo] = useState<IInfo>({ numberOfQuestions: 4, begin: false });

  return (
    <div className="page">
      <div className="page__header">
        <div className="page__header__content">
          <p className="page__header__title">COUNTRY QUIZ</p>
          <img className="page__header__icon" src={undraw_adventure} alt="undraw-adventure" />
        </div>
      </div>

      {info.begin && <QuizComponent/>}

      {!info.begin && <WelcomeComponent setInfo={setInfo} />}

      <p className="page__footer__text">
        created by <span className="page__footer__username">Leguizamón Felicitas</span> - devChallenges.io
      </p>
    </div>
  );
}

export default App;
