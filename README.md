# wizard of oz

Get the AMD module located at `wizard-of-oz.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'WizardOfOz': 'wizard-of-oz'
  }
});

require(['react', 'WizardOfOz'], function(React, WizardOfOz) {

  React.render(React.createElement(WizardOfOz), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
