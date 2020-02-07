import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions";

const AdditionalFeature = props => {

  const handleAdd = e => {
    e.preventDefault();
    props.addFeature(props.feature);
  }

  return (
    <li>
      <button onClick={handleAdd} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapStateToProps = state => {
  return {
    // car: state.car
  };
};

export default connect(
  mapStateToProps,
  {
    addFeature
  }
)(AdditionalFeature);
