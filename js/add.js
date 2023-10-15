$(document).ready(function(){

    $('#ed').on('change',function(){
        var GetValue=$("#ed").val();
   $('#category').val(GetValue);
   console.log("value got");
});
    });

