$(document).ready(function () {
    $(".a").click(function () {
        
    var radioValue = $("input[name='feeling']:checked").val();
    var selValue = $("input[name='b']:checked").val();
    alert(radioValue);
    alert(selValue);
    
    });
});