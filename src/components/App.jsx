import React, { useState } from 'react';
import Section from './Section/Section';

const App = () => {
  const [feedbackOptions, setFeedbackOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (label) => {
    setFeedbackOptions((prevOptions) => ({
      ...prevOptions,
      [label]: prevOptions[label] + 1,
    }));
  };

  return (
    <>
      <Section title="Statistics" feedbackOptions={feedbackOptions} handleFeedback={handleFeedback} />
    </>
  );
};

export default App;