import React from 'react';
import { shallow} from 'enzyme';

import Home from "./Home"

describe('Home Page Testing testing ', () => {
    it('testing handlecardname cardvalue',()=>{
        const wrapper = shallow(<Home/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('Filter method testing with year',()=>{
        const wrapper = shallow(<Home/>);
        const instance = wrapper.instance();
        
        instance.filterFunction(2006,false,false);
        expect(wrapper.state().selectedYear).toEqual("");
    });
    it('Filter method testing with SuccessfulLaunch false',()=>{
        const wrapper = shallow(<Home/>);
        const instance = wrapper.instance();
        
        instance.filterFunction(false,"false",false);
        expect(wrapper.state().isSuccessfulLaunch).toEqual("");
    });
    it('Filter method testing with SuccessfulLaunch true',()=>{
        const wrapper = shallow(<Home/>);
        const instance = wrapper.instance();
        
        instance.filterFunction(false,"true",false);
        expect(wrapper.state().isSuccessfulLaunch).toEqual("");
    });
    it('Filter method testing with SuccessfullLand false',()=>{
        const wrapper = shallow(<Home/>);
        const instance = wrapper.instance();
        
        instance.filterFunction(false,false,"false");
        expect(wrapper.state().isSuccessfullLand).toEqual("");
    });
    it('Filter method testing with SuccessfullLand true',()=>{
        const wrapper = shallow(<Home/>);
        const instance = wrapper.instance();
        
        instance.filterFunction(false,false,"true");
        expect(wrapper.state().isSuccessfullLand).toEqual("");
    });
    
})