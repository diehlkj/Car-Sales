import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions";

const AddedFeature = props => {
  
  const handleRemove = e => {
    e.preventDefault();
    props.removeFeature(props.feature);
  }

  return (
    <li>
      <button onClick={handleRemove} className="button">X</button>
      {props.feature.name}
    </li>
  );
};


const mapStateToProps = state => {
  return {
    // feature: state.car.features
  };
};

export default connect(
  mapStateToProps,
  {
    removeFeature
  }
)(AddedFeature);
