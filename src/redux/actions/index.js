//ACTIONS
import * as ct from "../constants";
import { configuration, articles , politics} from "../../config";

export const showSidebar = data => {
  return {
    type: ct.SHOW_SIDEBAR,
    data
  };
};

export const getData = target => {
  console.log("*** fetching data ***");
  return dispatch => {
    let url = null;
    if (target === "configuration") {
      // url = "https://api.myjson.com/bins/148sa7"; //CUSTOM CONFIG
      url = "WRONG_URL_SAMPLE";
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(setData(data, target));
      })
      .catch(e => {
        if (target === "configuration") dispatch(setData(configuration, target));
        if (target === "articles") dispatch(setData(articles, target));
        if (target === "politics") dispatch(setData(politics, target));
      });
  };
};

export const setCurrentSection = data => {
  return {
    type: ct.SET_CURRENT_SECTION,
    data
  }
}
export const setData = (data, target) => {
  if (target === "configuration")
    return {
      type: ct.SET_CONFIGURATION,
      data
    };
  if (target === "articles")
    return {
      type: ct.SET_ARTICLES,
      data
    };
  if (target === "politics")
    return {
      type: ct.SET_POLITICS,
      data
    };
};
