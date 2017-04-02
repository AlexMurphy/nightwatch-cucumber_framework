const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When}) => {
  Given(/^I open Yahoo's search page$/, () => {
    const yahoo = client.page.yahoo()

    return yahoo
      .navigate()
      .waitForElementVisible('@body', 1000)
  })

  Then(/^the title is "(.*?)"$/, (text) => {
    return client.assert.title(text)
  })

  Then(/^the Yahoo search form exists$/, () => {
    const yahoo = client.page.yahoo()

    return yahoo.assert.visible('@searchBar')
  })

  Then(/^a valid XPath works$/, () => {
    console.log("Running step 'a valid XPath works'");

    const yahoo = client.page.yahoo()

    return yahoo.verifyValidXpath();
  })

  Then(/^an invalid XPath works\?\!$/, () => {
    console.log("Running step 'an invalid XPath works?!'");

    const yahoo = client.page.yahoo()

    return yahoo.fillTheSearchField();
  })

})
