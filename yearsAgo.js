
   module.exports = function(year){

  var date =new Date();

  var OutCome = date.getFullYear();

  var size = OutCome - year;

  return size;
};
// yearsAgo(2004);
