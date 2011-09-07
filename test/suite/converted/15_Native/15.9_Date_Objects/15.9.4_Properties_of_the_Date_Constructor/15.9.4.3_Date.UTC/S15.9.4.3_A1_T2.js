// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date property "UTC" has { DontEnum } attributes
 *
 * @id: S15.9.4.3_A1_T2;
 * @section: 15.9.4.3;
 * @description: Checking absence of DontDelete attribute;
 */

if (delete Date.UTC  === false) {
  $ERROR('#1: The Date.UTC property has not the attributes DontDelete');
}

if (Date.hasOwnProperty('UTC')) {
  $FAIL('#2: The Date.UTC property has not the attributes DontDelete');
}

