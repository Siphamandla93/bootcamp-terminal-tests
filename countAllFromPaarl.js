module.exports = function(RegNo){

    var motor = [];
    var team = RegNo.split(', ');
    for (var i =0;i<team.length;i++){
     if (team[i].startsWith('CJ')){
       motor.push(team[i])
       console.log(team[i])
     }
}
    return motor.length;
  }
