import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { primaryColor, componentColor } from '../../style/const';
import React from 'react';

export const Btn = ({ onPress, text }) => (
  <Button
    variant="contained"
    size="medium"
    style={{
      backgroundColor: primaryColor,
      color: componentColor,
      fontWeight: 500,
    }}
    onClick={onPress}
  >
    {text}
  </Button>
);

Btn.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};
Btn.defaultProps = {
  onPress: () => {},
  text: 'Ok',
};
