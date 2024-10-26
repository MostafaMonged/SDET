module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php?controller=contact',

    elements: {
        subjectHeading: '#id_contact',
        email: '#email',
        orderReference: '#id_order',
        fileUpload: '#fileUpload',
        message: '#message',
        submitButton: '#submitMessage',
        successMessage: '.alert-success',
        errorBox: '.alert-danger',
        errorText: '.alert-danger li',            // Specific error text inside error message box
        
        // Specific option selectors
        customerServiceOption: '#id_contact option[value="2"]', // "Customer service" option
        webmasterOption: '#id_contact option[value="1"]'        // "Webmaster" option
    }
};
