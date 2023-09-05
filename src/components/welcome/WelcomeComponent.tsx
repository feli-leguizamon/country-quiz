import React, { ChangeEvent } from 'react';

//css
import './welcome.css';
import '../quiz/quiz.css';

//assets
import worldMap from '../../assets/world-map.svg';

//interfaces
import { IWelcomeComponent } from '../../interfaces/interfaces';

const WelcomeComponent: React.FC<IWelcomeComponent> = ({ setInfo }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInfo((info) => {
      return { ...info, numberOfQuestions: Number(e.target.value) };
    });
  };

  const options = [4, 8, 12];

  const handleBeginGame = () => {
    setInfo((info) => {
      return { ...info, begin: true };
    });
  };

  return (
    <div className="page__body">
      <div className="welcome__container">
        <p className="page__body__question">Welcome to Country Quiz!</p>
        <img src={worldMap} alt="world-map" className="welcome__world__map__image" />
        <p className="welcome__text">Answer 4, 8, or 12 geography-related questions. Test your knowledge of capitals and flags from countries around the world. Good luck!</p>

        <div className="welcome__select__container">
          <p className="welcome__text bold no-margin">Questions: </p>

          <select onChange={handleChange}>
            {options.map((item, key) => {
              return (
                <option key={key} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <button onClick={handleBeginGame} className="start__button bold">
          START
        </button>
      </div>
    </div>
  );
};

export default WelcomeComponent;
