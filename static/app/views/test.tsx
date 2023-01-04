import {Fragment} from 'react';

function Test(props) {
  return (
    <Fragment>
      <p>Test</p>
      <p>{props.children}</p>
    </Fragment>
  );
}

export default Test;
