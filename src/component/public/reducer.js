// Define the initial state for the counter
const initialState = {
    value: 0,
  };
  
  // Define a reducer function to handle state changes
  const counterIncrement = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, value: state.value + 1 };
      case "REDUCTION":
       return state.value === 0 ? state : { ...state, value: state.value - 1 };
      default:
        return state;
    }
  };

  export default counterIncrement;