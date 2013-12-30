
/**
 * XMLHttpRequest ready state map for [Node.js][] and the browser.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#readyState
 *
 * Example:
 *
 *    var state = require('xhr-readystate');
 *    if (xhr.readyState == state.DONE) console.log(xhr.responseText);
 */

module.exports = {
  UNSENT:           0, // open()has not been called yet.
  OPENED:           1, // send()has not been called yet.
  HEADERS_RECEIVED: 2, // send() has been called, and headers and status are available.
  LOADING:          3, // Downloading; responseText holds partial data.
  DONE:             4  // The operation is complete.
};

