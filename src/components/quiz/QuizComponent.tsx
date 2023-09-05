import React, { useState, useEffect } from 'react';

//hooks
import { useGetCountries } from '../../hooks/useGetCountries';

//helper
import { questionGenerator } from '../../helper/questions-helper';

//css
import './quiz.css';

//interfaces
import { ISelectedOption, IData, IQuizComponent } from '../../interfaces/interfaces';
import Loading from '../loading/Loading';

const QuizComponent: React.FC<IQuizComponent> = ({ info, setCounter, counter }) => {
  const [data, setData] = useState<IData>({
    capital: '',
    options: [],
    correctAnswerCode: '',
  });

  const { countries, handleGetCountries, loading } = useGetCountries();
  const [selectedOption, setSelectedOption] = useState<ISelectedOption>({
    country: '',
    code: '',
  });

  useEffect(() => {
    handleGetCountries();
  }, [handleGetCountries]);

  useEffect(() => {
    if (countries && countries.length > 0) setData(questionGenerator(countries));
  }, [countries]);

  const { capital, options, correctAnswerCode } = data;
  const letters = ['A', 'B', 'C', 'D'];

  const handleSelectAnswer = (country: string, letter: string) => {
    setSelectedOption({ country, code: letter });
  };

  const handleNextQuestion = () => {
    handleGetCountries();
    setSelectedOption({ country: '', code: '' });
    setCounter((counter) => counter + 1);
  };

  const { numberOfQuestions } = info;

  return (
    <div className="page__body">
      {loading ? (
        <Loading />
      ) : (
        <>
          <p className="page__body__question">{capital} is the capital of</p>

          <div className="page__body__answer__container">
            {options.map((country: string, index: number) => {
              const correctAnswer = (selectedOption.code === correctAnswerCode && correctAnswerCode === letters[index]) || letters[index] === correctAnswerCode;
              const incorrectAnswer = selectedOption.code !== correctAnswerCode && selectedOption.code === letters[index];
              return (
                <div
                  className={`page__body__answer__div ${selectedOption.code ? (correctAnswer ? 'right__answer' : incorrectAnswer ? 'wrong__answer' : '') : ''}`}
                  onClick={() => !selectedOption.code && handleSelectAnswer(country, letters[index])}
                >
                  <p className={`page__body__answer__text letter ${selectedOption.code && (correctAnswer || incorrectAnswer) ? 'selected__text__color' : ''}`}>{letters[index]}</p>

                  <p className={`page__body__answer__text ${selectedOption.code && (correctAnswer || incorrectAnswer) ? 'selected__text__color' : ''}`}>{country}</p>
                </div>
              );
            })}

            <div className="page__body__answer__bottom__container">
              <p className="page__body__answer__bottom__counter">
                {counter}/{numberOfQuestions}
              </p>
              {selectedOption.code && (
                <div className="page__body__answer__next__container" onClick={() => handleNextQuestion()}>
                  <div className="page__body__answer__next">
                    <p className="page__body__answer__next__text">Next</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizComponent;
