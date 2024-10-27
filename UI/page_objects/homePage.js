// HomePage.js
module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php',
    elements: {
      searchInput: 'input[name="search_query"]',
      searchButton: 'button[name="submit_search"]',
      productList: '.product_list',
      productItems: '.product_list .ajax_block_product',
    },
    commands: [{
      searchForDress() {
        return this
          .setValue('@searchInput', 'dress')
          .click('@searchButton')
          .waitForElementVisible('@productList', 5000);
      },
      getProductCount(callback) {
        this.api.elements('css selector', this.elements.productItems.selector, function (result) {
          callback(result.value.length);
        });
        return this;
      },
      verifyProductContainsText(index, text) {
        const productSelector = `.product_list .ajax_block_product:nth-child(${index}) .product-name`;
        return this.api.verify.containsText(productSelector, text, `Verifying product ${index} contains "${text}" in the name.`);
      }
    }]
  };
  