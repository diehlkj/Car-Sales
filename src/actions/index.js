export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = feature => {
  console.log("src/actions/index.js > addFeature: ", feature);
  return {
    type: ADD_FEATURE,
    payload: feature
  };
};

export const removeFeature = feature => {
    console.log("src/actions/index.js > removeFeature: ", feature);
  return {
    type: REMOVE_FEATURE,
    payload: feature
  };
};
