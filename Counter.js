module.exports = function (){
  var val = 0;

  this.increment = function(){
    val++;
  };

  this.getValue = function(){
    return val;
  };
};
