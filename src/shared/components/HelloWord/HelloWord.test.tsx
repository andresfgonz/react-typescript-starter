import * as React from 'react';
import { shallow } from 'enzyme';
import { HelloWord } from './HelloWord';

describe('HelloWord', () => {
  let component: any;

  beforeEach(() => {
    component = shallow(<HelloWord />);
  });

  it('should render', () => {
    component = shallow(<HelloWord />);
    expect(component).toBeTruthy();
  });
});
