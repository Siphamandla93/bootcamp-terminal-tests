   module.exports = function(totalUsage){
  var total = totalUsage.split(', ');
  var callCost = 2.75;
  var smsCost = 0.65;
  var countCalls = 0;
  var countSms = 0;
  var totalBill = 0;

  for (var i = 0; i< total.length; i++)
  {
    if (total[i].startsWith('c'))
    {
      countCalls ++;
    }
    else if (total[i].startsWith('s'))
    {
      countSms ++;
    }
  }
  totalBill = (callCost * countCalls) + (smsCost * countSms);
  return 'R' + totalBill.toFixed(2);
  console.log(totalBill);
}
