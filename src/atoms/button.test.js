import React from 'react';
import { shallow } from 'enzyme';

import CustomButton from './CustomButton'
describe('BasicButton rendering', () => {
    it('should render one BasicButton', () => {
        let wrapper = shallow(<CustomButton/>);
        expect(wrapper.find('button')).toHaveLength(1);
    });
   
});