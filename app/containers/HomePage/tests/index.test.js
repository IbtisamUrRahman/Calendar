import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

// eslint-disable-next-line import/no-named-as-default-member
import HomePage from '../index';
import messages from '../messages';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });
});
