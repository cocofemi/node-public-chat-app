 var moment = require('moment');

// var date = new Date();

// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'year').subtract(1, 'months')
// console.log(date.format('MMMM Do, YYYY'));

var someTimeStamp = moment().valueOf()
console.log(someTimeStamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));