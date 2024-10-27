[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/SYQmSapKwUHtGUPnUdXG3X/6PpQF4f2oEPw7oWa274bC2/tree/UI.svg?style=svg&circle-token=CCIPRJ_9jtTCgCyzJn567u9o4TA92_bae7da3980af9d95d243438fba44de2a567fed9c)](https://dl.circleci.com/status-badge/redirect/circleci/SYQmSapKwUHtGUPnUdXG3X/6PpQF4f2oEPw7oWa274bC2/tree/UI)
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

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/SYQmSapKwUHtGUPnUdXG3X/6PpQF4f2oEPw7oWa274bC2/tree/main.svg?style=svg&circle-token=CCIPRJ_VRrwDqzK4ub4CXmKGRdd5o_bf479a462103b3cfed3d8636d071e3e493af24ff)](https://dl.circleci.com/status-badge/redirect/circleci/SYQmSapKwUHtGUPnUdXG3X/6PpQF4f2oEPw7oWa274bC2/tree/main)
