                // DOCUMENT SHOW AFTER LOAD COMPLETE
var logCreateAcc = document.getElementById('logCreateAcc');
var bottomHolder = document.getElementsByClassName('bottomHolder')[0];

document.body.onload=function(){
    logCreateAcc.style.display = "flex";
    bottomHolder.style.marginBottom = "0";
}
                // THE CREATE ACCOUNT SCRIPTS START
                
                // THE CREATE ACC BOX EXPAND STARTS
var accHolder = document.getElementById('accHolder');
var createAccBtn = document.getElementById('createAccBtn');
var createAccBox = document.getElementsByClassName('createAccBox')[0];
var createAccTip = document.getElementById('createAccTip');


function accBoxExpand(){
    accHolder.style.height = "404px";
    createAccBtn.style.backgroundColor = "#2d2d2d"; 
    createAccBtn.style.color = "#fff"; 
    createAccBtn.style.cursor = "default";
    createAccBox.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.2)";
    createAccTip.style.display = "none";
}
createAccBtn.onclick = accBoxExpand;

                // THE CREATE ACC BOX EXPAND ENDS

                // THE LOG BOX EXPAND STARTS
var logFormHolder = document.getElementById('logFormHolder');


                // THE LOG BOX EXPAND ENDS

            //THE CREATE ACCOUNT USERNAME CHECK STARTS 

var accUsername = document.getElementsByName("accUsername")[0];
var userCheck = document.getElementsByClassName('userCheck')[0];
var userTimes = document.getElementsByClassName('userTimes')[0];
var accUNInfo = document.getElementsByClassName('accUNInfo')[0];


function searchUsername(){
    var accUsernameValue = accUsername.value;
    
    if(accUsernameValue.length > 0){
        if(accUsernameValue.search(" ") > -1 || accUsernameValue.length < 5 || accUsernameValue.length > 31){
           // THE USERNAME IS INCORRECT
            userTimes.style.visibility="visible";
            userCheck.style.visibility="hidden";
        }else{
           // THE USERNAME IS CORRECT
            userCheck.style.visibility="visible";
            userTimes.style.visibility="hidden";
        }
    }else{
        userCheck.style.visibility="hidden";
        userTimes.style.visibility="hidden";
    }
    
}

accUsername.onkeyup=searchUsername;
accUsername.onkeydown=searchUsername;
accUsername.onkeypress=searchUsername;
accUsername.onchange=searchUsername;
accUsername.onfocus = function(){accUNInfo.style.opacity="1"}
accUsername.onblur = function(){accUNInfo.style.opacity="0"}
                //THE CREATE ACCOUNT USERNAME CHECK ENDS

                //THE CREATE ACCOUNT PASSWORD CHECK STARTS
var accPass = document.getElementsByName("accPass")[0];
var passCheck = document.getElementsByClassName('passCheck')[0];
var passTimes = document.getElementsByClassName('passTimes')[0];
var accPassError = document.getElementsByClassName('accPassError')[0];
var accPassInfo = document.getElementsByClassName('accPassInfo')[0];



function searchPassword(){
    var accPassValue = accPass.value;
    
    if(accPassValue.length > 0){
        if(accPassValue.search(" ") > -1 || accPassValue.length < 5 || accPassValue.length > 31){
           // THE USERNAME IS INCORRECT
            passTimes.style.visibility="visible";
            passCheck.style.visibility="hidden";
            accPassInfo.style.opacity="0";
            accPassError.style.opacity="1";
        }else{
           // THE USERNAME IS CORRECT
            passCheck.style.visibility="visible";
            passTimes.style.visibility="hidden";
            accPassInfo.style.opacity="1";
            accPassError.style.opacity="0";
        }
    }else{
        passTimes.style.visibility="hidden";
        passCheck.style.visibility="hidden";
        accPassError.style.opacity="0";
    }
}

accPass.onkeyup=searchPassword;
accPass.onkeydown=searchPassword;
accPass.onkeypress=searchPassword;
accPass.onchange=searchPassword;
accPass.onfocus = function(){accPassInfo.style.opacity="1"};
accPass.onblur = function(){accPassInfo.style.opacity="0";accPassError.style.opacity="0";};
                //THE CREATE ACCOUNT PASSWORD CHECK ENDS

                //THE CREATE ACCOUNT FORM SUBMIT STARTS

function accSubmit(event){
    var accPassValue = accPass.value;
    var accUsernameValue = accUsername.value;
    
    if(accPassValue.search(" ") > -1 || accPassValue.length < 5 || accPassValue.length > 31){
        event.preventDefault();
    }else{
        
    }
    if(accUsernameValue.search(" ") > -1 || accUsernameValue.length < 5 || accUsernameValue.length > 31){
        event.preventDefault();
    }else{
        
    }
}

                // THE CREATE ACCOUNT SCRIPTS END