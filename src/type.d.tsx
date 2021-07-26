export interface IMonetary {
  maturity: number;
  stash: number;
  worth: number;
  savings: number;
  investment: number;
}

export interface IReducer {
  monetary?: IMonetary;
  balance: number;
  bank: string;
  profile: [];
  deposits: [];
  withdrawals: [];
  alert?: string;
}

export interface IApp {
  appReducer: IReducer;
}
