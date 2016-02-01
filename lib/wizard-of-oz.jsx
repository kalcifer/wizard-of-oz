import React from 'react';
import './wizard-of-oz.scss';

export const Wizard = React.createClass({
  getInitialState(){
    return {
        currentStepNo:0,
        prevStepNo:-1,
        data:{}
    }

  },
  getButtons(disabledButtons, index, length){
    var backeventHandler = this.goto.bind(this, 'back');
    var nexteventHandler = this.goto.bind(this, 'next');
    var backButton = index > 0 && disabledButtons.indexOf('back') == -1 ?
      (<button onClick={backeventHandler}>Back</button>) : '';
    var nextButton = index < length -1 && disabledButtons.indexOf('next') == -1 ?
      (<button onClick={nexteventHandler}>Next</button>) : ''
    return (
      <div className='buttonContainer'>
        {backButton}
        {nextButton}
      </div>
    )
  },
  goto(position){
    var steps = this.props.steps;
    var { currentStepNo, prevStepNo } = this.state;
    if(currentStepNo > -1 && currentStepNo < steps.length){
      var nextStepNo;
      if(isNaN(parseInt(position))){
        switch(position){
          case 'back' :
            nextStepNo = prevStepNo === -1 && prevStepNo >= currentStepNo? currentStepNo - 1 : prevStepNo;
            break;
          case 'next' :
            nextStepNo = currentStepNo + 1;
            break;
        }

      } else {
        if(position > -1 && position < steps.length && position != currentStepNo){
          nextStepNo = position
        }
      }

      this.setState({
        currentStepNo: nextStepNo,
        prevStepNo: currentStepNo
      })

    } else {
      alert('No way!')
    }
  },
  addData(data){
    this.setState({
      data: Object.assign({}, this.state.data, data)
    })
  },
  render(){
    var html;
    var steps = this.props.steps;
    if(steps && steps.length > 0){
        var length = steps.length;
        var currentStep = steps[this.state.currentStepNo]
        var currentStepWithGoto = React.cloneElement(currentStep.component,
                                                    {
                                                      goto:this.goto,
                                                      addData:this.addData,
                                                      name: currentStep.name,
                                                      wizardData: this.props.data,
                                                      passData:this.state.data
                                                    })
        html = (<div>
                    {currentStepWithGoto}
                    {this.getButtons(currentStep.disabledButtons || [], this.state.currentStepNo, length)}
                  </div>
              )
    } else {
      html = (<div>No steps there</div>)
    }
    return html;
  }
})

export const Step = React.createClass({
  getInitialState(){
    return {

    }
  },
  goto(position){
    this.props.goto(position)
  },
  addData(data){
    this.props.addData(data)
  },
  renderType(){
    if(this.props.type === 'text'){
      return(<div>
        {this.props.text}
      </div>)

    } else {
      var childrenWithGoto = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, { goto: this.goto, addData: this.addData, wizardData: this.props.wizardData });
      });
      return <div>{childrenWithGoto}</div>
    }
  },
  render(){
      return (<div>
        <h5>{this.props.name}</h5>
        {this.renderType()}
      </div>)

  }
})
