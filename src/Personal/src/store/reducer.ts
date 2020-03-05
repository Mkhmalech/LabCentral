import { Action } from "redux";

const initialState: Personal = {
  firstName: "",
  lastName: ""
};

export const personalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
  }
};
