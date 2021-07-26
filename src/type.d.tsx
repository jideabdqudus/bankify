export interface IMonetary {
  maturity: number;
  stash: number;
  worth: number;
  savings: number;
  investment: number;
}

export interface IDepositData {
  depositor: string;
  amount: number;
  type: string;
  recipient: string;
  desc: string;
}

export interface IWithdrawData {
  id?: string | number;
  owner: string;
  amount: number;
  desc: string;
}

export interface IReducer {
  monetary?: IMonetary;
  balance: number;
  bank: string;
  profile: [];
  deposits?: [];
  withdrawals?: [];
  alert?: string;
}

export interface IApp {
  appReducer: IReducer;
}
