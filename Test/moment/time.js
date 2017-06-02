var moment = require('moment');
moment().format('YYYY-MM-DD HH:mm') >= '2016-07-11 03:00'

console.log(moment().format('YYYY-MM-DD HH:mm'))

console.log(moment().format('YYYY-MM-DD HH:mm') >= '2016-07-11 03:00')
console.log(moment().format('YYYY-MM-DD HH:mm') >= '2016-07-08 09:32')

//时间戳
console.log(moment(1471325656 * 1000).format('YYYY-MM-DD HH:mm:ss'))