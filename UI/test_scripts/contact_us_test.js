const path = require('path');

module.exports = {
    beforeEach: function (browser) {
        contactUsPage = browser.page.contactUsPage(); // Runs before each test case
    },

    //working on valid test cases

    'Valid Test Case 1: Submit with required fields only': function (browser) {
        contactUsPage
            .navigate()
            .setValue('@email', 'valid@example.com')
            .click('@subjectHeading')               // Click to open the dropdown
            .click('@customerServiceOption')        // Click the "Customer service" option            
            .setValue('@message', 'This is a test message')
            .click('@submitButton')
            .waitForElementVisible('@successMessage', 5000)
            .assert.containsText('@successMessage', 'Your message has been successfully sent to our team');
    },

    'Valid Test Case 2: Submit with required fields and Order Reference': function (browser) {
        contactUsPage
            .navigate()
            .setValue('@email', 'valid@example.com')
            .click('@subjectHeading')               // Click to open the dropdown
            .click('@customerServiceOption')        // Click the "Customer service" option            
            .setValue('@message', 'This is a test message')
            .setValue('@orderReference', '12345')
            .click('@submitButton')
            .waitForElementVisible('@successMessage', 5000)
            .assert.containsText('@successMessage', 'Your message has been successfully sent to our team');
    },

    'Valid Test Case 3: Submit with required fields and File Upload': function (browser) {
        contactUsPage
            .navigate()
            .setValue('@email', 'valid@example.com')
            .click('@subjectHeading')               // Click to open the dropdown
            .click('@customerServiceOption')        // Click the "Customer service" option            
            .setValue('@message', 'This is a test message')
            .setValue('@fileUpload', path.resolve(__dirname + '/../mock_files/test1.png'))
            .click('@submitButton')
            .waitForElementVisible('@successMessage', 5000)
            .assert.containsText('@successMessage', 'Your message has been successfully sent to our team');
    },

    'Valid Test Case 4: Submit with all fields': function (browser) {
        contactUsPage
            .navigate()
            .setValue('@email', 'valid@example.com')
            .click('@subjectHeading')               // Click to open the dropdown
            .click('@customerServiceOption')        // Click the "Customer service" option            
            .setValue('@message', 'This is a test message')
            .setValue('@orderReference', '12345')
            .setValue('@fileUpload', path.resolve(__dirname + '/../mock_files/test1.png'))
            .click('@submitButton')
            .waitForElementVisible('@successMessage', 5000)
            .assert.containsText('@successMessage', 'Your message has been successfully sent to our team');
    },

    //working on invalid test cases

    'Invalid Test Case 1: Missing Email': function (browser) {
        contactUsPage
            .navigate()
            .setValue('@message', 'This is a test message')
            .click('@subjectHeading')               // Click to open the dropdown
            .click('@customerServiceOption')        // Select "Customer service"
            .click('@submitButton')
            .waitForElementVisible('@errorBox', 5000)
            .assert.containsText('@errorText', 'Invalid email address.');
    },
    'Invalid Test Case 2: Missing Subject Heading': function (browser) {
        contactUsPage
            .navigate()
            .setValue('@email', 'valid@example.com')
            .setValue('@message', 'This is a test message')
            .click('@submitButton')
            .waitForElementVisible('@errorBox', 5000)
            .assert.containsText('@errorText', 'Please select a subject from the list provided.');
    },

    'Invalid Test Case 3: Missing Message': function (browser) {
        contactUsPage
            .navigate()
            .setValue('@email', 'valid@example.com')
            .click('@subjectHeading')
            .click('@customerServiceOption')
            .click('@submitButton')
            .waitForElementVisible('@errorBox', 5000)
            .assert.containsText('@errorText', 'The message cannot be blank.');
    },

    'Invalid Test Case 4: Missing Email and Subject Heading': function (browser) {
        contactUsPage
            .navigate()
            .setValue('@message', 'This is a test message')
            .click('@submitButton')
            .waitForElementVisible('@errorBox', 5000)
            .assert.containsText('@errorText', 'Invalid email address.')
            .assert.containsText('@errorText', 'Please select a subject from the list provided.');
    },

    'Invalid Test Case 5: Missing Email and Message': function (browser) {
        contactUsPage
            .navigate()
            .click('@subjectHeading')
            .click('@customerServiceOption')
            .click('@submitButton')
            .waitForElementVisible('@errorBox', 5000)
            .assert.containsText('@errorText', 'Invalid email address.')
            .assert.containsText('@errorText', 'The message cannot be blank.');
    },

    'Invalid Test Case 6: Missing Subject Heading and Message': function (browser) {
        contactUsPage
            .navigate()
            .setValue('@email', 'valid@example.com')
            .click('@submitButton')
            .waitForElementVisible('@errorBox', 5000)
            .assert.containsText('@errorText', 'The message cannot be blank.')
            .assert.containsText('@errorText', 'Please select a subject from the list provided.');
    },

    'Invalid Test Case 7: Missing All Required Fields': function (browser) {
        contactUsPage
            .navigate()
            .click('@submitButton')
            .waitForElementVisible('@errorBox', 5000)
            .assert.containsText('@errorText', 'Invalid email address.')
            .assert.containsText('@errorText', 'Please select a subject from the list provided.')
            .assert.containsText('@errorText', 'The message cannot be blank.');
    },

    'Invalid Test Case 8: Submit with required fields but Invalid Email Format': function (browser) {
        contactUsPage
            .navigate()
            .setValue('@email', 'invalid-email')  // Invalid email format
            .setValue('@message', 'This is a test message')
            .click('@subjectHeading')
            .click('@customerServiceOption')
            .click('@submitButton')
            .waitForElementVisible('@errorBox', 5000)
            .assert.containsText('@errorText', 'Invalid email address.');
    },

    after: function (browser) {
        browser.end();
    }
};
