  


  var num1 = 100;
  var num2 = 200;

  function swapVariables(value1, value2) {
    console.log("before swap:",value1,value2);
    temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("afted swap:", value1, value2);

  }
  swapVariables(num1,num2);