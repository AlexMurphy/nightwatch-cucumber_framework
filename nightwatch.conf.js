const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')
const chromedriver = require('chromedriver')

require('nightwatch-cucumber')({
	cucumberArgs: [
	'--require', 'event-handlers-without-callback.js',
	'--require', 'timeout.js', 
	'--require', 'step_definitions', 
	'--format', 'pretty', 
	'--format', 'json:reports/cucumber.json',
	'features']
})

module.exports = {
	output_folder: 'reports',
  custom_commands_path : "commands",
	custom_assertions_path: '',
	page_objects_path: 'page_objects',
	live_output: false,
	test_workers: true,
	disable_colors: false,
	selenium: {
		start_process: true,
		server_path: './node_modules/selenium-server/lib/runner/selenium-server-standalone-3.3.0.jar',
		log_path: 'logs',
		host: '127.0.0.1',
		port: 4444
	},
	test_settings: {
		default: {
			launch_url: 'http://localhost:8087',
			selenium_port: 4444,
			selenium_host: '127.0.0.1',
			screenshots : {
        enabled : true,
        on_failure : true,
        path: 'screenshots'
      },
			desiredCapabilities: {
				browserName: 'phantomjs',
				javascriptEnabled: true,
				acceptSslCerts: true,
				'phantomjs.binary.path': phantomjs.path
			}
		},
		chrome: {
			desiredCapabilities: {
				browserName: 'chrome',
				javascriptEnabled: true,
				acceptSslCerts: true
			},
			selenium: {
				cli_args: {
					'webdriver.chrome.driver': chromedriver.path
				}
			}
		},
		firefox: {
			desiredCapabilities: {
				browserName: 'firefox',
				javascriptEnabled: true,
				acceptSslCerts: true
			}
		}
	}
}
