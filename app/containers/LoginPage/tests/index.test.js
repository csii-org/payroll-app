import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from '../index';

describe('LoginPage', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <LoginPage />
    );
    expect(renderedComponent.contains(
      'This is a Login component!'
    )).toEqual(true);
  });
});
