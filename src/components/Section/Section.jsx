import React from 'react';
import PropTypes from 'prop-types';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';

const Section = ({ title, feedbackOptions, handleFeedback }) => {
  const countTotalFeedback = () => {
    return feedbackOptions.good + feedbackOptions.neutral + feedbackOptions.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedbackOptions.good * 100) / countTotalFeedback());
  };

  return (
    <>
      <h1>Please leave feedback</h1>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      />

      <h2>{title}</h2>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={feedbackOptions.good}
          neutral={feedbackOptions.neutral}
          bad={feedbackOptions.bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      )}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  feedbackOptions: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  handleFeedback: PropTypes.func.isRequired,
};

export default Section;