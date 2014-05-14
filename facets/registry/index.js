var path = require('path');
var internals = {};

var abbrev = {
   "_id": "abbrev",
   "_rev": "29-8bf3b65d94955dd0b87bf67efcd36c63",
   "name": "abbrev",
   "dist-tags": {
       "latest": "1.0.5"
   },
   "versions": {
       "1.0.3": {
           "name": "abbrev",
           "version": "1.0.3",
           "description": "Like ruby's abbrev module, but in js",
           "author": {
               "name": "Isaac Z. Schlueter",
               "email": "i@izs.me"
           },
           "main": "./lib/abbrev.js",
           "scripts": {
               "test": "node lib/abbrev.js"
           },
           "repository": {
               "type": "git",
               "url": "git://github.com/isaacs/abbrev-js.git"
           },
           "_id": "abbrev@1.0.3",
           "engines": {
               "node": "*"
           },
           "_engineSupported": true,
           "_npmVersion": "1.0.0rc7",
           "_nodeVersion": "v0.5.0-pre",
           "_defaultsLoaded": true,
           "dist": {
               "shasum": "aa049c967f999222aa42e14434f0c562ef468241",
               "tarball": "http://registry.npmjs.org/abbrev/-/abbrev-1.0.3.tgz"
           },
           "directories": {
           }
       },
       "1.0.4": {
           "name": "abbrev",
           "version": "1.0.4",
           "description": "Like ruby's abbrev module, but in js",
           "author": {
               "name": "Isaac Z. Schlueter",
               "email": "i@izs.me"
           },
           "main": "./lib/abbrev.js",
           "scripts": {
               "test": "node lib/abbrev.js"
           },
           "repository": {
               "type": "git",
               "url": "http://github.com/isaacs/abbrev-js"
           },
           "license": {
               "type": "MIT",
               "url": "https://github.com/isaacs/abbrev-js/raw/master/LICENSE"
           },
           "_id": "abbrev@1.0.4",
           "dist": {
               "shasum": "bd55ae5e413ba1722ee4caba1f6ea10414a59ecd",
               "tarball": "http://registry.npmjs.org/abbrev/-/abbrev-1.0.4.tgz"
           },
           "_npmVersion": "1.1.70",
           "_npmUser": {
               "name": "isaacs",
               "email": "i@izs.me"
           },
           "maintainers": [
               {
                   "name": "isaacs",
                   "email": "i@izs.me"
               }
           ],
           "directories": {
           }
       },
       "1.0.5": {
           "name": "abbrev",
           "version": "1.0.5",
           "description": "Like ruby's abbrev module, but in js",
           "author": {
               "name": "Isaac Z. Schlueter",
               "email": "i@izs.me"
           },
           "main": "abbrev.js",
           "scripts": {
               "test": "node test.js"
           },
           "repository": {
               "type": "git",
               "url": "http://github.com/isaacs/abbrev-js"
           },
           "license": {
               "type": "MIT",
               "url": "https://github.com/isaacs/abbrev-js/raw/master/LICENSE"
           },
           "bugs": {
               "url": "https://github.com/isaacs/abbrev-js/issues"
           },
           "homepage": "https://github.com/isaacs/abbrev-js",
           "_id": "abbrev@1.0.5",
           "_shasum": "5d8257bd9ebe435e698b2fa431afde4fe7b10b03",
           "_from": ".",
           "_npmVersion": "1.4.7",
           "_npmUser": {
               "name": "isaacs",
               "email": "i@izs.me"
           },
           "maintainers": [
               {
                   "name": "isaacs",
                   "email": "i@izs.me"
               }
           ],
           "dist": {
               "shasum": "5d8257bd9ebe435e698b2fa431afde4fe7b10b03",
               "tarball": "http://registry.npmjs.org/abbrev/-/abbrev-1.0.5.tgz"
           }
       }
   },
   "maintainers": [
       {
           "name": "isaacs",
           "email": "i@izs.me"
       }
   ],
   "author": {
       "name": "Isaac Z. Schlueter",
       "email": "i@izs.me"
   },
   "description": "Like ruby's abbrev module, but in js",
   "time": {
       "modified": "2014-04-17T20:09:12.523Z",
       "created": "2011-03-21T22:21:11.183Z",
       "1.0.1": "2011-03-21T22:21:11.183Z",
       "1.0.2": "2011-03-21T22:21:11.183Z",
       "1.0.3": "2011-03-21T22:21:11.183Z",
       "1.0.3-1": "2011-03-24T23:01:19.581Z",
       "1.0.4": "2013-01-09T00:01:24.135Z",
       "1.0.5": "2014-04-17T20:09:12.523Z"
   },
   "repository": {
       "type": "git",
       "url": "http://github.com/isaacs/abbrev-js"
   },
   "users": {
       "leesei": true,
       "ceejbot": true,
       "isaacs": true,
       "npm-www": true,
       "jamescostian": true
   },
   "readme": "# abbrev-js\n\nJust like [ruby's Abbrev](http://apidock.com/ruby/Abbrev).\n\nUsage:\n\n    var abbrev = require(\"abbrev\");\n    abbrev(\"foo\", \"fool\", \"folding\", \"flop\");\n    \n    // returns:\n    { fl: 'flop'\n    , flo: 'flop'\n    , flop: 'flop'\n    , fol: 'folding'\n    , fold: 'folding'\n    , foldi: 'folding'\n    , foldin: 'folding'\n    , folding: 'folding'\n    , foo: 'foo'\n    , fool: 'fool'\n    }\n\nThis is handy for command-line scripts, or other cases where you want to be able to accept shorthands.\n",
   "readmeFilename": "README.md",
   "homepage": "https://github.com/isaacs/abbrev-js",
   "bugs": {
       "url": "https://github.com/isaacs/abbrev-js/issues"
   },
   "license": {
       "type": "MIT",
       "url": "https://github.com/isaacs/abbrev-js/raw/master/LICENSE"
   }
};

exports.register = function Regsitry (facet, options, next) {
  facet.views({
    engines: { hbs: 'handlebars' },
    path: path.resolve(__dirname, 'templates')
  });

  facet.route({
    path: "/{package}",
    method: "GET",
    handler: function (request, reply) {
      reply.view('package-page', {
        package: abbrev
      });
    }
  });

  next();
}