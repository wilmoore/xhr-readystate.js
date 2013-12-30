# xhr-readystate.js [![Build Status](https://travis-ci.org/wilmoore/xhr-readystate.js.png?branch=master)](https://travis-ci.org/wilmoore/xhr-readystate.js) [![Build Status](https://david-dm.org/wilmoore/xhr-readystate.js.png)](https://david-dm.org/wilmoore/xhr-readystate.js) [![NPM version](https://badge.fury.io/js/xhr-readystate.js.png)](http://badge.fury.io/js/xhr-readystate.js)

  XMLHttpRequest ready state map for [Node.js][] and the browser.

## Example

    var state = require('xhr-readystate');
    if (xhr.readyState == state.DONE) console.log(xhr.responseText);

## Installation

[component](http://component.io/wilmoore/xhr-readystate.js)

    $ component install wilmoore/xhr-readystate.js

[bower](http://sindresorhus.com/bower-components/)

    $ bower install xhr-readystate.js

[npm](https://npmjs.org/package/xhr-readystate.js)

[![NPM](https://nodei.co/npm/xhr-readystate.js.png?downloads=true)](https://nodei.co/npm/xhr-readystate.js/)

[volo](http://volojs.org)

    $ volo add wilmoore/xhr-readystate.js

[manual][]

1. download

        % curl -#O https://raw.github.com/wilmoore/xhr-readystate.js/master/xhr-readystate.js

2. use

        <script src="xhr-readystate.js"></script>

## License

  MIT

[Node.js]:  http://nodejs.org
[manual]:   http://yuiblog.com/blog/2006/06/01/global-domination/

