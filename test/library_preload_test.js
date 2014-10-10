// Copyright 2014 SAP SE.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http: //www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
// either express or implied. See the License for the specific
// language governing permissions and limitations under the License.

/*eslint-env mocha */
'use strict';

var assert = require('assert');
var grunt = require('grunt');

describe('openui5_library_preload', function() {

  it('default_options', function(done) {

    var actualPreloadJson = grunt.file.read('tmp/library_preload/default_options/lib1/my/ui/lib/library-preload.json');
    var expectedPreloadJson = grunt.file.read('test/library_preload/expected/default_options/lib1/my/ui/lib/library-preload.json').replace(/\n$/, ''); // remove the last LF
    assert.equal(actualPreloadJson, expectedPreloadJson, 'preload JSON should be correctly created.');

    done();
  });

});