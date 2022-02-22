import React from 'react';
import Button from '@material-ui/core/Button';

// eslint-disable-next-line react/prop-types
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
