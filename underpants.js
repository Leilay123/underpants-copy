// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};



/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/


_.identity= function(value){
    return value
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

/**
 * I: function (idk name I think it's an anonymous function) takes any value
 * O: return type of value as a string
 * C:
 * E:
 */


_.typeOf = function(value){
    // need to check if value is a certain datatype, a if statement seems to be good
    // start with simple datatypes

    if (Array.isArray(value)){
        return 'array'
    } else if (typeof value === 'object' && value !== null){
        return 'object'
    } else if (value === null){
        return 'null'
    }
        return typeof(value)



// well that was a easier way than what I was thinking :/

}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

/**
 * I: function takes an array and a number
 * O: if array is noy an array return [], if number don't exist/not a number, return the first element of array
 *  otherwise, return the first number items of array (????)
 * C:
 * E: if number is negative do something, if number greater than array length do something as well
 */


_.first = function(array, number){
    // check array is actually an array or not

    // what would be the best order to do this??
   
    if(!Array.isArray(array)){
        return []
    }
    

    if (typeof number !== 'number'){
        return array[0]
    }

    // figure out those edge cases :/

    if (number < 0){
        return [] // probaby
    }

    if (number > array.length){
        return array; // I guess idk :/
    }

    return array.slice(0, number)
}

//_.first(['a', 'b', 'c', 'd'], 2); // => ['a', 'b']


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

/**
 * I: function takes an array and a number
 * O: if array is noy an array return [], if number don't exist/not a number, return the last element of array
 *  otherwise, return the first number items of array (.slice method)
 * C:
 * E: if number is negative do something, if number greater than array length do something as well
 */

_.last = function(array, number){
    //If <array> is not an array, return []
    
    if(Array.isArray(array) === false){
        return []
    }

    //If <number> is not given or not a number, return just the last element in <array>.

     if (typeof number !== 'number'){
        return array.pop()
    }

    if (number < 0){
        return [] // probaby
    }

    if (number > array.length){
        return array; // I guess idk :/
    }

    return array.slice(array.length - number)
   

}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


/**
 * I: function takes an array and a value
 * O: return the indext on <array> that is the first occurrance of value (okay???)
 *    return -1 if value is not in <array>
 * C: Don't use [].indexOf()
 * E: What if <array> has multiple occurances of val? What if <val> isn't in <array>?
 */

_.indexOf = function (array, value){

    // return the index of arrau thats the first occurrance of value
    // loop?

    for (var i = 0; i < array.length; i++){
        if (array[i] === value){
            return i
    }
    
    }
    return -1
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


/**
 * I: function takes array and value
 * O: return true if array contains value, return false otherwise
 * C: ternary operator
 * E: did you use === ? what if no <value> is given?
 */

_.contains = function(array, value){

    // return true if array contains value
    // LOOPS :D

    for (var i = 0; i < array.length; i++){
        //ternary operator????? okqay...
        if(array[i] === value){
            return true
        }
    
}
  return false
}
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/


/**
 * I: function takes a collection and a function
 * O: if collection is array, call function for each element for each argument(?)
 *    if collection is object, call function once for each propery with arguments 
 * C:
 * E:
 */

_.each = function (collection, func){
    // do arrays first

    if(Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            func(collection[i], i, collection)
        } //do objects
    } else if (typeof collection === 'object' && collection !== null){
        for (let key in collection){
            if(collection.hasOwnProperty(key)){
                func(collection[key], key, collection)
            }
        }
    }

}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/


/**
 * I: function takes array
 * O: return a new array with all duplicates removed
 * C: use _.index()
 * E:
 */

_.unique = function (array){
    // new array
     var dupArray = []

    for (var i = 0; i < array.length; i++){
        // how do I use _.unique like this?
        if(_.indexOf(dupArray, array[i]) === -1){
            dupArray.push(array[i])
        }
    }

    return dupArray
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

/**
 * I: function takes array and function
 * O: call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*     return a new array of elements for which calling <function> returned true 
 * C:
 * E: if <function> returns something other than true or false?
 */

_.filter = function (array, func){
    // new array hold
    var filterArray = []

    _.each(array, function(element, index, arr) {
        if (func(element, index, arr)) {
            filterArray.push(element)
        }
    })

    return filterArray
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

/**
 * I: function takes array and function
 * O: call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*      return a new array of elements for which calling <function> returned false 
 * C:
 * E:
 */

_.reject = function (array, func){
    var rejectArray = []

    _.each(array, function(element, index, arr) {
        if (!func(element, index, arr)) {
            rejectArray.push(element)
        }
    })

    return rejectArray
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

/**
 * I: function takes array and function
 * O: 1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy 
 * C:
 * E: This is going to return an array of arrays.
 */

_.partition = function(array, func){
    // I think I need 2 arrays, one for truthy and falsy

    var truth = []
    var falsy = []

    // I have a each thingy

    _.each(array, function(element, index, array) {
        if (func(element, index, array)) {
            truth.push(element)
        } else {
            falsy.push(element)
        }
    })

return [truth, falsy]


}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

/**
 * I: function takes
 * O: return 
 * C:
 * E:
 */


_.map =  function(collection, func){
    const output = [];

// determine if collect is an array
    if(Array.isArray(collection)){ // iterate using a loop
        for (let i = 0; i < collection.length; i++){
            // call func for each element pass
            const result = func(collection[i], i, collection);
            output.push(result)
        }
    } else { // else it's an object
        for (var key in collection){
            if (collection.hasOwnProperty(key)){
                var mapResults = func(collection[key], key, collection)
                output.push(mapResults)
            }
        }
    }



    return output
}



// whats the callback function
    // purpose => return modifed verion of the current item in the array
// takes an array and transform then into something else and return it as a new array

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

/**
 * I: function takes array of objects and a property
 * O: return array containing the value of <property> for every element in <array>
 * C:  _.map()
 * E:
 */

_.pluck = function (array, property){
    return _.map(array, function(item){
        return item[property]
    })
    
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

/**
 * I: function takes collection and a function
 * O: 1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false 
 * C:
 * E: 1) what if <function> doesn't return a boolean
 *    2) What if <function> is not given?
 */


// These seem to be like method types so imma see what .every() means

_.every = function(collection, func) {
    // If collection is undefined or null, return false
    if (collection == null) {
        return false;
    }

    // If no function is provided
    if (func === undefined) {
        // For array
        if (Array.isArray(collection)) {
            return collection.every(Boolean);
        }

        // For objects
        if (typeof collection === 'object' && collection !== null) {
            for (let key in collection) {
                if (!collection[key]) return false;
            }
            return true;
        }
    }

    // If function is provided
    if (Array.isArray(collection)) {
        return collection.every(function(element, index) {
            return func(element, index, collection);
        });
    }

    if (typeof collection === 'object' && collection !== null) {
        return Object.entries(collection).every(function([key, value]) {
            return func(value, key, collection);
        });
    }

    return false;
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

/**
 * I: function takes collection and function 
 * O: 1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false 
 * C:
 * E: 1) what if <function> doesn't return a boolean
*     2) What if <function> is not given?
 */

// what .some() means? I thibk I see the => assoicated with it

_.some = function(collection, func){
    // check if function is even probvied

    if(typeof func !== 'function'){
        return collection.some(item => item)
    }


    // array
    if (Array.isArray(collection) === true){
        for (var i = 0; i < collection.length; i++) {
            if(func(collection[i], i, collection)){
                return true
            }
        }
    } // object, do I need a else if? Collections are either arrays ir objecys
    else { 
        for (var key in collection){
            if (collection.hasOwnProperty(key) && func(collection[key], key, collection)){
                    return true
            }
        }

    }

return false
    
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

// okay whatever that means

/**
 * I: function takes an array, function and a seed
 * O: Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call 
 * C:
 * E: if <seed> is not given?
 */

_.reduce = function (array, func, seed){

// assuming that imma need someththing called 'previous result'
var previousResult

    // no seed
    if (seed === undefined){
        previousResult = array[0]

        for (var i = 1; i < array.length; i++){
            previousResult = func(previousResult, array[i], i);
        }
    } else {
        previousResult = seed;

    for (let i = 0; i < array.length; i++) {
      previousResult = func(previousResult, array[i], i);
    }
  }

  return previousResult

}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

/**
 * I: function takes... objects? but a whole lot of them
 * O: return the object with the new copied properties from the other object
 * C:
 * E:
 */

// oh it's like that ...thingy. It takes an unknown number of objects so uhhh... I guess the spread sythax
// it's like object.assign()
// target + ...object

_.extend = function (target, ...object){
    object.forEach(object => {

        // loop through the properties in current object
        for (let key in object) {
          if (object.hasOwnProperty(key)) {
            // give the propert to the target
            target[key] = object[key];
          }
        }
      });
      return target;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}