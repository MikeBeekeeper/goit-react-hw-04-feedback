import PropTypes from 'prop-types';
import css from '../notification/Notification.module.css';
const Notification = ({ message }) => {
  return <p className={css.notificationMessage}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
