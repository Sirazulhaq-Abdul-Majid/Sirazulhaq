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
            output="available commands:<br><br><b>ls</b> <div style='text-align: left;'>(show the full list or content of your directory)</div><br><br><br><b>./</b>[program name] <div style='text-align: left;'>(to run programs)<br>ie:<b>&emsp;./My_Self</b></div>";
            $('#mainipt').focus().val("");
            $('#mainipt').focus().val("");
        }
        else{
            output="did you mean --help?";
            $('#mainipt').focus();
            $('#mainipt').focus().val("");
        }
    }
    else if(q.search(/ls/i)==0){
        if(q==="ls"){
            output="My_Self.exe<br>My_Hobbies.exe<br>Feedback.exe"
            $('#mainipt').focus().val("");
        }
        else if(q=="ls -a"){
            output="My_Self.exe<br>My_Hobbies.exe<br>Feedback.exe<br>SECRET.exe";
            $('#mainipt').focus().val("");
        }
        else{
            output="did you mean ls?";
            $('#mainipt').focus();
            $('#mainipt').focus().val("");
        }
    }
    else if(firsttwo=="./"){
        if(rest==="My_Self.exe"||rest==="My_Self"){
            window.open("templates/myself.html","_self");
        }
        else if(rest==="My_Hobbies.exe"||rest==="My_Hobbies"){
            window.open("templates/hobbies1.html","_self");
        }
        else if(rest==="Feedback.exe"||rest==="Feedback"){
            window.open("templates/feedback.html","_self");
        }
        else if(rest==="SECRET.exe"||rest==="SECRET"){
            window.open('https://youtu.be/dQw4w9WgXcQ',"_self");
        }
    }
    else{
        output=""+q+": command is not found.";
        $('#mainipt').focus().val("");
    }
    
    return output;
}