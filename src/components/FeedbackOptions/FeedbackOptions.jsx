import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={css.button_container}>
        {options.map((label) => {
          return (
            <button
              className={css.Feedback_button}
              key={shortid.generate()}
              onClick={() => onLeaveFeedback(label)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;