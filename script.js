function  myFunction(){
    var d=new Date();
    
    
    
    //document.getElementById("demo").style.color="red";
    
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    
    var da=d.getDay();
    
    if(da===1){
        da="Monday";
    }
    
    else if(da===2){
        da="Tuesday";
    }
    
    else if(da===3){
        da="Wednesday";
    }
   else if(da===4){
        da="Thursday";
    }
    else if(da===5){
        da="Friday";
    }
    
   else  if(da===6){
        da="Saturday";
    }
   
   else {
       da="Sunday";
   }
   
   
    document.getElementById("demo").innerHTML=h+" :  "+m+" :  "+s+"  "+"<br>"+da;
}



setInterval(myFunction,100);