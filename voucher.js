// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
//this fucntion checks if post is selected on form and then will adjust email required and address visible 
function checkPost(){
    var sendByPost = $("#post")[0].checked
    if (sendByPost){
        $("#email").removeAttr("required")
        $("#email")[0].labels[0].innerHTML = "Email"
        $(".addressform").show()
    }else{
        $("#email").prop("required",true)
        $("#email")[0].labels[0].innerHTML = "Email (Required)"
        $(".addressform").hide()
    }
}
$(function(){

    checkPost()   

    $("#sendBy").click(function(){
        checkPost()       
    })

})