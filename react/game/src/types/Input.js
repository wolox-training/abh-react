import PropTypes from 'prop-types';

const types = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  meta: PropTypes.shape({ error: PropTypes.string, active: PropTypes.bool, touched: PropTypes.bool })
    .isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string
};

export default types;
