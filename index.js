var async = require('async');

var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
var configs = {};

async.forEachOf(obj, (value, key, callback) => {
    setTimeout(function() {
      console.log(value)
    }, 1000)

}, err => {
    if (err) console.error(err.message);
    // configs is now a map of JSON data
    doSomethingWith(configs);
});

var square = function (num, doneCallback) {
  console.log(num * num);
  // Nothing went wrong, so callback with a null error.
  return doneCallback(null);
};

var amendString = function(str, doneCallback) {
  str = str + "woot"
  doneCallback(null, str)
}

async.each([2, 4], square, function(err) {
  console.log("finished")
})


async.map(['file1', 'file2'], amendString, function(err, results) {
  console.log("done map")
  console.log(results)
})
