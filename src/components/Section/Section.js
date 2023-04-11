import PropTypes from 'prop-types';
import css from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <b className={css.title}>{title}</b>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
