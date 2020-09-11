import { SET_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";
//VISIBILITY_FILTERS = { ALL: "all", COMPLETED: "completed", INCOMPLETE: "incomplete" }

const initialState = VISIBILITY_FILTERS.ALL;

//educer sets its slice of store to the new filter 
//it receives from the SET_FILTER action payload
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter; //set filter
    }
    default: {
      return state; //set back the value
    }
  }
};

export default visibilityFilter;
