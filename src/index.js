import React, { Component, PropTypes } from 'react'

export class Wizard extends Component{
  constructor(){
    super();
    this.state = {
      currentStepNo:0
    }
  }
  getButtons(disabledButtons, index, length){
    var backeventHandler = this.goto.bind(this, 'back');
    var nexteventHandler = this.goto.bind(this, 'next');
    var backButton = (index > 0 && disabledButtons.indexOf('back') == -1) ? <button onClick={backeventHandler}>Back</button> : '';
    var nextButton = (index < length -1 && disabledButtons.indexOf('next') == -1) ? <button onClick={nexteventHandler}>Next</button> : ''
    return (
      <div className='buttonContainer'>
        {backButton}
        {nextButton}
      </div>
    )
  }
  goto(position){
    var steps = this.props.steps;
    var currentStepNo = this.state.currentStepNo;
    if(currentStepNo > -1 && currentStepNo < steps.length){
      var nextStepNo
      switch(position){
        case 'back' :
          nextStepNo = currentStepNo - 1;
          break;
        case 'next' :
          nextStepNo = currentStepNo + 1;
          break;
      }
      this.setState({
        currentStepNo: nextStepNo
      })

    } else {
      alert('No way!')
    }
  }
  render(){
    var html;
    var steps = this.props.steps;
    if(steps && steps.length > 0){
        var length = steps.length;
        var currentStep = steps[this.state.currentStepNo]
        html = (<div>
                    {currentStep.component}
                    {this.getButtons(currentStep.disabledButtons || [], this.state.currentStepNo, length)}
                  </div>
              )
    } else {
      html = (<div>No steps here</div>)
    }
    return html;
  }
};


export class Step extends Component{
  constructor(){
    super()
  }
  render(){
    if(this.props.type === 'text'){
      return (
        <div>
          {this.props.text}
        </div>
      )
    } else {
      return(
        <div>{this.props.children}</div>
      )
    }
  }
};
