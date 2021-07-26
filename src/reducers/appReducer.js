import {DEPOSIT} from "../constants/types"

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
  withdrawals:[],
  alert: "",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return{
        ...state,
        deposits:[...state, action.payload]
      }
    default:
      return state;
  }
};

export default appReducer;
