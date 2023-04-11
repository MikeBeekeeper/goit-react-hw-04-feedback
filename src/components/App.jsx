import React, { useState } from 'react';
import css from '../components/app.module.css';
import Section from './Section/Section.js';
import Statistics from './statistics/statistics.js';
import Notification from './notification/Notification.js';
import FeedbackOptions from './feedbackButtons/FeedbackOptions.js';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = ['good', 'neutral', 'bad'];

  const onClick = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const countingTotal = () => {
    return good + neutral + bad;
  };

  const countingPercentage = () => {
    return (good / countingTotal()) * 100;
  };

  return (
    <div className={css.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} handleClick={onClick} />
      </Section>
      <Section title="Statistics">
        {countingTotal() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countingTotal()}
            percent={Math.round(countingPercentage())}
          />
        )}
      </Section>
    </div>
  );
};
