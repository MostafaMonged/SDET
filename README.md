[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/SYQmSapKwUHtGUPnUdXG3X/6PpQF4f2oEPw7oWa274bC2/tree/UI.svg?style=svg&circle-token=CCIPRJ_9jtTCgCyzJn567u9o4TA92_bae7da3980af9d95d243438fba44de2a567fed9c)](https://dl.circleci.com/status-badge/redirect/circleci/SYQmSapKwUHtGUPnUdXG3X/6PpQF4f2oEPw7oWa274bC2/tree/UI)
# SDET
 SDET 2024 - Technical Task
 
## Requirements

- [Node.js][(https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)](https://nodejs.org/en/download/source-code)

Note: please the follow project structre to find the deliverables

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
## Steps to run the project
After you clone the repo do the following:
1) install dependencies
```bash
npm install
2) run GUI tests
```bash
npm run test:UI
3) run API tests
```bash
npm run test:API
you can use this alternative way to run API tests manually step by step (create tests then authenticate tests then read then update then delete)
```bash
npm run test:create
npm run test:authenticate
npm run test:read
npm run test:update
npm run test:delete
