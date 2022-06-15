$(document).ready(function(){
    $('#mainipt').keypress(function(e){
        if(e.which===13){
            var a=$("#mainipt").val();
            let b=regexp(a);
            $("#opt").html(b);
        }
    })
    })

function regexp(x){
    $("#opt").val("hi");
    let q=x.trim();
    let output='';
    $("#opt").val(q);
    let firsttwo=q.substring(0,2);
    let rest=q.substring(2,);
    if(q.search(/--help/i)==0){
        if(q==='--help'){
            output="available commands:<br><br>ls <div style='text-align: left;'>(show the full list or content of your directory)</div><br>./[program name] <div style='text-align: left;'>(to run programs)</div>";
            $('#mainipt').focus().val("");
        }
        else{
            output="did you mean --help?";
            $('#mainipt').focus();
        }
    }
    else if(q.search(/ls/i)==0){
        if(q==="ls"){
            output="My_Self.exe<br>My_Hobbies.exe<br>Feedback.exe"
            $('#mainipt').focus().val("");
        }
        else if(q=="ls -a"){
            output="My_Self.exe<br>My_Hobbies.exe<br>Feedback.exe<br>SECRET.exe";
        }
        else{
            output="did you mean ls?";
            $('#mainipt').focus();
        }
    }
    else if(firsttwo=="./"){
        if(rest==="My_Self.exe"||rest==="My_Self"){
            window.open("templates/myself.html");
        }
        else if(rest==="My_Hobbies.exe"||rest==="My_Hobbies"){
            window.open("templates/hobbies1.html");
        }
        else if(rest==="Feedback.exe"||rest==="Feedback"){
            window.open("templates/feedback.html");
        }
    }
    else{
        output=""+q+": command is not found.";
    }
    
    return output;
}