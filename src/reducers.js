const initialState = {
  count: 0,
  color: "#fff",
}

export const rootReducer = (state = initialState, action) =>{
  switch(action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + action.amount
      }
    case "DECREMENT_COUNT":
      return {
        ...state,
        count: state.count - action.amount
      }
    case "RESET_COUNT":
      return {
        ...state,
        count: 0
      }
    case "SET_COLOR":
      return {
        ...state,
        color: action.color
      }
    default:
      return state;
  }
}