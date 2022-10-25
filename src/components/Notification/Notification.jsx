import propTypes from 'prop-types';
import { NotificationText } from './Notification.styled';

export const Notification = ({message}) => {
return <NotificationText>{message}</NotificationText>
}

Notification.propTypes = {
    message: propTypes.string,
}