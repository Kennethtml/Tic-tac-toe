
var but=document.querySelectorAll(".butt")
var button1=document.querySelector("#one")
var button2=document.querySelector("#two")
var button3=document.querySelector("#three")
var button4=document.querySelector("#four")
var button5=document.querySelector("#five")
var button6=document.querySelector("#six")
var button7=document.querySelector("#seven")
var button8=document.querySelector("#eight")
var button9=document.querySelector("#nine")

A=undefined;
function ment(b){
    if (A===undefined ){
    A=true;
    b.style.background="red"
    return true;
    }
    
     else if (A===!undefined ){
     A=undefined;
     b.style.background="blue"
     return false;
    }
}
    

but.forEach(
    function(b){b.addEventListener("click",
    function(){ ment(b)
        if(button3.style.background==="blue" &&
       button6.style.background==="blue" &&
       button9.style.background==="blue"
    ){alert("Team blue wins") 
        
    
    }

    else if(button1.style.background==="blue" &&
         button2.style.background==="blue" &&
         button3.style.background==="blue"
    ){alert("Team blue wins")}

    
    else if(button2.style.background==="blue" &&
         button5.style.background==="blue" &&
         button8.style.background==="blue"
    ){alert("Team blue wins")}
    
    else if(button1.style.background==="blue" &&
         button4.style.background==="blue" &&
         button7.style.background==="blue"
    ){alert("Team blue wins")}

    else if(button4.style.background==="blue" &&
    button5.style.background==="blue" &&
    button6.style.background==="blue"
    ){alert("Team blue wins")}
 
    else if(button7.style.background==="blue" &&
    button8.style.background==="blue" &&
    button9.style.background==="blue"
    ){alert("Team blue wins")}

    else if(button1.style.background==="blue" &&
    button5.style.background==="blue" &&
    button9.style.background==="blue"
    ){alert("Team blue wins")}

    else if(button3.style.background==="blue" &&
    button5.style.background==="blue" &&
    button7.style.background==="blue"
    ){alert("Team blue wins")}

    //for the Red team

      if(button3.style.background==="red" &&
       button6.style.background==="red" &&
       button9.style.background==="red"
    ){alert("Team red wins")}

    else if(button1.style.background==="red" &&
         button2.style.background==="red" &&
         button3.style.background==="red"
    ){alert("Team red wins")}

    
    else if(button2.style.background==="red" &&
         button5.style.background==="red" &&
         button8.style.background==="red"
    ){alert("Team red wins")}
    
    else if(button1.style.background==="red" &&
         button4.style.background==="red" &&
         button7.style.background==="red"
    ){alert("Team red wins")}

    else if(button4.style.background==="red" &&
    button5.style.background==="red" &&
    button6.style.background==="red"
    ){alert("Team red wins")}
 
    else if(button7.style.background==="red" &&
    button8.style.background==="red" &&
    button9.style.background==="red"
    ){alert("Team red wins")}

    else if(button1.style.background==="red" &&
    button5.style.background==="red" &&
    button9.style.background==="red"
    ){alert("Team red wins")}

    else if(button3.style.background==="red" &&
    button5.style.background==="red" &&
    button7.style.background==="red"
    ){alert("Team red wins")}
    
       
    

    })})

    

