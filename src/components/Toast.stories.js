import React from 'react';
import Toast from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
};

const Template = (args) => <Toast {...args} />;

export const SuccessSmall = Template.bind({});
SuccessSmall.args = {
  type: 'success',
  title: 'Success Message',
  message: 'This is a small success message.',
  size: 'small',
};

export const SuccessMedium = Template.bind({});
SuccessMedium.args = {
  type: 'success',
  title: 'Success Message',
  message: 'This is a medium success message.',
  size: 'medium',
};

export const SuccessLarge = Template.bind({});
SuccessLarge.args = {
  type: 'success',
  title: 'Success Message',
  message: 'This is a large success message.',
  size: 'large',
};

export const ErrorSmall = Template.bind({});
ErrorSmall.args = {
  type: 'error',
  title: 'Error Message',
  message: 'This is a small error message.',
  size: 'small',
};

export const ErrorMedium = Template.bind({});
ErrorMedium.args = {
  type: 'error',
  title: 'Error Message',
  message: 'This is a medium error message.',
  size: 'medium',
};

export const ErrorLarge = Template.bind({});
ErrorLarge.args = {
  type: 'error',
  title: 'Error Message',
  message: 'This is a large error message.',
  size: 'large',
};

export const NotificationSmall = Template.bind({});
NotificationSmall.args = {
  type: 'notification',
  title: 'Notification',
  message: 'This is a small notification message.',
  size: 'small',
  timeAgo: '11 mins ago',
};

export const NotificationMedium = Template.bind({});
NotificationMedium.args = {
  type: 'notification',
  title: 'Notification',
  message: 'This is a medium notification message.',
  size: 'medium',
  timeAgo: '11 mins ago',
};

export const NotificationLarge = Template.bind({});
NotificationLarge.args = {
  type: 'notification',
  title: 'Notification',
  message: 'This is a large notification message.',
  size: 'large',
  timeAgo: '11 mins ago',
};
