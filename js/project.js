$(document).ready(function () {
    console.log('document ready');

    $('#frm').validate({
        rules: {
            firstname: "required",
            email: {
                required: true,
                email: true
            },
            pincode: {
                required: true,
                minlength: 5,
                number: true,

            },
            date: "required",
            time: "required",
            address: {
                required: true,
                minlength: 10,
            },
        },messages: {
                firstname: "please enter your first name",
                email: {
                    required: "please enter email",
                    email: "please enter valid email",

                },
                pincode: {
                    required: "Enter a pin code",
                    minlength: "Enter min 5 digits",
                    number: "Enter valid Number",

                },
                date: "Select the date",
                time: "Opt the timings",
                address: {
                    required: "Enter Address",
                    minlength: "Enter min 10 char",
                },
            },
            
        })
       

        $("#submit").click(function(){
            alert('Name:'+$("#fn").val()+'\n'+'Email:' +$("#email").val());
          });

        
         





});



