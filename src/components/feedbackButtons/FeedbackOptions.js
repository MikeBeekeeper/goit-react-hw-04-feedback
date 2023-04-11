import css from '../feedbackButtons/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <ul className={css.buttonWrapper}>
      {options.map((el, index) => (
        <li key={index}>
          <button
            type="button"
            className={css.button}
            onClick={handleClick}
            name={el}
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
