import { CLEAR_ERROR, DEPOSIT, ERROR, WITHDRAW } from "../constants/types";
const initialState = {
  monetary: {
    maturity: 120030,
    stash: 0,
    worth: 400012,
    investment: 23000,
    savings: 7777,
  },
  balance: 6000,
  bank: "MakersValley",
  profile: [{ id: 1, username: "jideabdqudus", accountType: "savings" }],
  deposits: [
    {
      id: "1",
      depositor: "John Doe",
      amount: 300,
      type: "Current",
      recipient: "jideabdqudus",
      desc: "Buy Food",
    },
    {
      id: "2",
      depositor: "Jane Doe",
      amount: 60,
      type: "Savings",
      recipient: "jideabdqudus",
      desc: "Pay For Electricity",
    },
  ],
  withdrawals: [
    {
      id: "3",
      owner: "jideabdqudus",
      amount: 60,
      desc: "Pay For Electricity",
    },
  ],
  alert: "",
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return {
        ...state,
        deposits: [...state.deposits, action.payload],
        balance: state.balance + Number(action.payload.amount),
        monetary: {
          ...state.monetary,
          worth: state.monetary.worth + Number(action.payload.amount),
          savings: state.monetary.savings + Number(action.payload.amount),
        },
      };
    case WITHDRAW:
      return {
        ...state,
        withdrawals: [...state.withdrawals, action.payload],
        balance: state.balance - Number(action.payload.amount),
        monetary: {
          ...state.monetary,
          worth: state.monetary.worth - Number(action.payload.amount),
          savings: state.monetary.savings - Number(action.payload.amount),
        },
      };
    case ERROR:
      return {
        ...state,
        alert: "An error was encountered",
      };
    case CLEAR_ERROR:
      return {
        ...state,
        alert: "",
      };
    default:
      return state;
  }
};
export default appReducer;
