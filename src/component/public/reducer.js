
const initialState = {
    value: 0,
  };
  
  const counterIncrement = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, value: state.value + 1 };
      case "REDUCTION":
       return state.value === 0 ? state : { ...state, value: state.value - 1 };
       case "RESET_COUNTER":
        return { ...state, value: 0 };
      default:
        return state;
    }
  };

  export default counterIncrement;