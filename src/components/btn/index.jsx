import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { primaryColor, componentColor } from '../../style/const';

export const Btn = ({ onPress, text }) => (
  <div>
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
  </div>
);

Btn.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};
Btn.defaultProps = {
  onPress: () => {},
  text: 'Ok',
};
