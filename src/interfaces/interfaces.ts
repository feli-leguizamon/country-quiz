export interface IInfo {
  numberOfQuestions: number;
  begin: boolean;
}

export interface IWelcomeComponent {
  setInfo: React.Dispatch<React.SetStateAction<IInfo>>;
}

export interface IData {
  capital: string;
  options: string[];
  correctAnswerCode: string;
}

export interface ISelectedOption {
  country: string;
  code: string;
}
export interface IQuizComponent {
  info: IInfo;
  setCounter: (updateFunction: (counter: number) => number) => void;
  setCorrectAnswersCounter: (updateFunction: (counter: number) => number) => void;
  counter: number;
}

export interface IResults {
  correctAnswersCounter: number;
  info: IInfo;
  setInfo: React.Dispatch<React.SetStateAction<IInfo>>;
  setCorrectAnswersCounter: (updateFunction: (counter: number) => number) => void;
  setCounter: (updateFunction: (counter: number) => number) => void;
}
