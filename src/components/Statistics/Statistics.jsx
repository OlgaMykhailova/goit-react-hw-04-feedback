import propTypes from 'prop-types';
import { Item, List } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive Feedback: {positivePercentage}</Item>
    </List>
  );
};

Statistics.propTypes = {
    good: propTypes.number,
    neutral: propTypes.number,
    bad: propTypes.number,
    total: propTypes.number,
    positivePercentage: propTypes.string,
}
