// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
let q = require('q')

const promiseGreetGet = msg => {
  let defer = q.defer()
    defer.resolve('Sender says ' + (msg || 'hello') + ' to receiver using GET method with promise')
  return defer.promise
}


module.exports = function(Message) {

  // // // default approach of loopback
  // // Message.greet = function(msg, cb) {
  // //   process.nextTick(function() {
  // //     msg = msg || 'hello';
  // //     cb(null, 'Sender says ' + msg + ' to receiver');
  // //   });
  // // };
  
  // // promise example
  // Message.promiseGreetPost = msg => {
  //   let defer = q.defer()
  //   defer.resolve('Sendeßr says ' + (msg || 'hello') + ' to receiver using POST method with promise')
  //   return defer.promise
  // }

  // // writing a seprate function and assigning it as value example
  // Message.promiseGreetGet = promiseGreetGet
  
  // // await example (POST)
  // Message.greetPost = async msg  => 'Sender says ' + (msg || 'hello') + ' to receiver using POST method'
  
  // // how to handle get and post on same url example
  // Message.greetGet = async msg  => 'Sender says ' + (msg || 'hello') + ' to receiver using GET method'
 
  // handler function in seprate file example
  Message.wishFestivalGet = require('./controllers/festivalWishGet').wishFest
}
