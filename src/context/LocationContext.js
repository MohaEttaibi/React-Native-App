import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRecording = (dispatch) => async () => {};
const stopRecording = (dispatch) => async () => {};
const addLocation = (dispatch) => (location) => {
  dispatch({ type: "add_current_location", payload: location });
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);
