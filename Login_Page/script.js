function FormValidation(){
    debugger 
    var un=document.getElementById('UserName').value;
    var pwd=document.getElementById('password').value;
    if( un==""||pwd==""){
        if( un==""&&pwd==""){
            document.getElementById('UserName').style.borderColor = "red";
            document.getElementById('password').style.borderColor = "red";
            return false;
        }
        else if(un==""&&pwd!=""){
            document.getElementById('UserName').style.borderColor = "red";
            document.getElementById('password').style.borderColor = "green";
            return false;
        }
        else if(un!=""&&pwd==""){
            document.getElementById('UserName').style.borderColor = "green";
            document.getElementById('password').style.borderColor = "red";
            return false;
        }
        else
    {
        document.getElementById('UserName').style.borderColor = "green";
        document.getElementById('password').style.borderColor = "green";
    }
   
}
}

function NameValidation(){
    debugger
    var un=document.getElementById('UserName').value;
    if( un==""){
        document.getElementById('UserName').style.borderColor = "red";
    }
    else
    {
        document.getElementById('UserName').style.borderColor = "green";
    }
}

function PwdValidation(){
    debugger
    var pwd=document.getElementById('password').value;
    if( pwd==""){
        document.getElementById('password').style.borderColor = "red";
    }
    else
    {
        document.getElementById('password').style.borderColor = "green";
    }
}