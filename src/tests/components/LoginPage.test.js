import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

// loginPage test file --> should call startLogin on button click
test('should call startLogin on button click', () => {
  const startLogin = jest.fn()
  const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
  wrapper.find('button').simulate('click')
  expect(startLogin).toHaveBeenCalled();
})
