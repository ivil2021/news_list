import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

function ButtonComponent({ text }) {
  return (
    <div>
      <Button variant="contained" color="primary">
        {text}
      </Button>
    </div>
  );
}

export default ButtonComponent;

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
};
