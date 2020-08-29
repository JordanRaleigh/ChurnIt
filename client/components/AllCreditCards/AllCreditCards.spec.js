import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AllCreditCards from './AllCreditCards'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AllCreditCards', () => {
  let subject

  beforeEach(() => {
    subject = shallow(<AllCreditCards />)
  })

  it('renders a list', () => {
    return expect(subject.find('ul')).to.exist
  })
})
