import * as React from 'react';
import {findDOMNode, render} from 'react-dom';
import * as PropTypes from 'prop-types';
import * as Reflux from 'reflux';

const globals = {
  PropTypes,
  React,
  Reflux,
  ReactDOM: {findDOMNode, render},
};

Object.keys(globals).forEach(name => (window[name] = globals[name]));

export default globals;
