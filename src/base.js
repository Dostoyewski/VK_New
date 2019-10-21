import PropTypes from 'prop-types';

export const EventPropType = {
  title: PropTypes.node,
  cover: PropTypes.string,
  exp: PropTypes.node,
  where: PropTypes.node,
  description: PropTypes.string,
};

export const UserPropType = {
    id: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.number,
  };