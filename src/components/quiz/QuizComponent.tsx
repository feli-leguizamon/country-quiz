import React, { useState, useEffect } from 'react';

//hooks
import { useGetCountries } from '../../hooks/useGetCountries';

//helper
import { questionGenerator } from '../../helper/questions-helper';

//css
import  "./quiz.css"

interface IData {
  capital: string;
  options: string[];
  correctAnswerCode: string;
}

interface ISelectedOption {
  country: string;
  code: string;
}

const QuizComponent = () => {
  const [data, setData] = useState<IData>({
    capital: '',
    options: [],
    correctAnswerCode: '',
  });

  const { countries, handleGetCountries } = useGetCountries();
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
  };

  return (
    <div className="page__body">
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
        {/* unicamente cuando hay una opción seleccionada aparece el botón NEXT */}
        {selectedOption.code && (
          <div className="page__body__answer__next__container" onClick={() => handleNextQuestion()}>
            <div className="page__body__answer__next">
              <p className="page__body__answer__next__text">Next</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
