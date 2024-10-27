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
│   ├──/page_objects                                # Page object models to encapsulate UI element definitions
│   ├──/test_scripts                                # UI tests here
│   └──nightwatch.conf.js
    
└───/API
│   │
│   ├──/test_scripts                                # API tests here 
│   ├──/utils                                       # Utility functions and Supertest setup for reusable requests
│   ├──/results_reports           
│   ├──/bug_reports                
│   └──jest.config.js
│               
└──package.json               

```
## Deliverables
For each of UI and API deliverables:
- you will find the html for results under the **results_reports** directory.
- You will find bug tickets under the **bug_reports** directory.
- You will find tests documentation (if required) under the **test_docs** directory.
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
Alternative way is to test specific API route.
You can do so by first running the API server then test the route you want.
To run the server:
```bash
npm run dev
```
To test single route use the command related to the route you want to test from the commands below:
```bash
npm run test:create
npm run test:authenticate
npm run test:read
npm run test:update
npm run test:delete
```


