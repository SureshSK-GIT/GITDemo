"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
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
        showColors: true,
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
        }));
    },
    suites: {
        smoke: ['chainlocators.js', 'Demo.js']
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBRXhFLGdDQUFnQztBQUNyQixRQUFBLE1BQU0sR0FBWTtJQUN6Qiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ2xELGFBQWEsRUFBRyxJQUFJO0lBRXBCLHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUVELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0MsbUNBQW1DO0lBQ25DLEtBQUssRUFBRSxDQUFDLGtCQUFrQixDQUFDO0lBRTNCLHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFNBQVMsRUFBRTtRQUNULE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQzFCLElBQUksb0JBQW9CLENBQUM7WUFDdkIsUUFBUSxFQUFFLG9CQUFvQjtTQUMvQixDQUFDLENBQ0gsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLEVBQ047UUFDRyxLQUFLLEVBQUcsQ0FBQyxrQkFBa0IsRUFBQyxTQUFTLENBQUM7S0FDeEM7Q0FDRCxDQUFDIn0=