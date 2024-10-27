[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/SYQmSapKwUHtGUPnUdXG3X/6PpQF4f2oEPw7oWa274bC2/tree/UI.svg?style=svg&circle-token=CCIPRJ_9jtTCgCyzJn567u9o4TA92_bae7da3980af9d95d243438fba44de2a567fed9c)](https://dl.circleci.com/status-badge/redirect/circleci/SYQmSapKwUHtGUPnUdXG3X/6PpQF4f2oEPw7oWa274bC2/tree/UI)
# SDET
 SDET 2024 - Technical Task
 
## Requirements

- [Node.js][(https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)](https://nodejs.org/en/download/source-code)

Note: Please the follow project structre to find the deliverables

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
1) Install dependencies
```bash
npm install
```
2) Run UI tests
```bash
npm run test:UI
```
3) Run API tests
```bash
npm run test:API
```
Alternative way to test specific API route is to use these commands in a row.
```bash
npm run test:create
npm run test:authenticate
npm run test:read
npm run test:update
npm run test:delete
```
## Deliverables
For each of UI and API deliverables:
- you will find the html for results under the **results_reports** directory.
- You will find bug tickets under the **bug_reports** directory.
- You will find tests documentation (if required) under the **test_docs** directory.

