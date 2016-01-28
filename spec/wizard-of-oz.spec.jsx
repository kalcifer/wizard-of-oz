import React from 'react/addons';
import WizardOfOz from '../lib/wizard-of-oz.jsx';

describe('WizardOfOz', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <WizardOfOz/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('wizard-of-oz');
  });
});
