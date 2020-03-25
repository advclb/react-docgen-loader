import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * General component description.
 */
class MyComponent extends Component {
  render() {
    return <div></div>;
  }
}

MyComponent.propTypes = {
  /**
   * Description of prop "foo".
   */
  foo: PropTypes.number.isRequired,
  /**
   * Description of prop "bar" (a custom validation function).
   */
  bar: function (props, propName, componentName) {
    return props + propName + componentName;
  },
  baz: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

MyComponent.defaultProps = {
  bar: 21,
};

export default MyComponent;
