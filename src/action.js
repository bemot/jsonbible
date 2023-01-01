import axios from "axios";
import BIBLE from "./constants";

export const requestBibles = () => async (dispatch) => {
  dispatch({
    type: BIBLE.LOAD,
  });
  try {
    const json = await axios.get("kjogrs.json");
    console.log(json.data);
    dispatch({
      type: BIBLE.LOAD_SUCCESS,
      biblesData: json.data.bibles,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: BIBLE.LOAD_SUCCESS,
      biblesData: [],
      isError: true,
    });
  }
};

