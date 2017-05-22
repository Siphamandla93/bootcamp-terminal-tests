module.exports = function(Saturday){

var isWeekday=!Saturday.startsWith('S')
return isWeekday;
};
