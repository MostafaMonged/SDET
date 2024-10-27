
module.exports = {
  output_folder: './UI/results_reports',
  src_folders: ['./UI/test_scripts'],
  page_objects_path: ['./UI/page_objects'],
  test_settings: {
    default: {
      // disable_error_log: false,
      // launch_url: 'https://nightwatchjs.org',
      desiredCapabilities: {
        browserName: 'chrome'
      },

      webdriver: {
        start_process: true,
        server_path: './node_modules/.bin/chromedriver',
        port: 9515
      },

      // Reporter settings
      reporter: 'html-reporter', // Options: 'junit' or default HTML reporter
      reporterOptions: {
        output: './UI/results_reports' // Path where reports will be saved
      },
      
      // Ensure test cases continue running even after assertion failures
      globals: {
        abortOnAssertionFailure: false
      },
      skip_testcases_on_fail: false

    },
  },

};
