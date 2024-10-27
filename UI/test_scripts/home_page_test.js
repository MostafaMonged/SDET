// searchDressTest.js
module.exports = {
  'Search for "dress" on homepage and verify item names in results': function (browser) {
    const homePage = browser.page.homePage();

    // Open the homepage and search for "dress"
    homePage
      .navigate()
      .waitForElementVisible('body', 5000)
      .searchForDress();

    // Verify URL and check search results
    browser
      .assert.urlContains('controller=search', 'URL contains controller=search')
      .assert.elementPresent(homePage.elements.productItems.selector, 'Search results found for "dress".');

    // Get the number of products and verify each product name contains "Dress"
    homePage.getProductCount(function (productCount) {
      console.log(`Number of products found: ${productCount}`);
      
      for (let i = 1; i <= productCount; i++) {
        homePage.verifyProductContainsText(i, 'Dress');
      }
    });

    // End the browser session
    browser.end();
  }
};
