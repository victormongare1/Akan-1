  var century,year,month,dayOfMonth, dayOfWeek, day;

  function getInput(){
    century=parseInt(document.getElementById("century").value);
    year=parseInt(document.getElementById("year").value);
    month=parseInt(document.getElementById("month").value);
    dayOfMonth=parseInt(document.getElementById("dayOfMonth").value);

    if (century ==""){
      alert("Input the correct century");
      return false;
    }else if(year ==""){
      alert("Input the correct year");
      return false;
    }else if(month ==""){
      alert("Input the correct month");
      return false;
    }else if(dayOfMonth ==""){
      alert("Input the correct date");
      return false;
    }
  }

  function calculateDay(){
    getInput();
    dayOfWeek=((((century/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7)-1;
    console.log(dayOfWeek);
    return(Math.floor(dayOfWeek<0));
    if(dayOfWeek<0){
      dayOfWeek=dayOfWeek*-1;
    }
    else if(dayOfWeek>0){
      return dayOfWeek;
    }
  }
  function checkDayOfWeek(){
    day=calculateDay();
    checkGender();
    console.log("The function runs");
  }
  let daysOfWeek=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  let malenames=["kwasi","kwadwo","kwabena","kwaku","yaw","kofi","kwame"];
  
  function checkGender(){
    var gen=document.getElementsByName("rads");
    if(gen[0].checked ==true){
      var gender="male";
    }else if(gen[1].checked ==true){
      var gender="female";
    }
    else{
      console.log("pass");
    }
    switch(gender){
      case gender="male":
        switch(day){
          case (0||-0):
            document.getElementById("result").innerHTML="The dayis on a sunday."+" "+"Your akan name is"+maleNames[0];
            break;
            case(1||-1):
            document.getElementById("result").innerHTML="The dayis on a monday."+" "+"Your akan name is"+maleNames[1];
            break;
            case(2||-2):
            document.getElementById("result").innerHTML="The dayis on a tuesday."+" "+"Your akan name is"+maleNames[2];
            break;
            case(3||-3):
            document.getElementById("result").innerHTML="The dayis on a wednesday."+" "+"Your akan name is"+maleNames[3];
            break;
            case(4||-4):
            document.getElementById("result").innerHTML="The dayis on a thursday."+" "+"Your akan name is"+maleNames[4];
            break;
            case(5||-5):
            document.getElementById("result").innerHTML="The dayis on a friday."+" "+"Your akan name is"+maleNames[5];
            break;
            case(6||-6):
            document.getElementById("result").innerHTML="The dayis on a saturday."+" "+"Your akan name is"+maleNames[6];
            break;
            default:
        }
    }
    break;
     gender = "female";
            switch(day){
              case 0 || -0:
                document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  akosua";
              break;
              case 1 || -1:
                document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is adwoa ";
              break;
              case 2 || -2:
                document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is abenaa";
              break;
              case 3 || -3:
                document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is akua";
              break;
              case 4 || -4:
                document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is yaa";
              break;
              case 5 || -5:
                document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is afua";
              break;
              case 6 || -6:
                document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is ama";
              break;

          }
    break
    default:
    console.log("pass");
  }  
  
