import Home from './Home'
import {shallow} from 'enzyme'

describe('Shallow home page',()=>{
    it('Component check',()=>{
        let wrapper =shallow(<Home />)
        expect(wrapper.exists('.classHome')).toEqual(false) // class ase naki ta check kore .jmn css class
    })
})