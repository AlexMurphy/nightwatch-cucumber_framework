exports.command = function(xpath, optionalMessage, timeoutOverride, omitXpathAndWaitTimeOutput) {

  console.log("In waitForXpathVisible(). xpath is " + xpath);

  this.useXpath();
  var timeout = this.globals.waitForConditionTimeout;
  if (timeoutOverride) {
    timeout = timeoutOverride;
  }
  if (optionalMessage) {
    if ( !omitXpathAndWaitTimeOutput) {
      optionalMessage = optionalMessage + " (XPath: %s, wait time %d ms)";
    }
    this.waitForElementVisible(xpath, timeout, true, null, optionalMessage);
  } else {
    if (timeoutOverride) {
      this.waitForElementVisible(xpath, timeout);
    } else {
      this.waitForElementVisible(xpath);
    }
  }
  return this; // allows the command to be chained.
};
