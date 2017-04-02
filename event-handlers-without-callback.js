const {defineSupportCode} = require('cucumber')
const {client} = require('nightwatch-cucumber')

defineSupportCode(({registerHandler}) => {
  // registerHandler('BeforeFeatures', function () {
  //   return client
  //     .init()
  //     .click('#before-features')
  // })

  // registerHandler('BeforeFeature', function () {
  //   return client.click('#before-feature')
  // })

  // registerHandler('BeforeScenario', function () {
  //   return client.click('#before-scenario')
  // })

  // registerHandler('BeforeStep', function () {
  //   return client.click('#before-step')
  // })

  // registerHandler('AfterStep', function () {
  //   return client.click('#after-step')
  // })

  // registerHandler('AfterScenario', function () {
  //   return client.click('#after-scenario')
  // })

  // registerHandler('AfterFeature', function () {
  //   return client.click('#after-feature')
  // })

  registerHandler('AfterFeatures', function () {
    var reporter = require('cucumber-html-reporter');
 
    var options = {
            theme: 'bootstrap',
            jsonDir: 'reports',
            output: 'reports/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: false,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
     
        reporter.generate(options);
  })
})
