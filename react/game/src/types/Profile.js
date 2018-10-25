import PropTypes from 'prop-types';

const types = PropTypes.shape({
  firstName: PropTypes.string,
  id: PropTypes.number,
  lastName: PropTypes.string,
  age: PropTypes.string,
  aboutMe: PropTypes.string,
  profilePicture: PropTypes.string,
  backgroundPicture: PropTypes.string
});

export default types;
