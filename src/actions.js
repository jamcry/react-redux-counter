export const incrementCount = (amount) => {
  return {
    type: "INCREMENT_COUNT", amount
  }
};

export const decrementCount = (amount) => {
  return {
    type: "DECREMENT_COUNT", amount
  }
}

export const resetCount = () => {
  return {
    type: "RESET_COUNT"
  }
}

export const setColor = (color) => {
  return {
    type: "SET_COLOR", color
  }
}
