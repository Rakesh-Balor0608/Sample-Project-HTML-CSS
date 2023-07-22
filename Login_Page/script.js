function FormValidation(){
    debugger 
    var un=document.getElementById('UserName').value;
    var pwd=document.getElementById('password').value;
    if( un==""||pwd==""){
        if( un==""&&pwd==""){
            document.getElementById('UserName').style.borderColor = '#d20202';
            document.getElementById('password').style.borderColor = '#d20202';
            return false;
        }
        else if(un==""&&pwd!=""){
            document.getElementById('UserName').style.borderColor = '#d20202';
            document.getElementById('password').style.borderColor = '#02a702';
            return false;
        }
        else if(un!=""&&pwd==""){
            document.getElementById('UserName').style.borderColor = '#02a702';
            document.getElementById('password').style.borderColor = '#d20202';
            return false;
        }
        else
    {
        document.getElementById('UserName').style.borderColor = '#02a702';
        document.getElementById('password').style.borderColor = '#02a702';
    }
   
}
}

function NameValidation(){
    debugger
    var un=document.getElementById('UserName').value;
    if( un==""){
        document.getElementById('UserName').style.borderColor = '#d20202';
    }
    else
    {
        document.getElementById('UserName').style.borderColor = '#02a702';
    }
}

function PwdValidation(){
    debugger
    var pwd=document.getElementById('password').value;
    if( pwd==""){
        document.getElementById('password').style.borderColor = '#d20202';
    }
    else
    {
        document.getElementById('password').style.borderColor = '#02a702';
    }
}