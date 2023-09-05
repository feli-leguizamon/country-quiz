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
