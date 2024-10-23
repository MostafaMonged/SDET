// API/jest.config.js
module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/API/test_scripts/**/*.test.js'],  // Match only .test.js files in ./API/test_scripts/
    reporters: [
        'default',
        ['jest-html-reporter', {
            pageTitle: 'API Test Report',
            outputPath: './API/results_reports/mock-user-auth_test_report.html',
            "includeFailureMsg": true     // Include failure messages
        }],
    ],
};
