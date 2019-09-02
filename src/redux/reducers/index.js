//REDUCERS
import * as ct from "../constants";

const rootReducer = (state = {currentSection: "0"}, action) => {
  if (action.type === ct.SHOW_SIDEBAR) {
    return { ...state, sidebarActive: action.data };
  }
  if (action.type === ct.SET_CONFIGURATION) {
    return { ...state, configuration: action.data };
  }
  if (action.type === ct.SET_ARTICLES) {
    return { ...state, articles: action.data };
  }
  if (action.type === ct.SET_CURRENT_SECTION) {
    return { ...state, currentSection: action.data };
  }
  if (action.type === ct.SET_POLITICS) {
    return { ...state, politics: action.data };
  }
  return state;
};

export default rootReducer;
