import {Config} from "protractor";
var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter"); 

// An example configuration file
export let config : Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect : true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns. 
    specs: ['chainlocators.js'],
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    },
    onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
   },
   suites :
   {
      smoke : ['chainlocators.js','Demo.js'],
      regression : 'Demo.js'
   }
  };