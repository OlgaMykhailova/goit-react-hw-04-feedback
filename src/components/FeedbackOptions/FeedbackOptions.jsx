import propTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, index) => (
        <Button
          type="button"
          key={index}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  option: propTypes.string
}