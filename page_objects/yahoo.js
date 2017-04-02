module.exports = {
  url: 'http://yahoo.com',
  elements: {
    body: 'body',
    searchBar: 'input[name="p"]',
    searchButton: '#uh-search-button'
  },
  commands: [
    {
      fillTheSearchField() {
        return this.setValue('@searchBar', 'nightwatch')
        return this.click('@searchButton');
      }
    },
    {
      verifyValidXpath() {
        this.waitForXpathVisible("//body");
      }
    }
  ]
}
