import BIBLES from "./constants";

const initalState = {
  biblesData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case BIBLES.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case BIBLES.LOAD_SUCCESS:
      return {
        ...state,
        biblesData: action.biblesData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
