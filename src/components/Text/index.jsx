import { createElement } from 'react';
import cx from 'classnames';

export const Text = ({ children, tag, weight, size, color, className, ...rest }) => {
  const props = {
    className: cx('text',
      {[weight]: weight},
      {[size]: size},
      {[color]: color},
      className
    ),
    'data-testid': 'text',
    ...rest
  };
    return createElement(tag, props, children);
}