[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/SYQmSapKwUHtGUPnUdXG3X/6PpQF4f2oEPw7oWa274bC2/tree/main.svg?style=svg&circle-token=CCIPRJ_9Ap8ooDCGmmbcBMSArEskE_9863b4b75051d4550923f3966f12440f86954d51)](https://dl.circleci.com/status-badge/redirect/circleci/SYQmSapKwUHtGUPnUdXG3X/6PpQF4f2oEPw7oWa274bC2/tree/main)
# SDET
 SDET 2024 - Technical Task
 
## Requirements

- [Node.js](https://nodejs.org/en/download/source-code)

**Note:** Please the follow project structre to find the deliverables.

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

## CI/CD
**Note:** The status badge is failed because there are some test cases that detect bugs in the UI and API. So, this badge will not be Passing until this bugs are fixed.

**Note:** As UI tests and API tests are independent, I run them in parallel after dependencies installation:

![image](https://github.com/user-attachments/assets/93415409-fa50-48c2-9c7e-f8558faa34a3)


## Steps to run the project
### Suggested Approach
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
### Alternative approach to test specific API route
You can do so by first running the API server in a terminal then test the route you want in **another terminal**.
1) To run the server
```bash
npm run dev
```
2) To test individual routes, use the corresponding command below:

| Route        | Command                   |
|--------------|---------------------------|
| Create       | `npm run test:create`     |
| Authenticate | `npm run test:authenticate` |
| Read         | `npm run test:read`       |
| Update       | `npm run test:update`     |
| Delete       | `npm run test:delete`     |



