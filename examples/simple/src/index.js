import React from 'react'
import { render } from 'react-dom'
import { Wizard, Step } from '../../../lib'
import { FirstStep } from './steps'

const Steps1 = [
  {name:'Step 1', component : <Step type='component' children={<FirstStep/>}/>},
  {name:'Step 2', component : <Step type='text' text='Step 2'/>},
  {name:'Step 3', component : <Step type='text' text='Step 3'/>},
  {name:'Step 4', component : <Step type='text' text='Step 4'/>}
]

const Simple = React.createClass({
  render(){
    return (<Wizard steps={Steps1}/>)
  }
})

export default Simple

render(<Simple/>, document.getElementById('simpleexample'))
