/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function (callbackFn) {
  let result = [];
  this.forEach((value, index, array) => {
    result.push(callbackFn(value));
  });
  return result;
};

// FILTER //
Array.prototype.myFilter = function (callbackFn) {
  let result = [];
  this.forEach((value, index, array) => {
    if (callbackFn(value)) {
      result.push(value);
    }
  });
  return result;
};

// SOME //
Array.prototype.mySome = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
  this.forEach((value) => {
    if (callbackFn(value) == false) {
      return false;
    }
  });
  return true;
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn, initialValue) {
  let accumulator;
  if (initialValue === undefined) {
    accumulator = undefined;
  } else {
    accumulator = initialValue;
  }
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callbackFn.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  if (accumulator === undefined) {
    throw new TypeError(
      "Calling myReduce on an empty array with no initial value will return an error"
    );
  }
  return accumulator;
};

// INCLUDES //
Array.prototype.myIncludes = function (searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == searchElement) {
      return true;
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function (searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == searchElement) {
      return i;
    }
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement) {
  for (let i = this.length - 1; i > -1; i--) {
    if (this[i] == searchElement) {
      return i;
    }
  }
  return -1;
};

// KEYS //
Object.myKeys = function (object) {
  let theKeys = [];
  for (let key in object) {
    theKeys.push(key);
  }
  return theKeys;
};

// VALUES //
Object.myValues = function (object) {
  let theValues = [];
  for (let key in object) {
    theValues.push(object[key]);
  }
  return theValues;
};
