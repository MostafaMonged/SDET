# SDET
 SDET 2024 - Technical Task


## Project Structure

```plaintext
.
└───/UI
│   ├──/bug_reports
│   ├──/results_reports
│   ├──/test_docs 
│   ├──/page_models                                # Page object models to encapsulate UI element definitions
│   └──/test_scripts
│       
└───/API
│   │
│   ├──/test_scripts 
│   │  ├──authenticate_user.test.js    
│   │  ├──create_user.test.js      
│   │  ├──delete_user.test.js     
│   │  ├──read_user.test.js    
│   │  └──update_user.test.js  
│   │
│   ├──/utils
│   │  ├──api_client.js                           # Supertest setup for reusable requests          
│   │  └──helpers.js                              # Utility functions
│   │
│   ├──/results_reports           
│   ├──/bug_reports                
│   └──jest.config.js
│               
└──package.json               

```
